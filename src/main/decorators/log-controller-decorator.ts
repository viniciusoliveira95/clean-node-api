import { ILogErrorRepository } from '@/data/protocols'
import { IController, HttpResponse, HttpRequest } from '@/presentation/protocols'

export class LogControllerDecorator implements IController {
  constructor (
    private readonly controller: IController,
    private readonly logErrorRepository: ILogErrorRepository
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest)
    if (httpResponse.statusCode === 500) {
      await this.logErrorRepository.logError(httpResponse.body.stack)
    }
    return httpResponse
  }
}

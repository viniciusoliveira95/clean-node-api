import { noContent, ok, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse, HttpRequest } from '@/presentation/protocols'
import { LoadSurveys } from '@/domain/usecases'

export class LoadSurveysController implements Controller {
  constructor (private readonly loadSurveys: LoadSurveys) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const surveys = await this.loadSurveys.load(httpRequest.accountId)
      return surveys.length ? ok(surveys) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

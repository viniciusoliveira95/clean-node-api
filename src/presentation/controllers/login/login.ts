import { badRequest, ok, serverError, unauthorized } from '../../helpers/http/httpHelper'
import { Controller, HttpRequest, HttpResponse, Authentication, Validation } from './login-protocols'

export class LoginController implements Controller {
  private readonly validation: Validation
  private readonly authentication: Authentication

  constructor (authentication: Authentication, validation: Validation) {
    this.validation = validation
    this.authentication = authentication
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      // const requiredFields = ['email', 'password']
      // for (const field of requiredFields) {
      //   if (!httpRequest.body[field]) {
      //     return badRequest(new MissingParamError(field))
      //   }
      // }
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { email, password } = httpRequest.body
      // const isValid = this.emailValidator.isValid(email)
      // if (!isValid) {
      //   return badRequest(new InvalidParamError('email'))
      // }
      const accessToken = await this.authentication.auth(email, password)
      if (!accessToken) {
        return unauthorized()
      }
      return ok({ accessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}

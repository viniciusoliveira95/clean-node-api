import { makeLoginValidation } from './login-validation-factory'
import { makeDbAuthentication, makeLogControllerDecorator } from '@/main/factories'
import { IController } from '@/presentation/protocols'
import { LoginController } from '@/presentation/controllers'

export const makeLoginController = (): IController => {
  const controller = new LoginController(makeDbAuthentication(), makeLoginValidation())
  return makeLogControllerDecorator(controller)
}

import { makeSignUpValidation } from './signup-validation-factory'
import { makeDbAuthentication, makeDbAddAccount, makeLogControllerDecorator } from '@/main/factories'
import { SignUpController } from '@/presentation/controllers'
import { IController } from '@/presentation/protocols'

export const makeSignUpController = (): IController => {
  const controller = new SignUpController(makeDbAddAccount(), makeSignUpValidation(), makeDbAuthentication())
  return makeLogControllerDecorator(controller)
}

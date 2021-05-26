
import { IValidation } from '@/presentation/protocols'
import { EmailValidatorAdapter } from '@/infra/validators'
import { CompareFieldsValidation, RequiredFieldValidation, ValidationComposite, EmailValidation } from '@/validation/validators'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: IValidation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}


import { IValidation } from '@/presentation/protocols'
import { EmailValidatorAdapter } from '@/infra/validators'
import { EmailValidation, RequiredFieldValidation, ValidationComposite } from '@/validation/validators'

export const makeLoginValidation = (): ValidationComposite => {
  const validations: IValidation[] = []
  for (const field of ['email', 'password']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}

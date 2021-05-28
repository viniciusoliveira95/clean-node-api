import { IAddAccount, IAuthentication } from '@/domain/usecases'

export const mockAddAccountParams = (): IAddAccount.Params => ({
  name: 'any_name',
  email: 'any_email@mail.com',
  password: 'any_password'
})

export const mockFakeAuthentication = (): IAuthentication.Params => ({
  email: 'any_email@mail.com',
  password: 'any_password'
})

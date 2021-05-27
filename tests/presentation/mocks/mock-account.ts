import { mockAccountModel } from '@/tests/domain/mocks'
import { AccountModel, AuthenticationtModel } from '@/domain/models'
import { IAuthentication, AuthenticationParams, IAddAccount, ILoadAccountByToken } from '@/domain/usecases'

export const mockAddAccount = (): IAddAccount => {
  class AddAccountStub implements IAddAccount {
    async add (account: IAddAccount.Params): Promise<IAddAccount.Result> {
      return true
    }
  }
  return new AddAccountStub()
}

export const mockAuthentication = (): IAuthentication => {
  class AuthenticationStub implements IAuthentication {
    async auth (authentication: AuthenticationParams): Promise<AuthenticationtModel> {
      return {
        accessToken: 'any_token',
        name: 'any_name'
      }
    }
  }
  return new AuthenticationStub()
}

export const mockLoadAccountByToken = (): ILoadAccountByToken => {
  class LoadAccountByTokenStub implements ILoadAccountByToken {
    async load (accessToken: string, role?: string): Promise<AccountModel> {
      return await Promise.resolve(mockAccountModel())
    }
  }
  return new LoadAccountByTokenStub()
}

import { IAuthentication, IAddAccount, ILoadAccountByToken } from '@/domain/usecases'

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
    async auth (authentication: IAuthentication.Params): Promise<IAuthentication.Result> {
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
    async load (accessToken: string, role?: string): Promise<ILoadAccountByToken.Result> {
      return await Promise.resolve({ id: 'any_id' })
    }
  }
  return new LoadAccountByTokenStub()
}

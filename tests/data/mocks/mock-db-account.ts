import { IAddAccountRepository, ICheckAccountByEmailRepository, ILoadAccountByEmailRepository, ILoadAccountByTokenRepository, IUpdateAccessTokenRepository } from '@/data/protocols'

export const mockAddAccountRepository = (): IAddAccountRepository => {
  class AddAccountRepositoryStub implements IAddAccountRepository {
    async add (accountData: IAddAccountRepository.Params): Promise<IAddAccountRepository.Result> {
      return true
    }
  }
  return new AddAccountRepositoryStub()
}

export const mockLoadAccountByEmailRepository = (): ILoadAccountByEmailRepository => {
  class LoadAccountByEmailRepositoryStub implements ILoadAccountByEmailRepository {
    async loadByEmail (email: string): Promise<ILoadAccountByEmailRepository.Result> {
      return await Promise.resolve({
        id: 'any_id',
        name: 'any_name',
        password: 'any_password'
      })
    }
  }
  return new LoadAccountByEmailRepositoryStub()
}

export const mockCheckAccountByEmailRepository = (): ICheckAccountByEmailRepository => {
  class CheckAccountByEmailRepositoryStub implements ICheckAccountByEmailRepository {
    async checkByEmail (email: string): Promise<ICheckAccountByEmailRepository.Result> {
      return await Promise.resolve(false)
    }
  }
  return new CheckAccountByEmailRepositoryStub()
}


export const mockLoadAccountByTokenRepository = (): ILoadAccountByTokenRepository => {
  class LoadAccountByTokenRepositoryStub implements ILoadAccountByTokenRepository {
    async loadByToken (token: string, role?: string): Promise<ILoadAccountByTokenRepository.Result> {
      return await Promise.resolve({ id: 'any_id' })
    }
  }
  return new LoadAccountByTokenRepositoryStub()
}

export const mockUpdateAccessTokenRepository = (): IUpdateAccessTokenRepository => {
  class UpdateAccessTokenRepositoryStub implements IUpdateAccessTokenRepository {
    async updateAccessToken (id: string, token: string): Promise<void> {
      return await Promise.resolve()
    }
  }
  return new UpdateAccessTokenRepositoryStub()
}

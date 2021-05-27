import { IAddAccount } from '@/domain/usecases'

export interface IAddAccountRepository {
  add (accountData: IAddAccountRepository.Params): Promise<IAddAccount.Result>
}

export namespace IAddAccountRepository {
  export type Params = IAddAccount.Params
  export type Result = boolean
}

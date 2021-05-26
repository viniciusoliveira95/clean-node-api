import { AddAccountParams } from '@/domain/usecases'
import { AccountModel } from '@/domain/models'

export interface AddAccountRepository {
  add (accountData: AddAccountParams): Promise<AccountModel>
}

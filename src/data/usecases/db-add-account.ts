import { IHasher, IAddAccountRepository, ILoadAccountByEmailRepository } from '@/data/protocols'
import { IAddAccount } from '@/domain/usecases'

export class DbAddAccount implements IAddAccount {
  constructor (
    private readonly hasher: IHasher,
    private readonly addAccountRepository: IAddAccountRepository,
    private readonly loadAccountByEmailRepository: ILoadAccountByEmailRepository

  ) {}

  async add (accountData: IAddAccount.Params): Promise<IAddAccount.Result> {
    const exists = await this.loadAccountByEmailRepository.loadByEmail(accountData.email)
    let isValid = false
    if (!exists) {
      const hashedPassword = await this.hasher.hash(accountData.password)
      isValid = await this.addAccountRepository.add({ ...accountData, password: hashedPassword })
    }
    return isValid
  }
}

import { MongoHelper } from './'
import { IAddAccountRepository, ILoadAccountByEmailRepository, ILoadAccountByTokenRepository, IUpdateAccessTokenRepository } from '@/data/protocols'
import { AccountModel } from '@/domain/models'

export class AccountMongoRepoistory implements
IAddAccountRepository,
ILoadAccountByEmailRepository,
IUpdateAccessTokenRepository,
ILoadAccountByTokenRepository {
  async add (accountData: IAddAccountRepository.Params): Promise<IAddAccountRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    return result.ops[0] !== null
  }

  async loadByEmail (email: string): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({ email })
    return account && MongoHelper.map(account)
  }

  async updateAccessToken (id: string, token: string): Promise<void> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.updateOne(
      {
        _id: id
      }, {
        $set: {
          accessToken: token
        }
      }
    )
  }

  async loadByToken (token: string, role?: string): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({
      accessToken: token,
      $or: [{
        role
      }, {
        role: 'admin'
      }]
    })
    return account && MongoHelper.map(account)
  }
}

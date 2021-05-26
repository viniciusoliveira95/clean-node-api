import { IAddAccount } from '@/domain/usecases'
import { DbAddAccount } from '@/data/usecases'
import { AccountMongoRepoistory } from '@/infra/db'
import { BcryptAdapter } from '@/infra/cryptography'

export const makeDbAddAccount = (): IAddAccount => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepoistory = new AccountMongoRepoistory()
  return new DbAddAccount(bcryptAdapter, accountMongoRepoistory, accountMongoRepoistory)
}

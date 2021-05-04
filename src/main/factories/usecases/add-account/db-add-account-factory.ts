import { DbAddAccount } from '../../../../data/usecases/add-account/db-add-account'
import { AccountMongoRepoistory } from '../../../../infra/db/mongodb/account/account-mongo-repository'
import { BcryptAdapter } from '../../../../infra/cryptography/bcrypt/bcrypt-adapter'
import { AddAccount } from '../../../../domain/usecases/add-account'

export const makeDbAddAccount = (): AddAccount => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepoistory = new AccountMongoRepoistory()
  return new DbAddAccount(bcryptAdapter, accountMongoRepoistory)
}
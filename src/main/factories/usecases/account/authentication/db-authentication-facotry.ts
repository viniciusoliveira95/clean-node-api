import env from '@/main/config/env'
import { Authentication } from '@/domain/usecases/authentication'
import { DbAuthentication } from '@/data/usecases/authentication/db-authentication'
import { AccountMongoRepoistory } from '@/infra/db/mongodb/account/account-mongo-repository'
import { BcryptAdapter } from '@/infra/cryptography/bcrypt/bcrypt-adapter'
import { JwtAdapter } from '@/infra/cryptography/jwt-adapter/jwt-adapter'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepoistory = new AccountMongoRepoistory()
  return new DbAuthentication(accountMongoRepoistory, bcryptAdapter, jwtAdapter, accountMongoRepoistory)
}

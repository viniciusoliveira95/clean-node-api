import env from '@/main/config/env'
import { Authentication } from '@/domain/usecases'
import { DbAuthentication } from '@/data/usecases'
import { AccountMongoRepoistory } from '@/infra/db'
import { BcryptAdapter, JwtAdapter } from '@/infra/cryptography'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepoistory = new AccountMongoRepoistory()
  return new DbAuthentication(accountMongoRepoistory, bcryptAdapter, jwtAdapter, accountMongoRepoistory)
}

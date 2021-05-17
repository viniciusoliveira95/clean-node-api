import env from '@/main/config/env'
import { LoadAccountByToken } from '@/domain/usecases/account/load-account-by-token'
import { DbLoadAccountByToken } from '@/data/usecases/account/load-account-by-token/db-load-account-by-token'
import { AccountMongoRepoistory } from '@/infra/db/mongodb/account/account-mongo-repository'
import { JwtAdapter } from '@/infra/cryptography/jwt-adapter/jwt-adapter'

export const makeDbLoadAccountByToken = (): LoadAccountByToken => {
  const jwAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepoistory = new AccountMongoRepoistory()
  return new DbLoadAccountByToken(jwAdapter, accountMongoRepoistory)
}

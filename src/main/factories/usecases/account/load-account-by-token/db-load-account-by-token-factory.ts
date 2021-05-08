import { AccountMongoRepoistory } from '../../../../../infra/db/mongodb/account/account-mongo-repository'
import { LoadAccountByToken } from '../../../../../domain/usecases/load-account-by-token'
import { DbLoadAccountByToken } from '../../../../../data/usecases/load-account-by-token/db-load-account-by-token'
import { JwtAdapter } from '../../../../../infra/cryptography/jwt-adapter/jwt-adapter'
import env from '../../../../config/env'

export const makeDbLoadAccountByToken = (): LoadAccountByToken => {
  const jwAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepoistory = new AccountMongoRepoistory()
  return new DbLoadAccountByToken(jwAdapter, accountMongoRepoistory)
}

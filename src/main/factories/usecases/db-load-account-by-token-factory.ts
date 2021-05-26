import env from '@/main/config/env'
import { LoadAccountByToken } from '@/domain/usecases'
import { DbLoadAccountByToken } from '@/data/usecases'
import { AccountMongoRepoistory } from '@/infra/db'
import { JwtAdapter } from '@/infra/cryptography'

export const makeDbLoadAccountByToken = (): LoadAccountByToken => {
  const jwAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepoistory = new AccountMongoRepoistory()
  return new DbLoadAccountByToken(jwAdapter, accountMongoRepoistory)
}

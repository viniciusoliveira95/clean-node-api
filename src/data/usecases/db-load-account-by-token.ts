import { IDecrypter, ILoadAccountByTokenRepository } from '@/data/protocols'
import { ILoadAccountByToken } from '@/domain/usecases'


export class DbLoadAccountByToken implements ILoadAccountByToken {
  constructor (
    private readonly decrypter: IDecrypter,
    private readonly loadAccountByTokenRepository: ILoadAccountByTokenRepository
  ) {}

  async load (accessToken: string, role?: string): Promise<ILoadAccountByToken.Result> {
    let token: string
    try {
      token = await this.decrypter.decrypt(accessToken)
    } catch (error) {
      return null
    }
    if (token) {
      const accountId = await this.loadAccountByTokenRepository.loadByToken(accessToken, role)
      if (accountId) {
        return accountId
      }
    }
    return null
  }
}

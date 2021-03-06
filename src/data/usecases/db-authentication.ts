import { IEncrypter, IHashComparer, ILoadAccountByEmailRepository, IUpdateAccessTokenRepository } from '@/data/protocols'
import { IAuthentication } from '@/domain/usecases'

export class DbAuthentication implements IAuthentication {
  constructor (
    private readonly loadAccountByEmailRepository: ILoadAccountByEmailRepository,
    private readonly hashComparer: IHashComparer,
    private readonly encrypter: IEncrypter,
    private readonly updateAcessTokenRepository: IUpdateAccessTokenRepository
  ) {}

  async auth (authentication: IAuthentication.Params): Promise<IAuthentication.Result> {
    const account = await this.loadAccountByEmailRepository.loadByEmail(authentication.email)
    if (account) {
      const isValid = await this.hashComparer.compare(authentication.password, account.password)
      if (isValid) {
        const accessToken = await this.encrypter.encrypt(account.id)
        await this.updateAcessTokenRepository.updateAccessToken(account.id, accessToken)
        return {
          accessToken,
          name: account.name
        }
      }
    }
    return null
  }
}

import { Encrypter, HashComparer, LoadAccountByEmailRepository, UpdateAccessTokenRepository } from '@/data/protocols'
import { AuthenticationtModel  } from '@/domain/models'
import { Authentication, AuthenticationParams } from '@/domain/usecases'

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
    private readonly hashComparer: HashComparer,
    private readonly encrypter: Encrypter,
    private readonly updateAcessTokenRepository: UpdateAccessTokenRepository
  ) {}

  async auth (authentication: AuthenticationParams): Promise<AuthenticationtModel> {
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

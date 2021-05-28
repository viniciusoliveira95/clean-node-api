import { mockSurveyModel, mockSurveyModels } from '@/tests/domain/mocks'
import { IAddSurveyRepository, ICheckSurveyByIdRepository, ILoadSurveyByIdRepository, ILoadSurveysRepository } from '@/data/protocols'
import { SurveyModel } from '@/domain/models/'

export const mockAddSurveyRepository = (): IAddSurveyRepository => {
  class AddSurveyRepositoryStub implements IAddSurveyRepository {
    async add (surveyData: IAddSurveyRepository.Params): Promise<void> {
      return await Promise.resolve()
    }
  }
  return new AddSurveyRepositoryStub()
}

export const mockLoadSurveyByIdRepository = (): ILoadSurveyByIdRepository => {
  class LoadSurveyByIdRepository implements ILoadSurveyByIdRepository {
    async loadById (id: string): Promise<ILoadSurveyByIdRepository.Result> {
      return await Promise.resolve(mockSurveyModel())
    }
  }
  return new LoadSurveyByIdRepository()
}

export const mockCheckSurveyByIdRepository = (): ICheckSurveyByIdRepository => {
  class LoadSurveyByIdRepository implements ICheckSurveyByIdRepository {
    async checkById (id: string): Promise<ICheckSurveyByIdRepository.Result> {
      return await Promise.resolve(true)
    }
  }
  return new LoadSurveyByIdRepository()
}

export const mockLoadSurveysRepository = (): ILoadSurveysRepository => {
  class LoadSurveysRepositoryStub implements ILoadSurveysRepository {
    async loadAll (accountId: string): Promise<SurveyModel[]> {
      return await Promise.resolve(mockSurveyModels())
    }
  }
  return new LoadSurveysRepositoryStub()
}

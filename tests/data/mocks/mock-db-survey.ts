import { mockSurveyModel, mockSurveyModels } from '@/tests/domain/mocks'
import { AddSurveyRepository, LoadSurveyByIdRepository, LoadSurveysRepository } from '@/data/protocols'
import { SurveyModel } from '@/domain/models/'
import { AddSurveyParams } from '@/domain/usecases'

export const mockAddSurveyRepository = (): AddSurveyRepository => {
  class AddSurveyRepositoryStub implements AddSurveyRepository {
    async add (surveyData: AddSurveyParams): Promise<void> {
      return await Promise.resolve()
    }
  }
  return new AddSurveyRepositoryStub()
}

export const mockLoadSurveyByIdRepository = (): LoadSurveyByIdRepository => {
  class LoadSurveyByIdRepository implements LoadSurveyByIdRepository {
    async loadById (id: string): Promise<SurveyModel> {
      return await Promise.resolve(mockSurveyModel())
    }
  }
  return new LoadSurveyByIdRepository()
}

export const mockLoadSurveysRepository = (): LoadSurveysRepository => {
  class LoadSurveysRepositoryStub implements LoadSurveysRepository {
    async loadAll (accountId: string): Promise<SurveyModel[]> {
      return await Promise.resolve(mockSurveyModels())
    }
  }
  return new LoadSurveysRepositoryStub()
}

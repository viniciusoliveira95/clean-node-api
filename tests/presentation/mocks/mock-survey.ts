import { mockSurveyModel, mockSurveyModels } from '@/tests/domain/mocks'
import { SurveyModel } from '@/domain/models'
import { IAddSurvey, ILoadSurveyById, ILoadSurveys } from '@/domain/usecases'

export const mockAddSurvey = (): IAddSurvey => {
  class AddSurveyStub implements IAddSurvey {
    async add (data: IAddSurvey.Params): Promise<void> {
      return await Promise.resolve()
    }
  }

  return new AddSurveyStub()
}

export const mockLoadSurveys = (): ILoadSurveys => {
  class LoadSurveysStub implements ILoadSurveys {
    async load (): Promise<SurveyModel[]> {
      return await Promise.resolve(mockSurveyModels())
    }
  }
  return new LoadSurveysStub()
}

export const mockLoadSurveyById = (): ILoadSurveyById => {
  class LoadSurveyByIdStub implements ILoadSurveyById {
    async loadById (id: string): Promise<SurveyModel> {
      return await Promise.resolve(mockSurveyModel())
    }
  }
  return new LoadSurveyByIdStub()
}

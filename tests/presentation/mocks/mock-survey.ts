import { mockSurveyModels } from '@/tests/domain/mocks'
import { SurveyModel } from '@/domain/models'
import { IAddSurvey, ICheckSurveyById, ILoadAnswersBySurvey, ILoadSurveys } from '@/domain/usecases'

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

export const mockLoadAnswersBySurvey = (): ILoadAnswersBySurvey => {
  class LoadAnswersBySurveyStub implements ILoadAnswersBySurvey {
    async loadAnswers (id: string): Promise<ILoadAnswersBySurvey.Result> {
      return await Promise.resolve(['any_answer'])
    }
  }
  return new LoadAnswersBySurveyStub()
}

export const mockChekSurveyById = (): ICheckSurveyById => {
  class LoadSurveyByIdStub implements ICheckSurveyById {
    async checkById (id: string): Promise<ICheckSurveyById.Result> {
      return await Promise.resolve(true)
    }
  }
  return new LoadSurveyByIdStub()
}

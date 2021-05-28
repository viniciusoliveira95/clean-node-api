import { mockSurveyResultModel } from '@/tests/domain/mocks'
import { ILoadSurveyResult, ISaveSurveyResult } from '@/domain/usecases'

export const mockSaveSurveyResult = (): ISaveSurveyResult => {
  class SaveSurveyResultStub implements ISaveSurveyResult {
    async save (data: ISaveSurveyResult.Params): Promise<ISaveSurveyResult.Result> {
      return await Promise.resolve(mockSurveyResultModel())
    }
  }
  return new SaveSurveyResultStub()
}

export const mockLoadSurveyResult = (): ILoadSurveyResult => {
  class LoadSurveyResultStub implements ILoadSurveyResult {
    async load (surveyId: string, accounntId: string): Promise<ILoadSurveyResult.Result> {
      return await Promise.resolve(mockSurveyResultModel())
    }
  }
  return new LoadSurveyResultStub()
}

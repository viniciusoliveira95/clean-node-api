import { mockSurveyResultModel } from '@/tests/domain/mocks'
import { SurveyResultModel } from '@/domain/models'
import { ILoadSurveyResult, ISaveSurveyResult, SaveSurveyResultParams } from '@/domain/usecases'

export const mockSaveSurveyResult = (): ISaveSurveyResult => {
  class SaveSurveyResultStub implements ISaveSurveyResult {
    async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
      return await Promise.resolve(mockSurveyResultModel())
    }
  }
  return new SaveSurveyResultStub()
}

export const mockLoadSurveyResult = (): ILoadSurveyResult => {
  class LoadSurveyResultStub implements ILoadSurveyResult {
    async load (surveyId: string, accounntId: string): Promise<SurveyResultModel> {
      return await Promise.resolve(mockSurveyResultModel())
    }
  }
  return new LoadSurveyResultStub()
}

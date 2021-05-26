import { SurveyResultModel } from '@/domain/models/survey-result'
import { mockSurveyResultModel } from '@/tests/domain/mocks'
import { LoadSurveyResult } from '@/domain/usecases/load-survey-result'
import { SaveSurveyResult, SaveSurveyResultParams } from '@/domain/usecases/save-survey-result'

export const mockSaveSurveyResult = (): SaveSurveyResult => {
  class SaveSurveyResultStub implements SaveSurveyResult {
    async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
      return await Promise.resolve(mockSurveyResultModel())
    }
  }
  return new SaveSurveyResultStub()
}

export const mockLoadSurveyResult = (): LoadSurveyResult => {
  class LoadSurveyResultStub implements LoadSurveyResult {
    async load (surveyId: string, accounntId: string): Promise<SurveyResultModel> {
      return await Promise.resolve(mockSurveyResultModel())
    }
  }
  return new LoadSurveyResultStub()
}

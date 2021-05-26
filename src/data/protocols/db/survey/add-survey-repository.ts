import { AddSurveyParams } from '@/domain/usecases'

export interface IAddSurveyRepository {
  add (surveyData: AddSurveyParams): Promise<void>
}

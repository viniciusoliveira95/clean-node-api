import { SurveyResultModel } from '@/domain/models'
import { ISaveSurveyResult } from '@/domain/usecases'

export const mockSaveSurveyResultParams = (): ISaveSurveyResult.Params => ({
  accountId: 'any_account_id',
  surveyId: 'any_survey_id',
  answer: 'any_answer',
  date: new Date()
})

export const mockSurveyResultModel = (): SurveyResultModel => ({
  surveyId: 'any_survey_id',
  question: 'any_question',
  answers: [{
    answer: 'any_answer',
    count: 1,
    percent: 50,
    isCurrentAccountAnswer: true
  },
  {
    answer: 'other_answer',
    image: 'any_image',
    count: 10,
    percent: 80,
    isCurrentAccountAnswer: false
  }],
  date: new Date()
})

export const mockSurveyResultEmptyModel = (): SurveyResultModel => ({
  surveyId: 'any_id',
  question: 'any_question',
  answers: [{
    image: 'any_image',
    answer: 'any_answer',
    count: 0,
    percent: 0,
    isCurrentAccountAnswer: false
  }],
  date: new Date()
})

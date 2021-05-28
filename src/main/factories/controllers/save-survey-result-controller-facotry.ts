import { makeDbLoadAnswersBySurvey, makeDbSaveSurveyResult, makeLogControllerDecorator } from '@/main/factories'
import { IController } from '@/presentation/protocols'
import { SaveSurveyResultController } from '@/presentation/controllers'

export const makeSaveSurveyResultController = (): IController => {
  const controller = new SaveSurveyResultController(makeDbLoadAnswersBySurvey(), makeDbSaveSurveyResult())
  return makeLogControllerDecorator(controller)
}

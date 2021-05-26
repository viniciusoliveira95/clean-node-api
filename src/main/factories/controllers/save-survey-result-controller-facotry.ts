import { makeDbLoadSurveyById, makeDbSaveSurveyResult, makeLogControllerDecorator } from '@/main/factories'
import { IController } from '@/presentation/protocols'
import { SaveSurveyResultController } from '@/presentation/controllers'

export const makeSaveSurveyResultController = (): IController => {
  const controller = new SaveSurveyResultController(makeDbLoadSurveyById(), makeDbSaveSurveyResult())
  return makeLogControllerDecorator(controller)
}

import { makeDbLoadSurveyById, makeDbLoadSurveyResult, makeLogControllerDecorator } from '@/main/factories'
import { LoadSurveyResultController } from '@/presentation/controllers'
import { IController } from '@/presentation/protocols'

export const makeLoadSurveyResultController = (): IController => {
  const controller = new LoadSurveyResultController(makeDbLoadSurveyById(), makeDbLoadSurveyResult())
  return makeLogControllerDecorator(controller)
}

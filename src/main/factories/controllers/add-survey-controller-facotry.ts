import { makeAddSurveyValidation } from './add-survey-validation-factory'
import { makeLogControllerDecorator, makeDbAddSurvey } from '@/main/factories'
import { IController } from '@/presentation/protocols'
import { AddSurveyController } from '@/presentation/controllers'

export const makeAddSurveyController = (): IController => {
  const controller = new AddSurveyController(makeAddSurveyValidation(), makeDbAddSurvey())
  return makeLogControllerDecorator(controller)
}

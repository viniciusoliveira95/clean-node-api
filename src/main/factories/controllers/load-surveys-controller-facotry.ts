import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeDbLoadSurveys } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { LoadSurveysController } from '@/presentation/controllers'

export const makeLoadSurveysController = (): Controller => {
  const controller = new LoadSurveysController(makeDbLoadSurveys())
  return makeLogControllerDecorator(controller)
}

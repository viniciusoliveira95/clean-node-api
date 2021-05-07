export interface AddSurveyModel {
  question: string
  answers: SurveyAnswer[]
}

export interface SurveyAnswer {
  iamge: string
  answer: string
}

export interface AddSurvey {
  add (data: AddSurveyModel): Promise<void>
}

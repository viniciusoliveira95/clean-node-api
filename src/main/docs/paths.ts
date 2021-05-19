import {
  loginPath,
  signUpPath,
  surveyPath,
  surveyResultPath
} from './paths/'

export default
{
  '/signup': signUpPath,
  '/login': loginPath,
  '/surveys': surveyPath,
  '/surveys/{surveyId}/results': surveyResultPath
}

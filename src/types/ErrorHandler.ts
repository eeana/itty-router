import { StatusError } from '../StatusError'
import { IRequest } from './IRequest'

export type ErrorHandler<
  ErrorType extends Error = StatusError,
  RequestType = IRequest,
  Args extends any[] = any[]
> = (error: ErrorType, request: RequestType, ...args: Args) => any

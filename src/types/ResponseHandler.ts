import { IRequest } from './IRequest'

export type ResponseHandler<
  ResponseType = any,
  RequestType = IRequest,
  Args extends any[] = any[]
> = (
  response: ResponseType,
  request: RequestType,
  ...args: Args
) => any

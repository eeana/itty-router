import { RequestHandler } from './RequestHandler'
import { ResponseHandler } from './ResponseHandler'
import { RouterOptions } from './RouterOptions'

export type AutoRouterOptions<
  RequestType,
  Args extends any[],
> = {
  missing?: RequestHandler<RequestType, Args>
  format?: ResponseHandler
} & RouterOptions<RequestType, Args>

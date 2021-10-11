import { graphql } from 'graphql'
import { ResponseBody, bodyParser } from '@caldwell619/common-aws-actions'

import { schema, resolvers } from './schema'
import { Event, EventBody } from './interfaces'
import { respond } from './util' // verifyToken

export const handler = async (event: Event): Promise<ResponseBody> => {
  try {
    const { query, variables, operationName } = bodyParser<EventBody>(event.body)
    const result = await graphql(schema, query, resolvers, {}, variables, operationName)

    if (result.errors) console.error('Errors in resolver', result.errors)

    return respond(result, 200)
  } catch (error) {
    const typedError = error as TypedError
    console.error('Global error caught: ', typedError)
    console.error('error code: ', typedError.code)
    return respond(typedError, typedError.statusCode || 500)
  }
}

interface TypedError {
  code: string
  statusCode: number
}

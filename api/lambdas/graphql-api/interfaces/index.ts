import { PoolClient } from 'pg'
import { Account } from '@generated/index'

export interface EventBody {
  query: string
  variables: Record<string, unknown>
  operationName: string
}

export interface Event {
  body: string
  headers: {
    [key: string]: string
  }
}

/** A standard mutation response.
 *
 * This is returned when the consumer doesn't need anything from the mutation, only a confirmation. */
export interface MutationResult {
  status: number
  message?: string
}

interface GraphQLContext {
  Client: PoolClient
  user: Account
}

export type Resolver<ReturnType, Variables = Record<string, string>> = (
  variables: Variables,
  context: GraphQLContext
) => Promise<ReturnType>

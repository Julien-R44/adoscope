import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Entry from 'App/Models/Entry'
import { EntryType } from 'App/types'
import { hrtime } from 'process'
import { v4 as uuid } from 'uuid'
import { hostname } from 'os'

/**
 * Used to store requests in Adoscope while waiting for events to be implemented in the Adonis core
 */
export default class AdoscopeMiddleware {
  public async handle(ctx: HttpContextContract, next: () => Promise<void>) {
    const start = hrtime.bigint()

    try {
      await next()
      this.afterRequest(ctx, start)
    } catch (err) {
      this.afterRequest(ctx, start)
      throw err
    }
  }

  private afterRequest(ctx: HttpContextContract, start: bigint) {
    const end = hrtime.bigint()
    const diff = end - start
    const diffInMs = Number(diff / BigInt(1e6))

    /**
     * SetTimeout seems mandatory otherwise statusCode is wrong when an error is thrown
     * in a controller ( see /throw route )
     */
    setTimeout(() => {
      Entry.create({
        type: EntryType.REQUEST,
        batchId: uuid(),
        hostname: hostname(),
        content: {
          ip_address: ctx.request.ip(),
          uri: ctx.request.url(),
          method: ctx.request.method(),
          controller_action: ctx.route?.handler,
          middleware: ctx.route?.middleware, // Always empty, don't know why for the moment
          headers: ctx.request.headers(),
          payload: ctx.request.all(),

          // Here, in case the response is a simple json, its fine.
          // However, if it's a view, we should be able to get the used view instead of
          // storing the full HTML response in database.
          response: ctx.response.getBody(),

          response_status: ctx.response.response.statusCode,
          duration: diffInMs,
        },
      })
    }, 100)
  }
}

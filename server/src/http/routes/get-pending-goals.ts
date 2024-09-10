import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getWeekPengingGoals } from '../../functions/get-week-pending-goals'

export const getPendingGoalsRoute: FastifyPluginAsyncZod = async app => {
  app.get('/pending-goals', async () => {
    const { pendingGoals } = await getWeekPengingGoals()

    return { pendingGoals }
  })
}

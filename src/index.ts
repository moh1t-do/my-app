import { Hono } from 'hono'

const app = new Hono()

addEventListener('scheduled', event => {
  event.waitUntil(handleSchedule(event))
})

async function handleSchedule(event: ScheduledEvent) {
  console.log('Crons job triggered');
}

export default app

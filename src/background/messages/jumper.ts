import type { PlasmoMessaging } from '@plasmohq/messaging'

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  res.send({
    message: 'Hello from background script!',
  })
}

export default handler

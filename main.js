import ui from 'touchui/dist/ui/index.js'
import App from './app.ui'

let options={
  app:App
}
ui.start(options)

ui.networkTimeout = 5
ui.networkBaseUrl = 'http://www.uileader.com'

ui.preloadDialogs([
  require('#/pages/dialogs/loginInterface.ui')
])
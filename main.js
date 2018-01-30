import ui from 'touchui/dist/ui/index.js'
import App from './app.ui'

let options={
  app:App,
  i18n:{
    locale:'en',
    messages:{
      'zh-cn':require('./i18n/zh-cn.json'),
      'en':require('./i18n/en.json')
    }
  }
}
ui.start(options)

ui.networkTimeout = 5
ui.networkBaseUrl = 'http://www.uileader.com'

// ui.preloadDialogs([
//   require('#/pages/dialogs/loginInterface.ui')
// ])
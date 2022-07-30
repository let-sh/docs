import DefaultTheme from 'vitepress/theme'
import AsciiPlayer from '../../../components/global/AsciiPlayer.vue'
import './vars.css'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('AsciiPlayer', AsciiPlayer)
  }
}
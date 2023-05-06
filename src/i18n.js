import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import translate from '../src/assets/locales/zh-tw/translate.json'

const resources = {
  'zh-TW': {
    translation: translate,
  },
}

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en', // 如果當前切換的語言沒有對應的翻譯則使用這個語言
    lng: 'zh-TW', // 預設語言
    interpolation: {
      // 是否要讓字詞 escaped 來防止 xss 攻擊，這裡因為 React.js 已經做了，就設成 false即可
      escapeValue: false,
    },
    resources: resources,
  })

export default i18n

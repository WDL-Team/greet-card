import { TLanguage } from '~/types/settings'

export const localization: { [key in TLanguage]: Record<string, string> } = {
  en: {
    display_name: 'Greet card',
    constructor_header: 'Preparing congratulations',
    recipient_placeholder: 'Recipient name',
    card_placeholder: 'Card view',
    textarea_placeholder: 'Congratulation text',
    copy_placeholder: 'Link to your custom congratulation',
    preview: 'Preview',
    template: 'Template',
  },
  ru: {
    display_name: 'Сервис поздравлений',
    constructor_header: 'Подготовка поздравления',
    recipient_placeholder: 'Получатель поздравления',
    card_placeholder: 'Стиль открытки',
    textarea_placeholder: 'Текст поздравления',
    copy_placeholder: 'Индивидуальная ссылка',
    preview: 'Предпросмотр',
    template: 'Заготовка',
  },
}

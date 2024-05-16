import { notification } from 'ant-design-vue'

type NotificationType = 'success' | 'warning' | 'info' | 'error'

const titles: { [key in NotificationType]: string } = {
  success: 'Успешно!',
  warning: 'Внимание!',
  info: 'Информация!',
  error: 'Ошибка!',
}

export const createNotification = (type: NotificationType, content: string) => {
  notification[type]({
    message: titles[type],
    description: content,
  })
}

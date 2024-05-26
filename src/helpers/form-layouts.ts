/*
  Макеты для форм и элементов

  Разделение по:
  - Заголовку:
    Префикс label - для элементов с заголовком
    Без префикса - для элементов без заголовка
  - Отступу между заголовком и элементом:
    short - короткий (2)
    medium -средний (4)
    long - длинный (8)
*/

import { FormLayout } from '../types/form-layout.interface'

type FormLayoutKeys =
  | 'none'
  | 'labelShort'
  | 'labelMedium'
  | 'labelLong'
  | 'short'
  | 'medium'
  | 'long'

export const formLayouts: { [key in FormLayoutKeys]: FormLayout } = {
  none: {
    labelCol: {
      span: 0
    },
    wrapperCol: {
      span: 8
    }
  },
  labelShort: {
    labelCol: {
      span: 2
    },
    wrapperCol: {
      span: 8
    }
  },
  labelMedium: {
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 8
    }
  },
  labelLong: {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 8
    }
  },
  short: {
    wrapperCol: {
      span: 24,
      offset: 4
    }
  },
  medium: {
    wrapperCol: {
      span: 24,
      offset: 8
    }
  },
  long: {
    wrapperCol: {
      span: 24,
      offset: 12
    }
  }
}

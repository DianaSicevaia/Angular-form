export const PLACEHOLDERS = {
  login: 'Логин',
  password: 'Пароль',
  email: 'Емейл',
  age: 'Возраст',
  role: 'Роль',
  site: 'Сайт'
};

export const FORM_SUCCESS = {
  login: 'Принято:',
  password: 'Принято:',
  email: 'Принято:',
  age: 'Принято:',
  role: 'Принято:',
  site: 'Принято:',
};

export const FORM_ERRORS = {
  login: '',
  password: '',
  email: '',
  role: '',
  age: '',
  site: '',
};

export const VALIDATION_MESSAGES = {
  login: {
    required: 'Имя обязательно.',
    minlength: 'Имя должно быть длиной минимум 4 символа.',
    maxlength: 'Имя должно быть длиной не более 15 символов.'
  },
  password: {
    required: 'Пароль обязателен.',
    minlength: 'Пароль должен быть длиной минимум 4 символа.',
    maxlength: 'Пароль должен быть длиной не более 25 символов.'
  },
  email: {
    required: 'Емейл обязателен.',
    emailValidator: 'Неправильный формат емейл адреса.'
  },
  role: {
    required: 'Роль обязательна.'
  },
  age: {
    required: 'Возраст обязателен.',
    rangeValidator: 'Значение должно быть числом в диапозоне 1...122.'
  },
  site: {
    required: 'Сайт обязателен.',
    urlNotAllowed: 'Направильный формат адреса сайта.',
    pending: 'Выполняется проверка.'
  }
};

export const ROLES = ['Гость', 'Модератор', 'Администратор'];


// Файл email-validator.js
const EMAIL_REGEXP = /^[a-zа-я0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zа-я0-9-]+(?:\.[a-zа-я0-9-]+)+$/i;

const isValidEmail = (candidate) => EMAIL_REGEXP.test(candidate);

import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import isUndefined from 'lodash/isUndefined';
import isNull from 'lodash/isNull';

export const isNullUndefinedOrEmpty = value =>
  isUndefined(value) || isNull(value) || value === '';

export const formatInput = value =>
  isNullUndefinedOrEmpty(value) ? value : value.toUpperCase();

export const capitalizeAllFirstLetter = str => {
  if (!isEmpty(str)) {
    return str.replace(
      /\w\S*/g,
      txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
    );
  }
  return '';
};

export const capitalizeFirstLetter = string => {
  if (!isEmpty(string)) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return '';
};

export const sentenceCap = string => {
  if (!isEmpty(string)) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
  return '';
};

export const capitalizeWords = string => {
  if (!isNullUndefinedOrEmpty(string)) {
    return string.toUpperCase();
  }
  return '';
};

export const toStringFormat = string => {
  if (!isNullUndefinedOrEmpty(string)) {
    return string.toString();
  }
  return '';
};

export const toLowercase = string => {
  if (!isEmpty(string)) {
    return string.toLowerCase();
  }
  return '';
};

export const getFirstLetter = string => {
  if (!isEmpty(string)) {
    return string.charAt(0).toUpperCase();
  }
  return '';
};

export const getObjectKeyByValue = (array, value, key = 'label') => {
  if (!isEmpty(value) && !isNullUndefinedOrEmpty(array)) {
    return get(array.find(i => i.value === value), key);
  }
  return '';
};

export const getDashByNullValue = value => {
  if (isNullUndefinedOrEmpty(value)) {
    return '-';
  }
  return value;
};

export const isNullUndefined = value => isUndefined(value) || isNull(value);

export const getLast4Char = string => string.slice(-4);

export const getLast4UnmaskString = string => string.replace(/.(?=.{4})/g, '*');

export const removeNumberFromString = string => string.replace(/[0-9]/g, '');

export const getTextColor = value => {
  if (value === 0 || !value) {
    return;
  } else if (value > 0) {
    return '#28A745';
  }
  return '#ED1B2E';
};

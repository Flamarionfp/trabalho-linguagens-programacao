import {
  UPERCASE_MISSING_TEXT_ERROR,
  KEBAB_CASE_MISSING_TEXT_ERROR,
  SNAKE_CASE_MISSING_TEXT_ERROR,
} from '@/constants/error';

export const renameToUperCase = (text: string): string => {
  if (!text) throw new Error(UPERCASE_MISSING_TEXT_ERROR);

  return text.toUpperCase();
};

export const renameToSnakeCase = (text: string): string => {
  if (!text) throw new Error(SNAKE_CASE_MISSING_TEXT_ERROR);

  const splitedText = text.split(' ');

  return splitedText.join('_').toLowerCase();
};

export const renameToKebabCase = (text: string): string => {
  if (!text) throw new Error(KEBAB_CASE_MISSING_TEXT_ERROR);

  const splitedText = text.split(' ');

  return splitedText.join('-').toLowerCase();
};

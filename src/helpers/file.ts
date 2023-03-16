import { NewFilePattern } from '@/types/file';
import {
  renameToCamelCase,
  renameToKebabCase,
  renameToSnakeCase,
} from '@/helpers/string';
export const getRenamedFileForPattern = (
  fileName: string,
  pattern: NewFilePattern,
) => {
  switch (pattern) {
    case 'camelCase':
      return renameToCamelCase(fileName);
    case 'snake_case':
      return renameToKebabCase(fileName);
    case 'kebab-case':
      return renameToSnakeCase(fileName);
    default:
      return fileName;
  }
};

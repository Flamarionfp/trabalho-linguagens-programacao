import { NewFilePattern } from '@/types/file';
import {
  renameToUperCase,
  renameToKebabCase,
  renameToSnakeCase,
} from '@/helpers/string';
export const getRenamedFileForPattern = (
  fileName: string,
  pattern: NewFilePattern,
) => {
  switch (pattern) {
    case 'uppercase':
      return renameToUperCase(fileName);
    case 'snake_case':
      return renameToKebabCase(fileName);
    case 'kebab-case':
      return renameToSnakeCase(fileName);
    default:
      return fileName;
  }
};

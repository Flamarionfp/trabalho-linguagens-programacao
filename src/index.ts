import { readdirSync, rename } from 'fs';
import { resolve } from 'path';
import { prompt } from 'enquirer';
import { PromptAnswer } from './types/prompt';
import { getRenamedFileForPattern } from './helpers/file';

(async () => {
  const response: PromptAnswer = await prompt([
    {
      type: 'select',
      name: 'extension',
      message: 'Os arquivos de qual extensão você deseja renomear?',
      choices: ['mp3', 'png', 'jpg'],
    },
    {
      type: 'select',
      name: 'pattern',
      message: 'Para qual padrão você deseja renomear?',
      choices: ['uppercase', 'snake_case', 'kebab-case'],
    },
  ]);

  const filesFolderName = 'files';
  const filesPathDir = resolve(__dirname, filesFolderName);
  const files = readdirSync(filesPathDir);

  const filteredFiles = files.filter((file) =>
    file.endsWith(response.extension),
  );

  if (filteredFiles.length > 0) {
    for (let i = 0; i < filteredFiles.length; i++) {
      const file = filteredFiles[i];

      rename(
        filesPathDir + `/${file}`,
        filesPathDir + `/${getRenamedFileForPattern(file, response.pattern)}`,
        (err) => console.log(err),
      );
    }
  } else {
    console.log('Nenhum arquivo encontrado para renomear.');
  }
})();

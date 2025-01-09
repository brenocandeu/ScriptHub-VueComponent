#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const cliProgress = require('cli-progress');

// Receber o nome do componente como argumento
const componentName = process.argv[2];

if (!componentName) {
  console.error('Por favor, forneça o nome do componente.');
  process.exit(1);
}

// Caminho para a nova pasta (diretório atual)
const componentDir = path.join(process.cwd(), componentName);

// Criar a barra de progresso
const progressBar = new cliProgress.SingleBar({
  format: 'Criando Componente | {bar} | {percentage}%', // | {step}
  barCompleteChar: '\u2588',
  barIncompleteChar: '\u2591',
  hideCursor: true,
}, cliProgress.Presets.shades_classic);

progressBar.start(100, 0, { step: 'Iniciando...' });

// Simular progresso (mesmo que seja rápido)
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function createComponent() {
  // Passo 1: Verificar se a pasta já existe
  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir);
    progressBar.update(25/*, { step: 'Pasta criada' }*/);
  } else {
    console.error(`\nA pasta "${componentName}" já existe no diretório atual.`);
    process.exit(1);
  }

  // Passo 2: Criar o arquivo .vue
  await delay(200); // Simular tempo para criar o arquivo
  const vueContent = `<template>
  <div> </div>
</template>

<script src="./${componentName}.js"></script>

<style scoped src="./${componentName}.css"></style>
`;
  fs.writeFileSync(path.join(componentDir, `${componentName}.vue`), vueContent);
  progressBar.update(50/*, { step: 'Arquivo .vue criado' }*/);

  // Passo 3: Criar o arquivo .js
  await delay(200);
  const jsContent = `export default {
  name: '${componentName}'
};
`;
  fs.writeFileSync(path.join(componentDir, `${componentName}.js`), jsContent);
  progressBar.update(75/*, { step: 'Arquivo .js criado' }*/);

  // Passo 4: Criar o arquivo .css
  await delay(200);
  fs.writeFileSync(path.join(componentDir, `${componentName}.css`), '');
  progressBar.update(100 /*, { step: 'Arquivo .css criado' }*/);

  // Finalizar a barra
  progressBar.stop();

  console.log(`✨ Componente "${componentName}" criado com sucesso na pasta "${componentDir}"! 🚀`);
}

createComponent();

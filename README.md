# cronômetro usando javascript, css e html

# descrição do projeto
Este é um projeto de um cronômetro simples desenvolvido em JavaScript, HTML e CSS. Ele fornece uma interface de usuário intuitiva para medir o tempo com precisão e pode ser
utilizado em várias situações, incluindo a medição do tempo de treinamento e também o gerenciamento do tempo de estudo.
# pré-requisitos
Antes de utilizar este projeto, certifique-se de ter o seguinte instalado/configurado:
- Navegador Web: Você precisará de um navegador da web, como o Google Chrome, Mozilla Firefox, ou Microsoft Edge, para executar o cronômetro.
- Git(opcional): Apenas para o caso de querer clonar o repositório e contribuir para o desenvolvimento, é recomendável ter o Git instalado no seu
 sistema.
- Ambiente de Desenvolvimento Local(opcional): Se você planeja fazer alterações no código-fonte ou personalizar o projeto, é útil ter um ambiente de
  desenvolvimento local configurado com um editor de código, como o Visual Studio Code.
- Conhecimento Básico de HTML, CSS e JavaScript: Para personalizar o cronômetro ou integrá-lo em seu projeto, é importante ter um conhecimento
básico de HTML, CSS e JavaScript.
# instalação
1. Clone o Repositório: Use o Git para clonar este repositório em seu computador. Abra o terminal ou prompt de comando e execute o seguinte comando: git clone https://github.com/seu-usuario/seu-projeto.git
2. Acesse a Pasta do Projeto: Navegue até a pasta recém-clonada usando o seguinte comando: cd seu-projeto
3. Abra o Arquivo HTML: Abra o arquivo index.html em seu navegador da web. Você pode fazer isso simplesmente dando um duplo clique no arquivo ou usando um navegador de arquivos para abri-lo.
4. Comece a usar: O cronômetro será exibido em seu navegador, pronto para uso. Use os botôes "Iniciar", "Pausar", "Continuar" e "Resetar" para controlar o cronômetro conforme necessário.
# uso

1. Inclua os Arquivos Necessários: Certifique-se de incluir os seguintes arquivos em seu projeto:

<link rel="stylesheet" href="./style.css">
<script src="./script.js"></script>

2. Crie um elemento HTML: Adicione um elemento HTML em seu código onde você deseja exibir o cronômetro:

<div id="cronometro"></div>

3. Inclua os Seletores HTML: Certifique-se de ter os seletores corretos para os elementos HTML onde você deseja exibir o cronômetro. No exemplo fornecido, os seletores são definidos da seguinte forma:

const contentMinutes = document.querySelector('.minutes');
const contentSeconds = document.querySelector('.seconds')
const contentMilliseconds = document.querySelector('.milliseconds')

4. Defina os Botões e Variáveis Necessários: No exemplo, há botões para iniciar, pausar, continuar e resetar o cronômetro, bem como variáveis para rastrear o estado do cronômetro:

const btnStart = document.querySelector('.btnstart');
const btnPause = document.querySelector('.btnpause');
const btnResume = document.querySelector('.btnresume');
const btnReset = document.querySelector('.btnreset');

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

5. Adicione Event Listeners aos Botões: Os eventos de clique são adicionados aos botões para controlar o cronômetro:

btnStart.addEventListener('click', startInterval);
btnPause.addEventListener('click', pauseInterval);
btnResume.addEventListener('click', resumeInterval);
btnReset.addEventListener('click', resetInterval);

6. Personalize o Estilo e Layout: A personalização do estilo e do layout do cronômetro pode ser feita por meio do arquivo style.css. Certifique-se de ajustar o estilo de acordo com o design do seu projeto.

7. Interaja com o Cronômetro: Agora, você pode interagir com o cronômetro utilizando os seguintes botões:
- Iniciar: Inicia o cronômetro.
- Pausar: Pausa o cronômetro.
- Continuar: Continua o cronômetro após a pausa.
- Resetar: Zera o cronômetro.

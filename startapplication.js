/*utilizando pacote Node.js para executar um processo em segundo plano que inicie a aplicação. 
  Para fazer isso, você precisará ter o Node.js instalado em seu sistema e um pacote npm como o "child_process" para lidar
   com a execução do processo.

exemplo de como você pode usar o pacote "child_process" para iniciar um processo Node.js
 que executa o comando "npm start": */

 const { spawn } = require('child_process');

function startApplication() {
  const process = spawn('npm', ['start']);
  process.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  process.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  process.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}

document.getElementById('open-register').addEventListener('click', () => {
  startApplication();
});

/*Neste exemplo, a função "startApplication()" é chamada quando o botão com o ID "open-register"
é clicado. Essa função usa o método "spawn()" do pacote "child_process" para iniciar o processo 
Node.js que executa o comando "npm start". Em seguida, três manipuladores de eventos são adicionados
para lidar com a saída do processo: um para a saída padrão (stdout), outro para a saída de erro (stderr)
e outro para o fechamento do processo.
Note que, para este exemplo funcionar corretamente, você precisa ter o Node.js e as dependências da sua aplicação
já instalados */
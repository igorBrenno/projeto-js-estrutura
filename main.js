// set up canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = 1000);
const height = (canvas.height = 600);

// function to generate random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let placarRed = 0;
let placarBlue = 0;
// Classe com o contrutor para bolas
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  // Função para desenhar
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  // Função para atualizar as posições
  update() {
    if (this.x + this.size >= width) {
      this.velX = -Math.abs(this.velX);
    }

    if (this.x - this.size <= 0) {
      this.velX = Math.abs(this.velX);
    }

    if (this.y + this.size >= height) {
      this.velY = -Math.abs(this.velY);
    }

    if (this.y - this.size <= 0) {
      this.velY = Math.abs(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }
  
  // Função para detectar colisão com os gols
  collisionDetect(goal1, goal2) {

    if (
      this.x - this.size < goal1.x + 1 &&
      this.y > goal1.y &&
      this.y < goal1.y + goal1.h &&
      this.color !== goal1.color
    ) {
      placarBlue++
      placarb.innerHTML = `<h1>${placarBlue}</h1>`
    }
    
    if (
      this.x + this.size > goal2.x &&
      this.y > goal2.y &&
      this.y < goal2.y + goal2.h &&
      this.color !== goal2.color
    ) {
      placarRed++
      placarv.innerHTML = `<h1>${placarRed}</h1>`
    }
  }
}
// Classe para os times
class Team {
  constructor(x, y, w, h, color, balls_count) {
    this.name = color;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.balls_count = balls_count;
  }

  // Função para desenhar os times
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}

// Variáveis para alterar valores e quantidades das bolas
let tamanhov = 100;
let tamanhob = 100;
let quantBV = 1;
let quantBB = 1;
const balls = [];
let velv;
let velb;

// Função para quando clicar no botão, pegar os valores dos inputs e alterar os campos dos times vermelhos
function buttonvermelhovai() {
  tamanhov = document.querySelector("#tamanhov").value;
  quantBV = document.querySelector("#quantidadeBV").value;
  velv = document.querySelector("#velocidadeBV").value;
  team_red.y = height / 2 - tamanhov / 2;
  team_red.h = tamanhov;
  team_red.balls_count = quantBV;
}

let contadorv = 0
let contadorb = 0
let placarv = document.querySelector("#placartimevermelho");
let placarb = document.querySelector("#placartimeazul");

// Função para quando clicar no botão, pegar os valores dos inputs e alterar os campos dos times azuis
function buttonazulvai() {
  tamanhob = document.querySelector("#tamanhob").value;
  quantBB = document.querySelector("#quantidadeBB").value;
  velb = document.querySelector("#velocidadeBB").value;
  team_blue.y = height / 2 - tamanhob / 2;
  team_blue.h = tamanhob;
  team_blue.balls_count = quantBB;
}

// Instanciando os times no padrão
let team_red = new Team(0, height / 2 - tamanhov / 2, 30, tamanhov, "red", quantBV);
let team_blue = new Team(width - 30, height / 2 - tamanhob / 2, 30, tamanhob, "blue", quantBB);

// Função para iniciar as bolas e adicionar na lista de bolas
function start() {
  balls.length = 0;

  for (let i = 0; i < team_red.balls_count; i++) {
    const size = random(10, 20);
    const ball_red = new Ball(
      random(0 + size, width - size),
      random(0 + size, height - size),
      random(1, velv),
      random(-7, velv),
      "red",
      size
    );
    balls.push(ball_red);
  }

  for (let i = 0; i < team_blue.balls_count; i++) {
    const size = random(10, 20);
    const ball_blue = new Ball(
      random(0 + size, width - size),
      random(0 + size, height - size),
      random(1, velb),
      random(-7, velb),
      "blue",
      size
    );
    balls.push(ball_blue);
  }
}

// Loop para desenhar e atualizar o canvas
function loop() {
  ctx.fillStyle = "rgba(101, 250, 100, 0.25)";
  ctx.fillRect(0, 0, width, height);

  team_red.draw();
  team_blue.draw();

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect(team_red, team_blue);
  }

  requestAnimationFrame(loop);
}

// Inicia o loop de animação
loop();

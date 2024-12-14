# Projeto Javascript


1 - Nos formulários dos times, crie um campo de entrada para aumentar o tamanho das traves. Esta configuraçao deverá ser definida via elemento **input** e deverá ser acionada ao selecionar um botão, fazendo a trave aumentar e diminuir de tamanho. 

```html
 <form id="red">
    <div>Time 1</div>        
</form>
```

Observe que este tamanho irá interferir no alinhamento da trave em relação à altura do canvas.
A trave é desenhada por meio do método draw() da classe Team. Altere o construtor de Team para calcular automaticamente posição y conforme a altura do canvas e altura da trave. Para isso,  altere o método draw() para implementar este comportamento.

```js
class Team {
  constructor(x,y, w, h, color) {
    this.name = color
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color
    
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y, this.w, this.h);
  }
}
```

2 - Nos formulários dos times acrescente um campo de entrada do tipo **input** para definir a quantidade de bolas e a velocidade de bolas de determinado time. Estes valores devem ser utilizados para definir propriedades dos times (instancia **Team**) e usados ao criar uma bola (instancia de **Ball**).

Ao definir estes valores por meio do acionamento do botão, altere a criação de bolas na função **start()**

```js
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }
  ...
}
```

3 - Organize a base de código para utilizar módulos ESM, com multiplos arquivos usando import e export.

4 - Faça a documentação das funções e classes utilizando padrão [jsdoc](https://jsdoc.app/about-getting-started)

5 - Crie um botão reset para reiniciar o jogo com as configurações padrão. 

6 - Mostre na tela quando uma bola fizer o gol. Avise ao usuário quando um time fizer 10 gols.


const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const snakeColorSelector = document.getElementById('snakeColor');
const difficultySelector = document.getElementById('difficultySelector'); // Seletor de dificuldade

const unitSize = 20;
canvas.width = 600;
canvas.height = 500;

let snake = [{ x: 200, y: 200 }];
let food = { x: 100, y: 100 };
let dx = unitSize;
let dy = 0;
let score = 0;
let gameStarted = false;
let snakeColor = 'blue';
let gameOver = false; 

// Define a velocidade do jogo com base na dificuldade
let gameSpeed = 100; // Dificuldade média por padrão (100ms de intervalo)

// Função para desenhar a cobra
function drawSnake() {
    ctx.fillStyle = snakeColor;
    snake.forEach(part => {
        ctx.fillRect(part.x, part.y, unitSize, unitSize);
        ctx.strokeStyle = 'indigo';
        ctx.lineWidth = 2;
        ctx.strokeRect(part.x, part.y, unitSize, unitSize);
    });
}

// Função para desenhar a comida
function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, unitSize, unitSize);
    ctx.strokeStyle = 'darkgreen';
    ctx.lineWidth = 2;
    ctx.strokeRect(food.x, food.y, unitSize, unitSize);
}

// Função de movimentação da cobra
function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        generateFood();
        score += 10;
    } else {
        snake.pop();
    }
}

// Função para verificar colisões
function checkCollision() {
    if (
        snake[0].x < 0 ||
        snake[0].x >= canvas.width ||
        snake[0].y < 0 ||
        snake[0].y >= canvas.height
    ) {
        return true;
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    return false;
}

// Função para gerar a comida em posições aleatórias
function generateFood() {
    food.x = Math.floor(Math.random() * (canvas.width / unitSize)) * unitSize;
    food.y = Math.floor(Math.random() * (canvas.height / unitSize)) * unitSize;
}

// Função para mudar a direção da cobra
document.addEventListener('keydown', (event) => {
    if (event.key === 'w' && dy === 0) {
        dx = 0;
        dy = -unitSize;
    } else if (event.key === 's' && dy === 0) {
        dx = 0;
        dy = unitSize;
    } else if (event.key === 'a' && dx === 0) {
        dx = -unitSize;
        dy = 0;
    } else if (event.key === 'd' && dx === 0) {
        dx = unitSize;
        dy = 0;
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && dy === 0) {
        dx = 0;
        dy = -unitSize;
    } else if (event.key === 'ArrowDown' && dy === 0) {
        dx = 0;
        dy = unitSize;
    } else if (event.key === 'ArrowLeft' && dx === 0) {
        dx = -unitSize;
        dy = 0;
    } else if (event.key === 'ArrowRight' && dx === 0) {
        dx = unitSize;
        dy = 0;
    }});

// Função para iniciar o jogo
function startGame() {
    gameStarted = true;
    startButton.style.display = 'none'; // Esconde o botão de iniciar
    snakeColorSelector.style.display = 'none'; // Esconde o seletor de cor
    difficultySelector.style.display = 'none'; // Esconde o seletor de dificuldade
    gameLoop();
}

// Evento para iniciar o jogo ao pressionar Enter
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !gameStarted) {
        startGame();
    }
});

// Evento do botão de iniciar o jogo
startButton.addEventListener('click', startGame);

// Evento do seletor de dificuldade
difficultySelector.addEventListener('change', (event) => {
    const difficulty = event.target.value;

    if (difficulty === 'easy') {
        gameSpeed = 150; // Jogo mais lento
    } else if (difficulty === 'medium') {
        gameSpeed = 100; // Dificuldade média
    } else if (difficulty === 'hard') {
        gameSpeed = 50; // Jogo mais rápido
    }
});

// Loop principal do jogo
function showGameOver() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; // Fundo semi-transparente
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Preenche a tela

    ctx.fillStyle = 'white';
    ctx.font = '40px Arial';
    ctx.fillText('Game Over', canvas.width / 2 - 100, canvas.height / 2 - 20);
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + score, canvas.width / 2 - 50, canvas.height / 2 + 20);
    ctx.fillText('Press Enter to Restart', canvas.width / 2 - 100, canvas.height / 2 + 50);
}

// Modifique a função de verificação de colisão
function checkCollision() {
    if (
        snake[0].x < 0 ||
        snake[0].x >= canvas.width ||
        snake[0].y < 0 ||
        snake[0].y >= canvas.height
    ) {
        return true;
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    return false;
}

// Loop principal do jogo
function gameLoop() {
    if (checkCollision()) {
        gameOver = true; // Define o estado do jogo como Game Over
        showGameOver(); // Exibe a tela de Game Over
        return; // Interrompe o loop
    }

    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Exibe o score
        ctx.fillStyle = 'white';
        ctx.font = '20px Arial';
        ctx.fillText('Score: ' + score, 10, 30);

        drawFood();
        moveSnake();
        drawSnake();
        gameLoop(); // Continua o loop
    }, gameSpeed);
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            if (gameOver) {
                // Reinicia o jogo
                snake = [{ x: 200, y: 200 }];
                food = { x: 100, y: 100 };
                dx = unitSize;
                dy = 0;
                score = 0;
                gameOver = false; // Reseta o estado do jogo
                startGame(); // Inicia o jogo novamente
            } else if (!gameStarted) {
                startGame();
            }
        }
    });
}

// Evento para reiniciar o jogo ao pressionar Enter
generateFood();

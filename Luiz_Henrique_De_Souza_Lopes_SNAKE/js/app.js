const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const snakeColorSelector = document.getElementById('snakeColor');
const difficultySelector = document.getElementById('difficultySelector');

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
let lives = 3;
let gameSpeed = 100;

const deathSound = new Audio('deathSound.mp3');

function drawSnake() {
    ctx.fillStyle = snakeColor;
    snake.forEach(part => {
        ctx.fillRect(part.x, part.y, unitSize, unitSize);
        ctx.strokeStyle = 'indigo';
        ctx.lineWidth = 2;
        ctx.strokeRect(part.x, part.y, unitSize, unitSize);
    });
}

snakeColorSelector.addEventListener('change', (event) => {
    snakeColor = event.target.value;
});

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, unitSize, unitSize);
    ctx.strokeStyle = 'darkgreen';
    ctx.lineWidth = 2;
    ctx.strokeRect(food.x, food.y, unitSize, unitSize);
}

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

function generateFood() {
    food.x = Math.floor(Math.random() * (canvas.width / unitSize)) * unitSize;
    food.y = Math.floor(Math.random() * (canvas.height / unitSize)) * unitSize;
}

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

function resetSnake() {
    snake = [{ x: 200, y: 200 }];
    dx = unitSize;
    dy = 0;
}

function showGameOver() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'white';
    ctx.font = '40px Arial';
    ctx.fillText('Game Over', canvas.width / 2 - 100, canvas.height / 2 - 20);
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + score, canvas.width / 2 - 50, canvas.height / 2 + 20);
    ctx.fillText('Press Enter to Restart', canvas.width / 2 - 100, canvas.height / 2 + 50);
}

function gameLoop() {
    if (checkCollision()) {
        lives--;
        deathSound.play();

        if (lives > 0) {
            resetSnake();
        } else {
            gameOver = true;
            showGameOver();
            return;
        }
    }

    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'white';
        ctx.font = '20px Arial';
        ctx.fillText('Score: ' + score, 10, 30);
        ctx.fillText('Lives: ' + lives, canvas.width - 100, 30);

        drawFood();
        moveSnake();
        drawSnake();

        if (!gameOver) {
            gameLoop();
        }
    }, gameSpeed);
}

function startGame() {
    gameStarted = true;
    gameOver = false;
    lives = 3;
    score = 0;
    snake = [{ x: 200, y: 200 }];
    dx = unitSize;
    dy = 0;

    startButton.style.display = 'none';
    snakeColorSelector.style.display = 'none';
    difficultySelector.style.display = 'none';

    gameLoop();
}

// Função para reiniciar o jogo ao pressionar Enter
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && gameOver) {
        startGame(); // Reinicia o jogo após o game over
    }
});

// Evento do botão de iniciar o jogo
startButton.addEventListener('click', startGame);

// Evento do seletor de dificuldade
difficultySelector.addEventListener('change', (event) => {
    const difficulty = event.target.value;

    if (difficulty === 'easy') {
        gameSpeed = 150;
    } else if (difficulty === 'medium') {
        gameSpeed = 100;
    } else if (difficulty === 'hard') {
        gameSpeed = 50;
    }
});

generateFood(); // Gera a comida inicial
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const speed = 6;

const paddle = {
    x: 0,
    y: 0,
    width: 20,
    height: 90,
    movement: 0,
}

function gameLoop() {
    requestAnimationFrame(gameLoop);
    context.clearRect(0, 0, canvas.width, canvas.height);

    paddle.y += paddle.movement;

    if(paddle.y <= 0){
        paddle.y = 0;
    }else if(paddle.y >= canvas.height - paddle.height){
        paddle.y = canvas.height - paddle.height;
    }

    context.fillStyle = 'white';
    context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

document.addEventListener('keydown', function (e) {
    console.log('keydown ' + e.key);
    const key = e.key;
    switch (key) {
        case "ArrowUp":
            paddle.movement = -speed;
            break;
        case "ArrowDown":
            paddle.movement = speed;
            break;
    }
});

document.addEventListener('keyup',function (e){
    console.log('keyup ' + e.key);
    const key = e.key;
    switch (key) {
        case "ArrowUp":
            paddle.movement = 0;
            break;
        case "ArrowDown":
            paddle.movement = 0;
            break;
    }
});

requestAnimationFrame(gameLoop);

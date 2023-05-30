const cat = document.querySelector('.cat')
const obstacle = document.querySelector('.obstacle')
const bird = document.querySelector('.bird')

document.addEventListener('keydown', function(event) {
    if(event.code === 'Space') {
        cat.classList.add('jump-action');
        setTimeout(() => {
            cat.classList.remove('jump-action');
        }, 500)
    }
})

const loop = setInterval( () => {

    const obstaclePosition = obstacle.offsetLeft
    const catPosition =  +window.getComputedStyle(cat).bottom.replace('px', '')
    console.log(catPosition)

    if(obstaclePosition <= 101 && obstaclePosition > 0 && catPosition < 12.8) {
        obstacle.style.animation = 'none';
        obstacle.style.left = `${obstaclePosition}px`

        cat.style.animation = 'none';
        cat.style.bottom = `${catPosition}px`
        cat.src = './assets/Black-cat-death.png'

        bird.style.animation = 'none';

        clearInterval(loop);
    }

}, 10)
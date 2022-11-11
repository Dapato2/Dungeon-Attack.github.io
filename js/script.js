window.onload = function () {

    const bg = new Background(canvas.width, canvas.height)
    const hero = new Hero(heroX, heroY, 64, 64, true)
    //let enemy = new Enemy(canvas.width / 2, 20, 64, 64)


    startGame();
    function startGame() {
        requestId = requestAnimationFrame(updateGame)


    };

    const arrProjectiles = [];
    const arrHorda = [];
    canvas.addEventListener('click', (event) => {
        let angle = Math.atan((event.clientY - hero.heroY) / (event.clientX - hero.heroX));
        let velocity;
        if ((event.clientX - hero.heroX) < 0) {
            velocity = {
                x: -1 * Math.cos(angle),
                y: -1 * Math.sin(angle)
            }
        } else {
            velocity = {
                x: Math.cos(angle),
                y: Math.sin(angle)
            }
        }
        let projectile = new Projectile(hero.heroX + 32, hero.heroY + 32, 6, 'red', velocity)
        arrProjectiles.push(projectile)
    })

    function collision (projectile,enemy){
        if( (projectile.x + projectile.radius) > enemy.x && (projectile.x - projectile.radius) < (enemy.x + enemy.width) ){
            if((projectile.y + projectile.radious) > enemy.y && (projectile.y - projectile.radious) < (enemy.y + enemy.height))
            {
                return true;
             
            }else{
                return false;
            }
        }
        else{
            return false;
        }
    }

    setInterval(() => {
        let x = Math.floor(Math.random() * canvas.width);
        let y = 80;
        let angle = Math.atan((hero.heroY - y) / (hero.heroX - x));
        let velocity;
        if ((hero.heroX - x) < 0) {
            velocity = {
                x: -1 * Math.cos(angle),
                y: -1 * Math.sin(angle)
            }
        } else {
            velocity = {
                x: Math.cos(angle),
                y: Math.sin(angle)
            }
        }
        let enemy = new Enemy(x, y, 64, 64, velocity)
        arrHorda.push(enemy)
    }, 200);

    function updateGame() {
        frames++;
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        bg.update();
        hero.update();
        //enemy.update();


        arrProjectiles.forEach((element) => {
            element.update();
        })

        arrHorda.forEach((element,index) => {
            element.update();
            arrProjectiles.forEach((element2,index2) => {
                
                if( (element2.x + element2.radius) > element.x && (element2.x - element2.radius) < (element.x + element.width) ){
                    if((element2.y + element2.radius) > element.y && (element2.y - element2.radius) < (element.y + element.height)){
                        arrHorda.splice(index,1);
                        arrProjectiles.splice(index2,1)
                    }
                }
            })
        })
        

        if (requestId) {
            requestId = requestAnimationFrame(updateGame)

        }
    }
    onkeydown = (key) => {
        hero.move(key)
    }

}

class Background{
    constructor(w,h){
        this.x = 0;
        this.y = 0;
        this.width = w;
        this.height = h;

        this.image = new Image();
        this.image.src="./images/dungeonBackground.png";
    }
    update(){
      
      ctx.drawImage(this.image,this.x,this.y,this.width,this.height);

    }
}
class Hero{
    constructor(heroX,heroY,w,h,isHero){
        this.heroX = heroX;
        this.heroY = heroY;
        this.width = w;
        this.height = h;
        this.step = 25;
        this.image = new Image();
        this.image.src="./images/charactersImg/Knight2Walk2.png";
        this.isHero = isHero;
    }

    update(){
      
        ctx.drawImage(this.image,this.heroX,this.heroY,this.width,this.height);
  
        
      }
      move(direction){
       
        switch(direction.key){
            case "ArrowUp","w":
                 this.heroY -= this.step;
                break;
            case "ArrowDown","s":
                this.heroY += this.step; 
                break;   
            case "ArrowRight","d":
                this.heroX += this.step;
                break;      
            case "ArrowLeft","a":
            this.heroX -= this.step;
                break;

                default:
                break;
      };
    }
}

    class Projectile{
        constructor(x,y,radius,color,velocity){
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.velocity = velocity;
        } 
        draw(){
            ctx.beginPath()
            ctx.arc(this.x,this.y,this.radius,0,Math.PI *2,false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

    update(){
        this.draw();
        this.x += this.velocity.x*8;
        this.y += this.velocity.y*8;
      
    }
    move(direction){
        this.velocity.x += direction.x;
    }
    }
    class Enemy{
        constructor(x,y,w,h,velocity){
            this.x = x;
            this.y = y;
            this.width = w;
            this.height = h;
            this.velocity = velocity;
            this.image = new Image();
            this.image.src="./images/charactersImg/Monster4Walk2.png";
        } 
        draw(){
            ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
        }

    update(){
        this.draw();
        this.x += this.velocity.x*1;
        this.y += this.velocity.y*1;

    }

    }







// 游戏类
class Game{
    constructor(select,scoreEle,bg){
        // 地图
        this.map=document.querySelector(select)
        this.scoreEle=document.querySelector(scoreEle)
        // 食物
        this.food=new Food(select);
        // 蛇
        this.snake=new Snake(select);
        //定时器
        this.timer=0;
        //分数
        this.cunt=0;
        //背景
        this.bg=document.querySelector(bg);
        
    }

    // 游戏开始方法
    start(){
        this.timer = setInterval(() => {
            this.snake.move();

            //判断是否吃到食物
            if(this.snake.isEat(this.food.x,this.food.y)){
                //变长，调用增加蛇头方法
                this.snake.createHead();
                //食物位置更新
                this.food.foodPos();
                this.scoreChange();
            }

            //判断是否死亡
            if(this.snake.isDie()){
                
                clearInterval(this.timer);
                this.gameOver();
                

            }

        }, 100);
    }

    //暂停
    pause(){
        clearInterval(this.timer)
    }

    //重新开始
    restart(){
        window.location.reload();

    }

    //改变方向
    change(type){
        this.snake.direction=type
    }

    //得分增加
    scoreChange(){
        this.cunt++;
        this.scoreEle.innerText=this.cunt
    }

    //游戏结束
    gameOver(){
        this.bg.style.display="block";
    }
}
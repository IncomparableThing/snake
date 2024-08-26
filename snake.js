//蛇对象
class Snake{
    constructor(select){
        this.map=document.querySelector(select);
        //蛇的运动方向
        this.direction="right";
        //蛇的数组
        this.snakelist=[];
        this.createSnake();
        this.move()
        
    }

    //创建蛇头的函数
    createHead(){
        //获取数组第零位，找到head
        const head=this.snakelist[0];
        //定义坐标
        const pos={x:0,y:0};
        if(head){
            
            //有蛇头创建新的蛇头放在原先蛇头后面位置上
            switch (this.direction) {
                case 'left':
                    pos.x=head.offsetLeft-20
                    pos.y=head.offsetTop
                    break;
                case 'right':
                    pos.x=head.offsetLeft+20
                    pos.y=head.offsetTop
                    break;
                case 'top':
                    pos.x=head.offsetLeft
                    pos.y=head.offsetTop-20
                    break;
                case 'bottom':
                    pos.x=head.offsetLeft
                    pos.y=head.offsetTop+20
                    break;
            }
            head.className='body';


        }

        

        //创建蛇头
        const div=document.createElement('div');
        div.className='head';
        //存入数组
        this.snakelist.unshift(div);
        //定义坐标
        div.style.left=pos.x+"px";
        div.style.top=pos.y+"px";
        this.map.append(div);

    }

    // 创建一条蛇
    createSnake(){
        for(let i=0;i<4;i++){
            this.createHead();
        }
            
        
    }

    //移动
    move(){
        //添加一个新的蛇头，将原先蛇头变为身体，删除最后一个身体
        const body = this.snakelist.pop();
        body.remove();
        // 新增蛇头
        this.createHead();
    }

    // 判断有没有吃到食物
    isEat(foodX,foodY){
        // 判断头跟坐标是否重合
        const head = this.snakelist[0];
        const headX=head.offsetLeft;
        const headY=head.offsetTop;

        if(foodX===headX && foodY===headY){
            return true;
        }
        return false;
        
    }

    // 判断是否撞墙
    isDie(){
        
        const head = this.snakelist[0];
        const headX=head.offsetLeft;
        const headY=head.offsetTop;
        
        

        if(headX<0||headY<0||headX>=this.map.clientWidth||headY>=this.map.clientHeight){
            return true;
        }
        return false;

    }
}
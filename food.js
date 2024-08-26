//food类定义
//食物的操作
//1.坐标位置
//2.生成食物
//3.更新坐标

class Food{
    constructor(select){
        this.map=document.querySelector(select);
        
        //创建食物
        this.food=document.createElement("div")
        //定义食物样式
        this.food.className="food"
        //放到地图当中
        this.map.appendChild(this.food);
        //定义坐标
        this.x=0;
        this.y=0;
        this.foodPos()
    }

    foodPos(){
        //1.拿到地图范围
        //2.随机生成数据
        //3.根据随机数进行位置换算
        //4.进行赋值
        

        const w_nub=this.map.clientWidth/20;
        const h_nub=this.map.clientHeight/20;

        let n1=Math.floor(Math.random()*w_nub);
        let n2=Math.floor(Math.random()*h_nub);
        

        this.x=n1*20;
        this.y=n2*20;

        this.food.style.left=this.x+'px';
        this.food.style.top=this.y+'px';

    }
}
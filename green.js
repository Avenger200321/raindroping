class GreenRaindrops{
    constructor(){
        this.x=random(10,390)
        this.y=0
    }
     update(){
         this.y=this.y+5;
         if(this.y>400){
             this.y=0;
             this.x=random(10,390);
         }
     }

    display(){
        push();
        fill("green");
        ellipse(this.x,this.y,20,20);
        pop();
        
    }

    
    

    

}
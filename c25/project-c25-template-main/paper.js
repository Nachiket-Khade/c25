class paper
{
	constructor(x,y,r)
	{
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }

        this.x=x;
		this.y=y;
        this.r=r;
		this.image=loadImage("paper.png");
        this.body=Bodies.circle(this,x,this.y,(this.r-20)/2.options)
        world.add(world,this.body)
    }
    display(){
        var paperpos=this.body.position;
        Push()
        Translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        Fill(255,0,255);
        Pop()
    }	
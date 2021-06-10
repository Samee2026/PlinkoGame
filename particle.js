class Particle {
    constructor() {
        var options = {
            restitution:0.4
        }
        this.r = 10
        this.x = 10
        this.y = 10

        this.body = Bodies.circle(this.x,this.y,this.r,options);
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        fill(this.color)
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};
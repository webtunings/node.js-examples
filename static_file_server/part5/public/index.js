(function(){

    function init(){
        var canvas = document.getElementsByTagName('canvas')[0];
        var c = canvas.getContext('2d');

        c.translate(200,200);
        var rotateAngle = 0.005;

        function draw(time){
            c.clearRect(-200,-200,canvas.width,canvas.height);
            c.beginPath();
            c.fillStyle = 'hsl(195,100%,50%)';
            c.moveTo(150,0);

            for(var angle=0; angle <2*Math.PI;angle+=0.01){
                var x = 150*Math.cos(6*angle)*Math.cos(angle);
                var y = 150*Math.cos(6*angle)*Math.sin(angle);
                c.lineTo(x,y);
            }

            c.fill();
            c.rotate(rotateAngle);
            requestAnimationFrame(draw);
        }

        requestAnimationFrame(draw);

    }

//invoke function init once document is fully loaded
    window.addEventListener('load',init,false);

}()); //self invoking function

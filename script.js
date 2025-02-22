
const canvas = document.querySelector('canvas');
const button = document.getElementById ('button');
const ctx = canvas.getContext('2d');
ctx.globalAlpha = 0.25;

button.addEventListener('click', () => {
    window.location.reload();
});

const columns = [];

class Column {
    constructor(x,color){
        this.x = x;
        this.y = ctx.lineWidth;
        this.width = 95;
        this.height = canvas.height;
        this.color = color;
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

const getRandomInt = (min, max) => 
Math.floor(Math.random()*(max-min+1)+min);

var counter = 0;

produceIt = () => {

    if (counter>120){
        console.log(columns);
        return;
    }
    x = getRandomInt(-40, canvas.width+40);
    color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)}, ${getRandomInt(0,255)})`;

    const column = new Column(x,color);
    columns.push(column);
    columns.forEach(column => column.draw(ctx));
    counter++;

    requestAnimationFrame(produceIt);
}
produceIt();

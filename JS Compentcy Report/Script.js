class Character{
    constructor(image,name,energy,id){
        this.name=name;
        this.energy=energy;
        this.id=id;
        this.image=image;
    }

    display = function(){
        document.getElementById("img" + this.id).innerHTML= `<img class="character" src="${this.image}" alt="">`;
        document.getElementById(this.id).innerHTML=`Name: ${this.name} <br> Health: ${this.energy}`;
    }

    attack = function(opponent,item){
        var newEnergy = opponent.energy - item.imagic;
        opponent.energy = newEnergy;
        opponent.display();
        document.getElementById('console').innerHTML= `<img src="${item.img}"> ${this.name} is attacking ${opponent.name} with a ${item.iname}!! <img src="${item.img}">`;
        if(opponent.energy<=0){
            document.getElementById('console').innerHTML= `Game Over ${opponent.name}!`;
        }
    }
}
    
const c1 = new Character('img/Twilight Sparkle.PNG','Princess Twilight',100,"c1");
const c2 = new Character('img/megatron.png', 'Megatron',100,"c2");



c1.display();
c2.display();

class Item{
    constructor(iname,imagic,img){
        this.iname=iname;
        this.imagic=imagic;
        this.img=img;
    }
}

const item1 = new Item("Rainbow Bolt",20,"img/Rainbow Bolt.jpg");
const item2 = new Item("Fire Bolt",20, "img/fire bolt.jpg");
const item3 = new Item("Frost Bolt",20, "img/Frost Bolt.jpeg");

var items =[item1,item2,item3];


function select(){
    let selection = Math.floor(Math.random()*3);
    return items [selection];

}




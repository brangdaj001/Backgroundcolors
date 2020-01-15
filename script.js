//acess css properties via js

//events: onmouseover, onmouseout, onmousedown, onmouseup

let changeBackground= function(){
    let box1 = document.getElementById("block1");
    let box2= document.getElementById("block2");
    let box3= document.getElementById("block3");

    box1.style.backgroundColor = "green";
    box2.style.backgroundColor="yellow";
    box3.style.backgroundColor="purple";

    box1.innerText="hi";
    box2.innerText="bye";
    box3.innerText="stay";
};

let setOriginal=function(){
    let box1 = document.getElementById("block1");
    let box2= document.getElementById("block2");
    let box3= document.getElementById("block3");

    box1.style.backgroundColor = "red";
    box2.style.backgroundColor="red";
    box3.style.backgroundColor="red";
    box1.innerText="OVER";
    box2.innerText="ENTER";
    box3.innerText="DOWN";
};
let showHidden = function(){
    document.getElementById("hidden").innerText = "youve round the secret";
};
let mouseOver = function(id){
    id.style.backgroundColor="yellow";
    id.innerText ="HELLO";

};

let mouseOut = function(id){
    id.style.backgroundColor ="red";
    if(id === document.getElementById("block1")){
    id.innerText ="over";
}else if (id === document.getElementById("block2")){
    id.innerText = "enter";

}else
    id.innerText="down";
};

    let addClass =function(id){
        id.classList.add("blueBigBold");
    };
    let removeClass = function(id){
      id.classList.remove("blueBigBold");
    };

    let toggleClass = function(id){
        id.classList.toggle("blueBigBold");
    };
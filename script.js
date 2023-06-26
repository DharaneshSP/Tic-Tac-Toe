let onevalid=true;
let twovalid=true;
let threevalid=true;
let fourvalid=true;
let fivevalid=true;
let sixvalid=true;
let sevenvalid=true;
let eightvalid=true;
let ninevalid=true;


let p1=document.querySelector("#box1");
let p2=document.querySelector("#box2");
let current="X";
var b;
b=onevalid && twovalid & threevalid && fourvalid && fivevalid && sixvalid && sevenvalid && eightvalid && ninevalid ;
console.log(b);
var player={"X":'p1',"O":'p2'};

p1.addEventListener("click",()=>{
    b=onevalid && twovalid && threevalid && fourvalid && fivevalid && sixvalid && sevenvalid && eightvalid && ninevalid ;
    console.log(onevalid);
    console.log("b"+b);

   if(b){
    p2.innerHTML=`${current}`;
    player[current]='p2'
    p1.innerHTML=`${(current=="X")?"O":"X"}`;
    player[(current=="X")?"O":"X"]='p1';
    current=(current=="O" )?"X":"O";
    console.log(player);
   };
});


p2.addEventListener("click",()=>{
    
    b==onevalid && twovalid & threevalid && fourvalid && fivevalid && sixvalid && sevenvalid && eightvalid && ninevalid ;
   if(b){ 
    player[current]='p2';
    p2.innerHTML=`${current}`;
    p1.innerHTML=`${(current=="X")?"O":"X"}`;
    player[(current=="X")?"O":"X"]='p1';
    current=(current=="O" )?"X":"O";
   };
});



var one=document.querySelector(".one");
var two=document.querySelector(".two");
var three=document.querySelector(".three");
var four=document.querySelector(".four");
var five=document.querySelector(".five");
var six=document.querySelector(".six");
var seven=document.querySelector(".seven");
var eight=document.querySelector(".eight");
var nine=document.querySelector(".nine");




const win=[
    [1,5,9],
    [3,5,7],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let userx=[];
let usero=[];
const index={1:one,2:two,3:three,4:four,5:five,6:six,7:seven,8:eight,9:nine};
const listuser={"X":userx,"O":usero};
let notwin=true;


one.addEventListener("click",()=>{
    if(onevalid && notwin){
    one.classList.add("cross");
   
    one.innerHTML=current;
    if(current=="X"){
        userx.push(1);   
    }
    else{
        usero.push(1);   
    };
    onevalid=false;
    check(current,listuser[current]);
    current=(current=="O" )?"X":"O";
    };
  
   console.log(onevalid);

});


two.addEventListener("click",()=>{

    if(twovalid && notwin){

    two.classList.add("cross");
    
    two.innerHTML=current;
    if(current=="X"){
        userx.push(2);
    }
    else{
        usero.push(2);
    };
    twovalid=false;
    check(current,listuser[current]);
    current=(current=="O")?"X":"O";
  
};




    
});

three.addEventListener("click",function(){
    if(threevalid && notwin){
    three.classList.add("cross");
    //console.log(winbox);
    
    three.innerHTML=current;
        if(current=="X"){
        userx.push(3);
        
    }
    else{
        usero.push(3);
    };
    threevalid=false;
    check(current,listuser[current]);
    current=(current=="O")?"X":"O";
    console.log(winbox);
   
};
    
    

});

four.addEventListener("click",function(){
    if(fourvalid && notwin){
    four.classList.add("cross");
   
    four.innerHTML=current;

    if(current=="X"){
        userx.push(4);
    }
    else{
        usero.push(4);
    };
    fourvalid=false;
    check(current,listuser[current]);
    current=(current=="O")?"X":"O";
   
};
    
   
});

five.addEventListener("click",function(){
    if(fivevalid && notwin){
    five.classList.add("cross");
   
    five.innerHTML=current;
    
    if(current=="X"){
        userx.push(5);
    }
    else{
        usero.push(5);
    };
    fivevalid=false;
    check(current,listuser[current]);
    current=(current=="O")?"X":"O";
    console.log(winbox);
 

};
   
 
});
six.addEventListener("click",function(){
    if(sixvalid && notwin){
    six.classList.add("cross");
  
    six.innerHTML=current;
    
    if(current=="X"){
        userx.push(6);
    }
    else{
        usero.push(6);
    }
    sixvalid=false;
    check(current,listuser[current]);
    current=(current=="O")?"X":"O";
    console.log(winbox);
  

};
   
 
});
seven.addEventListener("click",function(){
    if(sevenvalid && notwin){
    seven.classList.add("cross");
    
    seven.innerHTML=current;

    if(current=="X"){
        userx.push(7);
    }
    else{
        usero.push(7);
    }
    sevenvalid=false;
    check(current,listuser[current]);
    current=(current=="O")?"X":"O";
  

};
    
   
});

eight.addEventListener("click",function(){
    if(eightvalid && notwin ){
    eight.classList.add("cross");
    
    eight.innerHTML=current;
    
    if(current=="X"){
        userx.push(8);
    }
    else{
        usero.push(8);
    }
    eightvalid=false;
    check(current,listuser[current]);
    current=(current=="O")?"X":"O";
    console.log(winbox);
   
    

};
    

});
nine.addEventListener("click",function(){
    if(ninevalid && notwin){
    nine.classList.add("cross");
    
    nine.innerHTML=current;
   
    if(current=="X"){
        userx.push(9);
    }
    else{
        usero.push(9);
    }
    ninevalid=false;

    check(current,listuser[current]);
    
    current=(current=="O" )?"X":"O";
    
    console.log(` 9th ${ninevalid}`);
   

};
    
});



var c= (onevalid==false && twovalid==false && threevalid ==false && fourvalid==false &&  fivevalid ==false && sixvalid==false && sevenvalid==false && eightvalid==false && ninevalid==false );
var winbox=[];


function check(current,list){
let z='';
for(let i=0;i<win.length;i++){
    let value=0;
    let iswin=false;
    for(let i1=0;i1<win[i].length;i1++){
        if(list.includes(win[i][i1])){
            value++;
        
        }



    if(value==3){
            iswin=true;

            winbox=win[i];
            console.log(`winbox ${winbox}`);

            break;
        }
        else{
            
    console.log(iswin);
    var draw= !(onevalid || twovalid || threevalid || fourvalid || fivevalid || sixvalid || sevenvalid || eightvalid || ninevalid );
    if(draw){
            console.log(b);
            p2.style.boxShadow="1px 0px 10px 3px orange";
            p1.style.boxShadow="1px 0px 10px 3px orange";
         };

    }
}

    if(iswin){



        z="win - "+player[current];
        
        if(player[current]=="p1"){
            p1.style.boxShadow="1px 0px 10px 3px green";
            p2.style.boxShadow="1px 0px 10px 3px red";
            console.log(`b= `+b);
           

        }
       
        else{
            p2.style.boxShadow="1px 0px 10px 3px green";
            p1.style.boxShadow="1px 0px 10px 3px red";
          
        
        };

        console.log(z);
        for(let i=0;i<winbox.length;i++){
        
            index[winbox[i]].style.color="white";
            index[winbox[i]].style.background="#282934";  
            index[winbox[i]].style.borderStyle="dashed";
        };
        var winbox=[];
        console.log(`winbox 2nd ${winbox}`);
        notwin=false;
    
        break;

    }
    

}



};

function refresh(){
    window.location.reload();
};

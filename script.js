

let p1=document.querySelector("#box1");
let p2=document.querySelector("#box2");

let current="X";
let player={"X":'p1',"O":'p2'};

function toggle(){

    if( Object.values(valid).every(item => item) ){
        p2.innerHTML=`${current}`;
        player[current]='p2'
        p1.innerHTML=`${(current=="X")?"O":"X"}`;
        player[(current=="X")?"O":"X"]='p1';
        current=(current=="O" )?"X":"O";
        
   };

}


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

const index ={ 1:one,2:two,3:three,4:four,5:five,6:six,7:seven,8:eight,9:nine };
const value ={ one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9 };

const listuser={"X":userx,"O":usero};

let notwin=true;

const valid ={one:true ,two:true ,three:true , four:true ,five:true , six:true , seven:true , eight:true , nine:true};

function run(id){

    let button = document.getElementById(id);
    
    if(valid[id] && notwin){
        console.log(current);
        button.classList.add("cross");
        button.innerHTML=current;
        listuser[current].push(value[id]);
        valid[id]=false;
        check(current, listuser[current]);
        current=(current=="O" )?"X":"O";
    }; 

};


var winbox=[];

function check(current,list){

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
            break;
        }
        else{
            
    
    var draw= Object.values(valid).every(items=> !items);
    if(draw){
            
            p2.style.boxShadow="1px 0px 10px 3px orange";
            p1.style.boxShadow="1px 0px 10px 3px orange";
         };

    }
}

    if(iswin){

        console.log(`winner - ${player[current]}`);

        if(player[current]=="p1"){
            p1.style.boxShadow="1px 0px 10px 3px green";
            p2.style.boxShadow="1px 0px 10px 3px red";
        }
       
        else{
            p2.style.boxShadow="1px 0px 10px 3px green";
            p1.style.boxShadow="1px 0px 10px 3px red";
          
        };

        
        for(let i=0;i<winbox.length;i++){
        
            index[winbox[i]].style.color="white";
            index[winbox[i]].style.background="#282934";  
            index[winbox[i]].style.borderStyle="dashed";
        };

        var winbox=[];
        notwin=false;
        break;

        }
    }
};

function refresh(){
    window.location.reload();
};



var uName,Starter="";

 


function pokemon(){}

pokemon.prototype={
    constructor:pokemon,
    hp:100,
    mp:100,
    status:"alive",
    nature:"",
    baseDmg:10
}

function player(name,strtrPkm) {
this.name=name,
this.Pkm=strtrPkm
}

function gym_trainer(name) {
    this.name=name
    }

player.prototype=Object.create(pokemon.prototype);

gym_trainer.prototype=Object.create(pokemon.prototype);

const you= new player("","");

const curr_gym= new gym_trainer("zz");





function start() {
    var myobj = document.getElementById("demo");
    myobj.remove();
    var field=document.getElementById("trainerName");
     uName=document.getElementById("trainerName").value;
    field.remove();
    document.getElementById("ngalan").innerHTML = "Welcome to the pokemon world: "+ uName + "<br> Choose your Pokemon";
    const selection = document.getElementsByClassName("grid2x2")[0].style.display = "flex";
    you.name=uName;
  }



    const Pokemon= document.querySelectorAll('.Pokemon');
    for (const btn of Pokemon) {
        btn.addEventListener('click', function() {
            document.getElementById("ngalan").innerHTML = "You have selected "+ this.value;
            Starter=this.value;
            const selection = document.getElementsByClassName("grid2x2")[0].style.display = "none";
            you.Pkm=Starter;
            if(this.value=="Charmander"){
                you.nature="Fire";
            }
            else if(this.value=="Bulbasaur"){
                you.nature="Grass";
            }
            else if(this.value=="Squirtle"){
                you.nature="Water";
            }
            else if(this.value=="Pikachu"){
                you.nature="Electric";
            }
            document.getElementById("continue").style.display ="flex";
         })
    }
    
function showCard(){
    document.getElementById("pkm_card").style.display ="block";
    document.getElementById("continue").style.display ="none";
    document.getElementById("pkmon").innerHTML = you.Pkm;
    document.getElementById("show_name").innerHTML = you.name;
    document.getElementById("show_hp").innerHTML = you.hp;
    document.getElementById("show_sp").innerHTML = you.mp;
    document.getElementById("status").innerHTML = you.status;
    document.getElementById("show_sp").innerHTML = you.mp;
    document.getElementById("state").innerHTML = you.nature;
    document.getElementById("start_journe").style.display ="block";
}

function chooseBtl(){
    document.getElementById("ngalan").innerHTML=" Select the GYM you want to wreck"
    document.getElementById("pkm_card").style.display ="none";
    document.getElementById("start_journe").style.display ="none";
    const selection = document.getElementsByClassName("grid2x2")[1].style.display = "flex";
}

const trainer= document.querySelectorAll('.trainer');
for (const btn of trainer) {
    btn.addEventListener('click', function() {
        document.getElementById("ngalan").innerHTML = "<p style='color:white;'>You have selected "+ this.value + " Gym </p>";
        this.remove();
        curr_gym.name=this.value+" gym";
        curr_gym.nature=this.value;
        const selection = document.getElementsByClassName("grid2x2")[1].style.display = "none";
        // document.getElementById("battle_area").style.display ="block";
        document.querySelector("body").style.backgroundImage="url('img/battlegrass.png')";
        if(you.nature=="Fire" && this.value=="Water"){
            you.baseDmg=8;
            curr_gym.baseDmg=12;
        }
        else if(you.nature=="Grass" && this.value=="Fire"){
            you.baseDmg=8;
            curr_gym.baseDmg=12;
        }
        else if(you.nature=="Water" && this.value=="Electric"){
            you.baseDmg=8;
            curr_gym.baseDmg=12;
        }
        else if(you.nature=="Electric" && this.value=="Grass"){
            you.baseDmg=8;
            curr_gym.baseDmg=12;
        }

        console.log(curr_gym.name);
        console.log(curr_gym.nature);

        // while (you.hp>0){

        // }

     })
}
   

    // function inStanciate(uName,Starter){
    //     you= new player(uName,Starter);
    //    console.log(you.name);
    //    console.log(you.Pkm);
    // }
    
    
    // function giveVal (uName,Starter,callback){
    //     callback(uName,Starter)
    // }
    // // uName="tae";
    // //  Starter="123123";
    // giveVal(uName,Starter,inStanciate);


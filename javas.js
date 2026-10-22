let userscore = 0;  //user or comp ki valuew
let compscore = 0;

const choices = document.querySelectorAll(".choice");  //axces k lia
const msg = document.querySelector("#msg");//msg ko axces kia taky ham msg button pr msg ko print kre

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


//3 com sa choice genrate krwany k lia is function ko use kia

const gencompchoice = () => { //ik function banaya hai generate som sa
const options = ["stone", "paper", "scissor"]; //ik array bana kr apny options do choice lane k
const randomIdx = Math.floor(Math.random() * 3); //genetude nums
return options[randomIdx]; //ya return kr daga com option ki choice koi ik 
};

//6 draw walw me hame sirf msg ko update krna hai score ko update krny ki zarurat ni

const drawgame = () => {     //ya ik function hai jab game draw huga to ya print hujaiga
    msg.innerText = "game was draw";
    msg.style.backgroundColor = "#081b31" ;
};

// 6 agr user jita hai wo usk score ko abdate kr k dekhna hai
const showingwin = (userwin , userchoice, compchoice) => { //user comp ki choice oi buton m prit krny k lia
    if(userwin) {  //agr user win huta hai to ya print kro
        userscore++; //user jity ga unk score abdate huga 
        userscorepara.innerText = userscore; //user score ki new val  
        msg.innerText = `you win your ${userchoice} beat ${compchoice}`; //ya hamre button  me print krega you win usk sath user cmp ne kia choice kia 
        msg.style.backgroundColor = "green"; //jab ham win kare to background color ya hujai
    } else { compscore++; //comp jity ga unk score abdate huga 
        compscorepara.innerText = compscore; //compscore ki new value print
        msg.innerText = `you lose your ${userchoice} beat ${compchoice}`; //nhi to ya print huga
        msg.style.backgroundColor = "red" ;

    }
};

//2 hamre pass user choice to hai ab hame com choice chaia  to hamne com sa choice gen krwa

const playgame = (userchoice) => { //playgame  ko pata huga  ki userki choice kia hai
    //genrate computer choice;;;;??
    const compchoice = gencompchoice(); //jasa he userchoice thi wasa he comchoice hugi kon daga gencom'
// 4 wo comp ki choice generate hukr yaha ai 

 // 5 fight  ///
if (compchoice === userchoice) { ////jab com choice barabr hugi user k to wo condition draw hu jaigi
    //drawgame 
    drawgame(); 
}                 //drwgame call
    else { //pheli condition
    let userwin = true;    //agr user jit gaya 
    if(userchoice === "roke" ) { //com ki choice stone ni hu sakti ya hu 
        //paper  //scissor
        userwin = compchoice === "paper" ? false : true; //agr com ne paper kia to userwin  hai
    } else if(userchoice === "paper") {//dusri condition ya com ne 
        //stone //scissor
        userwin = compchoice === "scissor" ? false :true;
    } else { 
        userwin = compchoice === "roke" ? false : true;
    }
    showingwin(userwin ,userchoice, compchoice); //winner kon ha 
}   
};


// 1 hamne event listner banaya hai jasa he ham choice kare gye hame game ki id mile or fr ham usy pyal kre


 choices.forEach((choice) => {//is sa ham sare choices sa ik ik choice div nikal rahe
    choice.addEventListener("click", () => { //jasa he hamare choice pr click kia jai hamre pas ya log h
        let userchoiced = choice.getAttribute("id"); //hmari id kia thi choice ki
        playgame(userchoiced    ); //playgame ne call ki userki choice ko
    });
});

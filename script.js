console.log("here it's javascript");
let audioelement=new Audio('1.mp3');
function formatTime(seconds) {
    if (typeof seconds !== 'number' || seconds < 0) {
        return "Invalid input";
    }

    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;

    var formattedMinutes = String(minutes).padStart(2, '0');
    var formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return formattedMinutes + ':' + Math.floor(formattedSeconds);
}






// async function getsongs(){


// let a= await fetch('http://127.0.0.1:5500');
// let response=await a.text();
// console.log(response);
// let div=document.createElement("div");
// div.innerHTML=response;
// let tds= div.getElementsByTagName("a");

// console.log(tds)
// let songs=[];
// for(let index=0;index<tds.length;index++){
// const element= tds[index];
// if(element.href.endsWith(".mp3")){
//     songs.push(element.href);
// }
// }
// console.log(songs)
// return songs
// }

// getsongs()

// async function main(){
// // get the list of first songs
// let song= await getsongs();
// console.log(song);

// // first song


// var audio=new Audio(song[0]);
// audio.play();

// // audio.addEventListener("loadeddata",()=>{
// //     let duration =audio.duration;
// //     console.log(duration);
// // })
// }


let songss=[
{name:"check-subh",filepath:"songs/1.mp3"},
{ name:"mashup",filepath:"songs/2.mp3" },
{name:"Pehle Bhi Main",filepath:"songs/3.mp3" },
{name:"Mere Ghar Ram Aaye Hain.",filepath:"songs/4.mp3" },
{name:" Apna Bana Le.",filepath:"songs/5.mp3" },
{name:" Tum Hi Ho",filepath:"songs/6.mp3" },
];



var master=document.getElementById("masterpaly");
var x=new Audio(songss[0].filepath);

function main(){
if(x.paused || x.currentTime<=0){
    x.play();
    master.classList.add("fa-solid");
    master.classList.add("fa-pause");
    master.classList.remove("fa-play");
console.log(master.classList);
}
else{
    x.pause();
    master.classList.add("fa-solid");
    master.classList.remove("fa-pause");
    master.classList.add("fa-play");
}
}

function createmusiclibrary(){
let getsong=Array.from(document.getElementsByClassName("songlist"));
getsong.forEach((element,i) => {
    console.log(element,i);
    document.getElementsByClassName("songnames")[i].innerHTML =songss[i].name;
    
   
});



}
createmusiclibrary()
let index=1;
document.getElementById("nextsong").addEventListener("click",()=>{
console.log("next");


})


// function next(){
   
// x.src=`songs/${songindex+1}.mp3`
// x.play();
// }

// next()


x.addEventListener("timeupdate",()=>{
    console.log("timeupdate");
    progress=parseInt((x.currentTime/x.duration)*100);
    console.log(progress);
    progressbar.value=progress;
    console.log((x.currentTime/60));
    console.log(((x.duration)-(x.currentTime))/60);
    // document.getElementById("currenttime").innerHTML=(x.currentTime/60).toFixed(2);



    //important//
//     document.getElementById("durationfirst").innerHTML=(((x.duration)-(x.currentTime))/60).toFixed();
//     document.getElementById("durationlast").innerHTML=Math.abs((((x.duration + "").split(".")[1]).slice(0,2))-(((x.currentTime + "").split(".")[1]).slice(0,2)));
    
//     document.getElementById("currenttime").innerHTML=(x.currentTime/60).toFixed();
// document.getElementById("currenttimelast").innerHTML=((x.currentTime + "").split(".")[1]).slice(0,2);
// important ends
console.log(x.currentTime,x.duration);
document.querySelector("#currenttime").innerHTML=`${formatTime(x.currentTime)}`
document.querySelector("#durationfirst").innerHTML=` ${formatTime(x.duration)}`


})


function music1(){
    var song1=new Audio(songss[0].filepath);
song1.play();


}


function music2(){
    var song2=new Audio(songss[1].filepath);
    song2.play();
}


function music3(){
    var song3=new Audio(songss[2].filepath);
song3.play();

}


function music4(){
    var song4=new Audio(songss[3].filepath);
song4.play();

}



function music5(){
    var song5=new Audio(songss[4].filepath);
song5.play();


}


function music6(){
    var song6=new Audio(songss[5].filepath);
song6.play();

}





document.getElementById("volume").getElementsByTagName("input")[0].addEventListener("change",(e)=>{
console.log(e,e.target,e.target.value);
x.volume=(e.target.value)/100;
})


function mute(){
    x.volume=0

}


function show(){
console.log("show");
document.getElementById("show").style.opacity = "1"
}

function hide(){
    console.log("hide");
    document.getElementById("show").style.opacity = "0"
    }


    function show1(){
        console.log("show");
        document.getElementById("show1").style.opacity = "1"
        }
        
        function hide1(){
            console.log("hide");
            document.getElementById("show1").style.opacity = "0"
            }



            function show2(){
                console.log("show2");
                document.getElementById("show2").style.opacity = "1"
                }
                
                function hide2(){
                    console.log("hide2");
                    document.getElementById("show2").style.opacity = "0"
                    }



                    function show3(){
                        console.log("show");
                        document.getElementById("show3").style.opacity = "1"
                        }
                        
                        function hide3(){
                            console.log("hide");
                            document.getElementById("show3").style.opacity = "0"
                            }




                            function show4(){
                                console.log("show");
                                document.getElementById("show4").style.opacity = "1"
                                }
                                
                                function hide4(){
                                    console.log("hide");
                                    document.getElementById("show4").style.opacity = "0"
                                    }


                                    function show5(){
                                        console.log("show");
                                        document.getElementById("show5").style.opacity = "1"
                                        }
                                        
                                        function hide5(){
                                            console.log("hide");
                                            document.getElementById("show5").style.opacity = "0"
                                            }


                                            function show6(){
                                                console.log("show");
                                                document.getElementById("show6").style.opacity = "1"
                                                }
                                                
                                                function hide6(){
                                                    console.log("hide");
                                                    document.getElementById("show6").style.opacity = "0"
                                                    }

                                                    function show7(){
                                                        console.log("show");
                                                        document.getElementById("show7").style.opacity = "1"
                                                        }
                                                        
                                                        function hide7(){
                                                            console.log("hide");
                                                            document.getElementById("show7").style.opacity = "0"
                                                            }
        





                                                            function show8(){
                                                                console.log("show");
                                                                document.getElementById("show8").style.opacity = "1"
                                                                }
                                                                
                                                                function hide8(){
                                                                    console.log("hide");
                                                                    document.getElementById("show8").style.opacity = "0"
                                                                    }
                



                                                                    function show9(){
                                                                        console.log("show");
                                                                        document.getElementById("show9").style.opacity = "1"
                                                                        }
                                                                        
                                                                        function hide9(){
                                                                            console.log("hide");
                                                                            document.getElementById("show9").style.opacity = "0"
                                                                            }
                        
document.querySelector(".hamburgermenu").addEventListener("click",()=>{
document.querySelector(".left").style.left="0";

})

document.getElementById("closed").addEventListener("click",()=>{
    document.querySelector(".left").style.left="-100%";
    console.log("close")
})













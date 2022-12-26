const hour=document.getElementById('hours');
const minute=document.getElementById('minutes');
const second=document.getElementById('seconds');
const meridianSlot=document.getElementsByClassName('meridian');
const clock=setInterval(function time(){
  let dateToday =new Date();
let hr=dateToday.getHours();
let min=dateToday.getMinutes();
let sec=dateToday.getSeconds();
let meridian;
if(hr>12){
    meridian="PM"
    hr-=12;
}else{
    meridian="AM"
}

if(hr<10){
hr='0'+hr;
}
if(min<10){
    min='0'+min;
}
if(sec<10){
    sec='0'+sec;
}
    hours.innerHTML=hr;
minutes.innerHTML=min;
seconds.innerHTML=sec;
meridianSlot[0].innerHTML=meridian;
},1000);




function setAlarm() {
    let wake = document.getElementById("settime1").value;
    let lunch = document.getElementById("settime2").value;
    let nap = document.getElementById("settime3").value;
    let night = document.getElementById("settime4").value;
    
    let time = new Date();
   h= time.getHours();
     let greeting;
   let user=document.getElementById('girlimg');
    if (h > 12 && h <=16 ) {
        greeting=`<img src="./lunchimage.png">`;
        user.innerHTML=greeting
        document.getElementById("wakeup").innerText = "Good Afternoon !! Take Some Sleep "
        document.getElementById("greeting").innerText = "Let's Have Some Lunch !! "
    
       
    }
  
    else if (h> 16 && h <=20) {
        greeting=`<img src="./tea.png">`;
        user.innerHTML=greeting
        document.getElementById("wakeup").innerText = "Good Evening !! "
        document.getElementById("greeting").innerText = "Stop Yawning, Get Some Tea.. It's Just Evening  !! "
        
    }
    else if (h> 20 && h<=24 ) {
        greeting=`<img src="./sleep.jpg">`;
        user.innerHTML=greeting
        document.getElementById("wakeup").innerText = "Good Night !! "
             document.getElementById("greeting").innerText = "Close Your Eyes and Go to Sleep !! "
           
            }
   const a= document.querySelectorAll("#wakeup")
    const b=document.querySelectorAll("#greeting")
  
    
    const c=document.querySelectorAll("girlimg")
    
    function wakeut() {
        let afterW = parseInt(wake) + 1;
        if (wake < 12) {
            if (wake < 11) 
                return wake + "AM - " + afterW + "AM"
            else return wake + "AM - " + afterW + "PM"
        }
        else {
            afterW = afterW - 12;
            wake = wake - 12;
            if (wake < 11)
                return wake + "PM - " + afterW + "PM";
            else return wake + "PM - " + afterW + "AM";
        }
    }
   
    function lunc() {
        let afterL = parseInt(lunch) + 1;
        if (lunch < 12) {
            if (lunch < 11)
                return lunch + "AM - " + afterL + "AM"
            else return lunch + "AM - " + afterL + "PM"
        }
       else {
            afterL = afterL - 12;
            lunch = lunch - 12;
            if (lunch < 11)
                return lunch + "PM - " + afterL + "PM";
            else return lunch + "PM - " + afterL + "AM";
        }
    }

    function eve() {
        let afterN = parseInt(nap) + 1;
        if (nap < 12) {
            if (nap < 11)
                return nap + "AM - " + afterN + "AM";
            else return nap + "AM - " + afterN + "PM";
        }
        else {
            afterN = afterN - 12;
            nap = nap - 12;
            if (nap < 11)
                return nap + "PM - " + afterN + "PM";
            else return nap + "PM - " + afterN + "AM";
        }
    }

    function nigt() {
        let afternT = parseInt(night) + 1;
        if (night < 12) {
            if (night < 11)
                return night + "AM - " + afternT + "AM"
            else return night + "AM - " + afternT + "PM"
        }
        else {
            afternT = afternT - 12;
            night = night - 12;
            if (night < 11)
                return night + "PM - " + afternT + "PM";
            else return night + "PM - " + afternT + "AM";
        }
    }
   
    document.getElementById("wakeu").innerText = wakeut();
    document.getElementById("lunch").innerText = lunc();
    document.getElementById("nap").innerText = eve();
    document.getElementById("night").innerText = nigt();
}
setAlarm()

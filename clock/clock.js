function showTime()
{
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let session = "AM"
    if(h>12){
        h-= 12;
        session ="PM";
    }
    if(h<10){ //from 0-9
    h="0"+h;
    }     
    if(m<10){ //from 0-9
    m="0"+m;
    }
    s =(s<10)? "0"+s:s;  //seconds equal to if seconds is greater than 10, concatinate 0 to seconds, else just print seconds
    document.getElementById("digitalClock").innerHTML= h + ":" + m + ":" + s + " " + session;
    setTimeout(showTime,1000);      
} 
showTime(); 
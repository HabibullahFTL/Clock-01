setInterval(function(){
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();


    let second = document.getElementById("sec");
    second.style.transform = "rotate("+sec*6+"deg)";

    let minute = document.getElementById("min");
    minute.style.transform = "rotate("+min*6+"deg)";
    
    let hour = document.getElementById("hr");
    hour.style.transform = "rotate("+hr*30+"deg)";
},1000);
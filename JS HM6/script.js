window.addEventListener("DOMContentLoaded", (event)=> {
   /* Task 1
   var auto = new Object();
   auto.Manufacture = "Volvo";
   auto.Model = "XC40";
   auto.Year = 2022;
   auto.AverageSpeed = 120;

   AutoInfo(auto);
   console.log(TimeOfPath(auto,1000));*/

   /*Task 3*/
  
 });

 /*Task 1 Создать объект, описывающий автомобиль*/
 function AutoInfo(auto)
{
    console.log(auto.Manufacture);
    console.log(auto.Model);
    console.log(auto.Year);
    console.log(auto.AverageSpeed);
}

function TimeOfPath(auto, path)
{
    let time = Math.trunc(path / auto.AverageSpeed);
    if (time > 4)
    {
        time += Math.trunc(time / 4);
    }
    let minute = (path % auto.AverageSpeed) * 60/100;

    return time + ":" + minute;
}

/*Task 3 Создать объект, описывающий время (часы, минуты, секунды)*/

   


const ObjectTime = {
    hour: 10,
    minute: 22,
    second: 44,
    getTime: getTimeFormat,
    changeSec: changeSec,
    changeMin: changeMin,
    changeHours: changeHours,
}

function getTimeFormat() {
    return formatTime(this.hour) + ':' + formatTime(this.minute) + ':' + formatTime(this.second);
}

function formatTime(i) {
    // if (!mm) mm = '00';
    // if (!ss) ss = '00';
    // let result = hh + ":" + mm  + ":" + ss;
    // return result;
    let result = i;
    if (i < 10) {
        result = '0' + i;
    }
    return result;
}

function changeSec(s) {
    this.second = this.second + s;
    while (this.second > 59) {
        this.changeMin(1);
        this.second = this.second - 60;
    }
}

function changeMin(m) {
    this.minute = this.minute + m;
    while (this.minute > 59) {
        this.changeHours(1);
        this.minute = this.minute - 60;
    }
}

function changeHours(h) {
    this.hour = this.hour + h;
    while (this.hour > 23) {
        this.hour = this.hour - 24;
    }
}
console.log(ObjectTime.getTime());
ObjectTime.changeSec(120);
console.log(ObjectTime.getTime());

ObjectTime.changeHours(55);
console.log(ObjectTime.getTime());

ObjectTime.changeMin(120);
console.log(ObjectTime.getTime());


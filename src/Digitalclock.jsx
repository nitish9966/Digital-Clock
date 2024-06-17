import { useEffect, useState } from "react";


function Digitalclock(){

    const [time,setTime]=useState(new Date())

    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(new Date());
        },1000);

        return()=>{
            clearInterval(interval)
        }
    },[])

function formateInterval(){
    let hour=time.getHours();
    const minute=time.getMinutes();
    const seconds=time.getSeconds();
    const meridian = hour>=12?"PM":"AM";

    hour=hour % 12 || 12;

    return `${padZero(hour)}:${padZero(minute)}:${padZero(seconds)} ${meridian}`;
}

function padZero(number){
    return (number<10 ? "0":"")+number;
}

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formateInterval()}</span>
            </div>
        </div>
    )
}

export default Digitalclock;
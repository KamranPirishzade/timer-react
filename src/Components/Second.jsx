import React, { useEffect, useState } from 'react'
import styles from "./Second.module.css"

export default function Second() {
   const [time,setTime]=useState(0);
   const [working,setWork]=useState(false);

   useEffect(()=>{
    let interval
    if (working){
        interval=setInterval(()=>{
            setTime((prevTime)=>prevTime+1)
        },1000)
    }else{
        clearInterval(interval)
    }

    return () => clearInterval(interval);
   },[working])

   const formatTime = (t) => {
    const seconds = Math.floor(t%60);
    const minutes = Math.floor((t/60)%60);
    const hours = Math.floor(t/3600);

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    }

    const handleTime=()=>{
        setWork(!working);
    }
    const handleReset=()=>{
        setWork(false);
        setTime(0);
    }
  
  return (
    <div>
        <div>
            <p className={styles.formatted}>{formatTime(time)}</p>
        </div>
        <div className={styles.buttons}>
            <button onClick={handleTime}>Start/stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

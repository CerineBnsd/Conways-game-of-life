import { useRef, useEffect } from "react"


export const  useInterval = (callback,delay,grid,clickable)=>{
    const savedCallback = useRef();

    useEffect(()=>{
        savedCallback.current = callback
    },[callback])

    useEffect(()=>{
        if(!clickable){
            function tick() {
                savedCallback.current();
            }
            if(delay !== null){
                let id = setInterval(tick,delay);
                return () => clearInterval(id)
            }
        }
    },[delay,grid,callback])
}
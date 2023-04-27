import { useEffect, useState } from "react"

const ClockTimer = () => {
    const [timer, setTimer] = useState(1)
    const [start, setStart] = useState(true)
    const [lap,setLap] = useState([])
    
    const handleOnStart = () => {
        setStart(true)
    }

    const handleOnStop = () => {
        setStart(false)
    }

    const handleOnLap = () => {
        let currTimer = timer
        setLap(prev => [...prev, currTimer])  
    }

    useEffect(() => {    
        console.log(start)
        const timeOut =  setTimeout(() => {
            setTimer(timer + 1)
        }, 1000)        
    
        return () => {
            if (!start) {
                clearTimeout(timeOut)
            }            
        }        
    },[])

   
    return (
        <div>
            <p>{timer}</p>
            {
                lap && lap.map((item) => (
                    <p>{item}</p>
                ))
           }
            <button onClick={handleOnStart}>
                start
            </button>
            <button onClick={handleOnStop}>
                stop
            </button>
            <button onClick={handleOnLap}>
                lap
            </button>
        </div>
    )
}

export default ClockTimer
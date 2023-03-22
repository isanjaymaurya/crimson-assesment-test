import * as React from 'react'

export default function (){
    const [timer, setTimer] = React.useState(0)
    const [isRunning, setIsRunning] = React.useState(false)
    const [isPaused, setIsPaused] = React.useState(false)

    const handleOnStart = () => {
        setIsRunning(true)
        setIsPaused(false)
    }

    const handleOnPause = () => {
        setIsPaused(true)
    }

    const handleOnStop = () => {
        setIsRunning(false)
        setTimer(0)
    }

    React.useEffect(() =>{
        let interval = null 

        if(isRunning && !isPaused){
            interval = setInterval(() => {
                            setTimer(timer => timer + 1)
                        }, 1000)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [isRunning, isPaused])

    return (
        <div className='container mx-auto'>
            <div className='flex gap-10 m-4 items-center'>
                <button className='btn bg-indigo-500 py-2 px-6 rounded text-white' onClick={handleOnStart}>{isPaused ? 'Resume' : "Start"}</button>
                <div className='text-lg'>Timer: {timer}</div>
                <button className='btn bg-indigo-500 py-2 px-6 rounded text-white' onClick={handleOnPause}>{isPaused ? 'Paused' : 'Pause'}</button>
                <button className='btn bg-indigo-500 py-2 px-6 rounded text-white' onClick={handleOnStop}>Stop</button>
            </div>

        </div>
    )
}
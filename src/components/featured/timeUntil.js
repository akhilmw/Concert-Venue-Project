import React, { useState, useEffect, useCallback } from "react";
import { Slide } from "react-awesome-reveal";


const TimeUntil = () => {

    const renderItem = (time, value) => {
        return (
            <div className="countdown_item">
                <div className="countdown_time">
                    {time}
                </div>
                <div className="countdown_tag">
                    {value}
                </div>
            </div>
        )
    }

    const [time, setTime] = useState({
        days : '0',
        hours : '0',
        mins : '0',
        secs : '0'
    })

    const getTimeUntil = useCallback((deadline) => {
        const concertTime = Date.parse(deadline)
        const currentDate = Date.parse(new Date())
        const time = concertTime - currentDate
        if (time < 0) {
            console.log('Date passed')
        } else {
            const secs = Math.floor((time/1000) % 60)
            const mins = Math.floor((time/1000/60) % 60)
            const hours = Math.floor((time/(1000*60*60)) % 24)
            const days = Math.floor((time/(1000*60*60*24)))
            
            setTime({days, hours, mins, secs})
        }
        
        
    },[])

    useEffect(() => {
        setInterval(() => getTimeUntil('Nov, 20, 2024, 01:20:00'), 1000)
    }, [getTimeUntil])


    return (
        <Slide left delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event starts in
                </div>
                <div className="countdown_bottom">
                    {renderItem(time.days, 'Days')}
                    {renderItem(time.hours, 'Hours')}
                    {renderItem(time.mins, 'Mins')}
                    {renderItem(time.secs, 'Secs')}
                </div>
            </div>
        </Slide>
    )
}


export default TimeUntil
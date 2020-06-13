import React from 'react'

import CalendarBox from "./calendarBox"

export default function calendarBoxes(props) {
    const renderBoxes = () => {
        const boxes = []

        for (let i=1; i<=props.startDay; i++) {
            let date = props.daysInPreviousMonth - (props.startDay - i)
            boxes.push(
                <CalendarBox key={`P${i}`} date={date} inactive={true} />
            )
        }

        for (let i=1; i<=props.daysInMonth; i++) {
            boxes.push(
                <CalendarBox key={i} date={i}/>
            )
        }

        for (let i=1; i<=(42 - (props.daysInMonth + props.startDay)); i++) {
            boxes.push(
                <CalendarBox key={`N${i}`} date={i} inactive={true} />
            )
        }

        return boxes
    }

    return (
        <div className="calendar-boxes-wrapper">
            {renderBoxes()}
        </div>
    )
}
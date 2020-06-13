import React from 'react'

import Day from "./day"

export default function daysWrapper(props) {
    return (
        <div className="days-wrapper">
            {/* Build out the divs first, then convert to components */}
            <Day day="Sunday" />
            <Day day="Monday" />
            <Day day="Tuesday" />
            <Day day="Wednesday" />
            <Day day="Thursday" />
            <Day day="Friday" />
            <Day day="Saturday" />
        </div>
    )
}
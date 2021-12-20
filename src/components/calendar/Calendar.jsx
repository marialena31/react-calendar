import React from 'react'
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
    const [calendarEvents, setCalendarEvents] = React.useState([] )
    let eventGuid = 0
    function createEventId() {
        return String(eventGuid++)
    }
    const handleDateClick = e => {
        setCalendarEvents([...calendarEvents, {title: "New Event", start: e.dateStr} ])
        console.log(calendarEvents)
    }
    const handleDragEvent = e => {
        alert(e.dateStr)
    }

    const handleDateSelect = (selectInfo) => {
        let calendarApi = selectInfo.view.calendar

        calendarApi.unselect() // clear date selection

        calendarApi.addEvent({
            id: createEventId(),
            title: 'rdv pneu',
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
        })

    }

    function renderEventContent(eventInfo) {
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </>
        )
    }

    return (
        <div className="col-lg-9">
            <div>
                <FullCalendar
                    selectable='true'
                    firstDay={1}
                    initialView="timeGridWeek"
                    plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                    header={{
                        left: "prev,next today",
                        center: "title",
                        right: 'timeGridWeek,timeGridDay'
                    }}

                    nowIndicator
                    displayEventEnd={{
                        month: false,
                        basicWeek: true,
                        default: false,
                    }}
                    droppable
                    eventDrop={(info) => {
                        handleDragEvent(info.event.id, info.event.title, info.event.start, info.event.end, info.event.allDay);
                    }}
                    dateClick={handleDateClick}
                    dateSelected={handleDateSelect}
                    events={calendarEvents}
                    eventContent={renderEventContent} // custom render function
                    /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
                />
            </div>
        </div>
    )
}

export default Calendar
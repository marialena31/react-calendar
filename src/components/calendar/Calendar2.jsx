import React from 'react'
import TimekitBooking from 'timekit-booking'
class Calendar2 extends React.Component {
    componentDidMount() {
        let widget = new TimekitBooking();
        widget.init({
            app_key: 'test_widget_key_9JgE4wh0h3KenBAA7ifHGmwSkWkXGoBm',
            project_id: '62fc5a09-0a40-4602-805c-abc2f5a3dc4b'
        });
    }
    render() {
        return (
            <>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" defer></script>
        <script src="https://cdn.timekit.io/booking-js/v2/booking.min.js" defer></script>
        <div id="app">
            <div>
                <h2>Widget:</h2>
                <div id="bookingjs"></div>
            </div>
        </div>
            </>
        )
    }
}

export default Calendar2
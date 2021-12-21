import React from 'react';
import ReactDOM from 'react-dom';
import TimekitBooking from 'timekit-booking'
import $ from 'jquery'

class TestApp extends React.Component {
    componentDidMount() {
        let widget = new TimekitBooking();
        widget.init({
            app_key: 'live_widget_key_yYXHsUurvCUctNYflzGDMqEJo6mol0Yo',
            project_id: '352a29be-9ec4-4875-ac87-cb5fb3a2fe62'
        });
    }
    render() {
        return (
            <div>
                <h2>Widget:</h2>
                <div id="bookingjs"></div>
            </div>
        )
    }
}

ReactDOM.render(<TestApp />, document.querySelector("#app"))
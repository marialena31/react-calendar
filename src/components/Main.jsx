import React from 'react'

import SideBar from './sidebar/SideBar'
import Calendar2 from './calendar/Calendar2'

const Main = () => {
    return (
        <div className="wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <SideBar />
                                    <Calendar2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
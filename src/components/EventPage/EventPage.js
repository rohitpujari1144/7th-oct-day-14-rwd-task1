import React from 'react'
import './eventPage.css'

function EventPage() {
    return (
        <>
            <div className="mainDiv border border-dark rounded" >
                <div className='text-center textDivOne'>
                    <h3>Event 1</h3>
                </div>
                <div className='text-center textDivOne'>
                    <h4>Number of available seats: 23</h4>
                </div>
                <div className='border border-dark formMainDiv mt-3' >
                    <div className="rowDiv" >
                        <div className="imageMainDiv border border-dark">
                            <div className='imageSubDiv border border-dark'>
                                <span className='image'>Image</span>
                            </div>
                        </div>
                        <div className="inputDiv">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Name</span>
                                <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Email</span>
                                <input type="email" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Number of Seats</label>
                                <select className="form-select" id="inputGroupSelect01">
                                    <option>Choose...</option>
                                    <option value="1">1</option>
                                    <option defaultValue>2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Number of Attendee 2:</span>
                                <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className='buttonMainDiv'>
                                <div className='me-5'>
                                    <button type="button" className="btn btn-outline-primary">Submit</button>
                                </div>
                                <div >
                                    <button type="button" className="btn btn-outline-warning">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventPage
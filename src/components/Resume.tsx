import React, { Fragment } from 'react'
import * as Const from '../utils/conts'

function Resume() {
    return (
        <Fragment>
            <section className="ftco-section ftco-no-pb" id="resume-section">
                <div className="container">
                    <div className="row justify-content-center pb-5">
                        <div className="col-md-10 heading-section text-center ftco-animate">
                            <h1 className="big big-2">Resume</h1>
                            <h2 className="mb-4">Resume</h2>
                            <p>{Const.resume_description}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            {
                                Const.MyEducations.map((item, index) => {
                                    return (
                                        <div className="resume-wrap ftco-animate" key={index}>
                                            <span className="date">{item.year}</span>
                                            <h2>{item.title}</h2>
                                            <span className="position">{item.degree}</span>
                                            <p className="mt-4">{item.description}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="col-md-6">
                            {
                                Const.MyExperiences.map((item, index) => {
                                    return (
                                        <div className="resume-wrap ftco-animate" key={index}>
                                            <span className="date">{item.year}</span>
                                            <h2>{item.title}</h2>
                                            <span className="position">{item.position}</span>
                                            <p className="mt-4">{item.description}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-6 text-center ftco-animate">
                            <p><a href="#" className="btn btn-primary py-4 px-5">Download CV</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Resume
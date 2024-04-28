import React, { Fragment } from 'react'
import * as Const from '../utils/conts'
function About() {
    return (
        <Fragment>
            <section className="ftco-about img ftco-section ftco-no-pb" id="about-section">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-6 col-lg-5 d-flex">
                            <div className="img-about img d-flex align-items-stretch">
                                <div className="overlay"></div>
                                <div className="img d-flex align-self-stretch align-items-center" style={{ backgroundImage: 'url(myImages/bg_ys1.png)' }}>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
                            <div className="row justify-content-start pb-3">
                                <div className="col-md-12 heading-section ftco-animate">
                                    <h1 className="big">About</h1>
                                    <h2 className="mb-4">About Me</h2>
                                    <p>{Const.about_description}</p>
                                    <ul className="about-info mt-4 px-md-0 px-2">
                                        <li className="d-flex"><span>Name:</span> <span>{Const.MyFullName}</span></li>
                                        <li className="d-flex"><span>Date of birth:</span> <span>{Const.MyBirthDate}</span></li>
                                        <li className="d-flex"><span>Address:</span> <span>{Const.MyAddress}</span></li>
                                        <li className="d-flex"><span>Zip code:</span> <span>{Const.MyZipCode}</span></li>
                                        <li className="d-flex"><span>Email:</span> <span>{Const.MyEmail}</span></li>
                                        <li className="d-flex"><span>Phone: </span> <span>{Const.MyPhone}</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="counter-wrap ftco-animate d-flex mt-md-3">
                                <div className="text">
                                    <p className="mb-4">
                                        <span className="number" data-number={Const.MyProjectsCompleted}>0</span>
                                        <span>Project complete</span>
                                    </p>
                                    <p><a href="#" className="btn btn-primary py-3 px-3">Download CV</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default About
import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="experience">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Experience</span>
                                <h2 className="colorlib-heading animate-box fadeInUp animated">Work Experience</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article className="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-1">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2><a href="http://www.tisa-software.com/" target="_blank" rel="noopener noreferrer">Software Developer @ Tisa Software</a> <span>March 2019 - Present</span></h2>
                                                <p></p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-2">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                            <h2><a href="https://sysone.com.ar" target="_blank" rel="noopener noreferrer">Software Developer @ Sysone </a> <span>March 2018 - March 2019</span></h2>
                                                <p>Development and maintenance of web applications for insurance based companies using Java, Spring, Hibernate, SQL Server, Gradle, Primefaces.</p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-3">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2><a href="https://www.conicet.gov.ar/?lan=en" target="_blank" rel="noopener noreferrer">Software Developer @ CONICET </a> <span>May 2015 - March 2018</span></h2>
                                                <p>Development and Maintenance of CONICET Inventory System using Java, Spring, Hibernate, MySQL, Maven, Freemarker, JQuery, AngularJS.</p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box fadeInUp animated" data-animate-effect="fadeInTop">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-4">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2><a href="https://www.tgv.com.ar/" target="_blank" rel="noopener noreferrer">Software Developer @ TGV Excelencia en Soluciones Informáticas S.A. </a> <span>June 2013 - July 2014</span></h2>
                                                <p>ABAP developer in several projects for FI-CO-MM-HR SAP modules.</p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-5">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2><a href="https://www.frba.utn.edu.ar/" target="_blank" rel="noopener noreferrer">ATP de 2° Interino @ Universidad Tecnológica Nacional </a><span>February 2007 - June 2013</span> </h2>
                                                <p>Administrative employee in the Human Resources office.</p>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry begin animate-box fadeInUp animated" data-animate-effect="fadeInBottom">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-none">
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
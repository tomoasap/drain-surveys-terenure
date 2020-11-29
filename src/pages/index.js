import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="CCTV Drain Surveys Dublin - Drain Surveys Terenure"
                    meta={[
                        { name: 'description', content: 'CAMERA SURVEY OF DRAINS & CCTV PIPELINE INSPECTION A CCTV DRAINAGE SURVEY STREAMLINES THE PROBLEM AND REVEALS A CLEAR COURSE OF ACTION TO FOLLOW.' },
                        { name: 'keywords', content: 'Drain Surveys, CCtv Drain Surveying, Drain Company Dublin' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Emergency Plumbers</h3>
                                <p>24 Hour, Fully Insured Emergency Plumbers in Dublin</p>
                            </header>
                            <Link to="/Emergency-Drain-Plumbers" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Drain Repair</h3>
                                <p>Some problems with your drains go beyond a simple blockage.</p>
                            </header>
                            <Link to="/Drain-Repair" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Blocked Drains</h3>
                                <p>How to clear a blocked drain?</p>
                            </header>
                            <Link to="/Blocked-Drain" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>The Official SISTER site</h3>
                                <p>Our Sister Company DC Drain Cleaning Ltd.</p>
                            </header>
                            <Link to="/dcdraincleaning.com" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Your Drain Unblocking Experts</h3>
                                <p>With drain experts in Dublin your drains are in good hands! </p>
                            </header>
                            <Link to="/Drain-Unblocking-Dublin" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Commercial Drain Cleaning</h3>
                                <p>Professional help can save your time and efforts and protect you from the threats of getting exposed to sewer gas.</p>
                            </header>
                            <Link to="/Professional-Drain-Cleaning" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Drain Maintenance</h2>
                            </header>
                            <p>We are specialist's in drain maintenance. We provide a cost effective solution to drain cleaning, grease traps, CCTV drain and manhole survey, pipe lining and plumbing.</p>
                            <ul className="actions">
                                <li><Link to="/Drain-Maintenance" className="button next">Find Out More</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
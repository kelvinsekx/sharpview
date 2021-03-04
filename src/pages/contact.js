import React from "react";
import Layout from '../components/layout'
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';


export default function Contact () {
    return (
        <Layout>
            <h1>Contact Us</h1>
            <div className='ctFlex'>
                <div className="ctf-1">
                    <div style={{fontSize: '230%'}}>Time is <Bounce><span style={{backgroundColor: 'blue', color: 'white'}}>Precious</span></Bounce></div>
                    <div className='ctp'><Fade><p>And so we value your precious time and effort to reach Sharpview.</p></Fade><Zoom><p>Make it snappy. Reach us now</p></Zoom></div>
                </div>
                <div className="ctf-2">
                    <div>
                        <div className="tits">
                        <p>Name</p>
                        <input placeholder="Mr sekx..."/>
                        </div>
                        <div className="tits">
                        <p>Mail</p>
                        <input placeholder="help us reply you..."/>
                        </div>
                        <div className="tits">
                        <p>Say Something</p>
                        <textarea wrap="true"  placeholder="complaints..."/>
                        </div>
                        <button>Submit your stuff</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
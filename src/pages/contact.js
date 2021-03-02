import React from "react";
import Layout from '../components/layout'


export default function Contact () {
    return (
        <Layout>
            <h1>Contact Us</h1>
            <div className='ctFlex'>
                <div className="ctf-1">
                    <div style={{fontSize: '230%'}}>Time is <span style={{backgroundColor: 'blue', color: 'white'}}>Precious</span></div>
                    <div className='ctp'><p>And so we value your precious time and effort to reach Sharpview.</p><p>Make it snappy. Reach us now</p></div>
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
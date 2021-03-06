import React, {useState} from "react";
import Layout from '../components/layout'
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

import {navigate} from "gatsby"


export default function Contact () {
    const [statement, setStatement] = useState('submit');
    const [state, setState] = useState({})
    const [dis, setDis ] = useState(false)

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    function encode (data) {
        return Object.keys(data).map(key=> encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&')
    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        setStatement('processing...');
        setDis(true);
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urencoded'},
            body: encode(
                {
                'form-name': form.getAttribute('name'),
                ...state
                }
            )
        }).then(()=>alert("Wait a sec, your data is collected."))
        .then(()=>navigate(form.getAttribute('action')))
        .catch(err=>alert(err))
    }
    return (
        <Layout>
            <h1>Contact Us</h1>
            <div className='ctFlex'>
                <div className="ctf-1">
                    <div style={{fontSize: '230%'}}>Time is <Bounce><span style={{backgroundColor: 'blue', color: 'white'}}>Precious</span></Bounce></div>
                    <div className='ctp'><Fade><p>And so we value your precious time and effort to reach Sharpview.</p></Fade><Zoom><p>Make it snappy. Reach us now</p></Zoom></div>
                </div>
                <form 
                    className="ctf-2"
                    name="contactsharpview"
                    method="POST"
                    netlify-honeypot="bot-field"
                    data-netlify="true"
                    action="/"
                    onSubmit = {handleSubmit}>
                        <input type="hidden" name="form-name" value="contactsharpview" />
                    <div>
                        <div className="tits">
                        <p>Name</p>
                        <input 
                            placeholder="Mr sekx..."
                            autoComplete="name"
                            name="UserName"
                            onChange={handleChange}/>
                        </div>

                        <div className="tits">
                        <p>Mail</p>
                        <input 
                            placeholder="help us reply you..."
                            autoComplete="email"
                            name="Email"
                            onChange={handleChange}/>
                        </div>

                        <div className="tits">
                        <p>Say Something</p>
                        <textarea 
                        wrap="true"  
                        placeholder="complaints..."
                        onChange={handleChange}
                        name="info"/>
                        </div>
                        <button disabled={dis}>{statement}</button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
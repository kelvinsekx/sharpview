import React, {useState} from "react";
import Layout from '../components/layout'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

import {FiActivity} from "@react-icons/all-files/fi/FiActivity"
import {navigate} from "gatsby-link"
import SEO from "../components/seo"

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
        return Object.keys(data).map((key)=> encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&')
    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        setStatement('processing...');
        setDis(true);
        const form = e.target;
        fetch("/", {
            method: "POST",
            headers: {"Content-Type": 'application/x-www-form-urlencoded'},
            body: encode(
                {
                'form-name': form.getAttribute('name'),
                ...state
                }
            )
        }).then(()=>alert("Wait a sec, your data is collected. Sharpview will reach back to you soon. Bye!!!"))
        .then(()=>navigate(form.getAttribute('action')))
        .catch(err=>alert(err))
    }
    return (
        <Layout>
            {/** seo */}
            <SEO title="contact sharpview" />

            {/**other stuff */}
            <h1>Contact Us</h1>
            <div className='ctFlex'>
                <div className="ctf-1">
                    <Bounce><div style={{fontSize: '200%'}}>Time is Precious</div></Bounce>
                    <div className='ctp'><Fade><p>And so we value your precious time and effort to reach Sharpview. Send us a feedback...we love to hear from you.</p></Fade><p>Make it snappy.</p>
                </div>
                <div style={{paddingTop: '2em'}}>rather <a href="https://forms.gle/ssGd28KgtSPZbi9s6" className="fi-link">
                            <span><FiActivity /></span>
                        <span>schedule an appointment</span></a>
                </div>
            </div>
                <form 
                    className="ctf-2"
                    name="contactsharpview"
                    method="POST"
                    netlify-honeypot="bot-field"
                    data-netlify="true"
                    action="/"
                    onSubmit = {handleSubmit}>
                        <header>keep in touch !</header>
                        {/* <input type="hidden" name="form-name" value="contactsharpview" /> */}
                    <div>
                        <div className="tits">
                        <p>Name</p>
                        <input 
                            placeholder="yourname"
                            autoComplete="name"
                            name="username"
                            required
                            onChange={handleChange}/>
                        </div>

                        <div className="tits">
                        <p>Mail</p>
                        <input 
                            placeholder="you@mail.com"
                            autoComplete="email"
                            name="email"
                            required
                            onChange={handleChange}/>
                        </div>

                        <div className="tits">
                        <p>Say Something</p>
                        <textarea 
                        wrap="true"  
                        placeholder="lalala..."
                        onChange={handleChange}
                        required
                        name="info"/>
                        </div>
                        <button disabled={dis}>{statement}</button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}
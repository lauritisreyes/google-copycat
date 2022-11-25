import { Description, Title } from '../Common/Common'
import './../Common/Common.scss'
import './Info.scss'


export const Info = () => {
    return (
        <section className="info">
            <div className="container padding">
                <div className="info__secure">
                    <img className='info__img' src="/assets/security.png" alt="Security"/>
                </div>
                <Title>Google Assistant is built to keep your information private, safe and secure.</Title>
                <Description>When you use Google Assistant, you trust us with your data and it's our responsibility to protect and respect it. Privacy is personal. That’s why we build simple privacy controls to help you choose what’s right for you. Explore this page to learn more about how Google Assistant works, your built-in privacy controls, answers to common questions, and more.</Description>
                <span className="link info__link">
                    <span className="link__text">Learn more</span>
                    <Arrow/>
                </span>
            </div>
        </section>
    )
}

const Arrow = () => {
    return(
        <div className="link__arrow
        ">
            <svg width="24" height="24" className="info__arrow" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path d="m9 1c-4.41837584 0-8 3.58162416-8 8 0 4.4183758 3.58162416 8.0003027 8 8.0003027 4.4183758 0 8-3.5819269 8-8.0003027 0-4.41837584-3.5816242-8-8-8zm0 13-.88375-.88375 3.49125-3.49125h-7.6075v-1.25h7.6075l-3.49125-3.49125.88375-.88375 5 5z" transform="matrix(.70710678 -.70710678 .70710678 .70710678 -4.728029 8.000044)">
                </path>
            </svg>

        </div>    
    )
}
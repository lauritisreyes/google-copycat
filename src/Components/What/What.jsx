import { Description, Title } from '../Common/Common'
import './What.scss'

export const What = () => {

    const Cards = [
        { id:0, image: '/assets/phone.png', title:'On your phone'},
        { id:1, image:'/assets/speaker.png', title:'On your spart speaker'},
        { id:2, image:'/assets/display.png', title:'On your smart display'},
        { id:3, image:'/assets/car.png', title:'In your car'},
        { id:4, image:'/assets/tv.png', title:'On your TV'},
        { id:5, image:'/assets/laptop.png', title:'On your laptop'},
        { id:6, image:'/assets/watch.png', title:'On your Watch'},
        { id:7, image:'/assets/more.png', title:'More devices'}
    ]



    return (
        <section className="what padding">
            <div className="container what__container">
                <Title>Discover what Google Assistant is</Title>
                
                <Description><span className="link">Learn more </span>about how you can get help from your Google Assistant.</Description>
            </div>
            <div className="container what__container contrainer__medium">
                <div className="what__grid">
                    { Cards.map ( ( eachCard ) => 
                        <WhatCard key={ eachCard.id } {...eachCard}/>
                    )}
                </div>
            </div>
        </section>   
    )
}




const WhatCard = ( { image, title }) => {
    return (
        <a href="#" className="what__card">
            <div className="what__icon">
                <img className='what__img' src={image} alt="" />
            </div>
            <span className="item__link">{title}</span>
        </a>
    )
}
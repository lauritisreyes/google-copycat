import { Comment, Description, Title } from '../Common/Common'
import './Partners.scss'
import './../Common/Common.scss'


export const Partners = () => {

    const Cards = [
        { id: 0, image:'/assets/logo_etsy.jpeg', title:'Etsy', description:`“... find candles on Etsy”
        `},
        { id: 1, image:'/assets/logo_nike.jpeg', title:'Nike Run Club', description:`“... start my run with Nike Run Club”`},
        { id: 2, image:'/assets/logo_spotify.png', title:'Spotify', description:`“... open Spotify”`},
        { id: 3, image:'assets/logo_postmates.jpeg', title:'Postmates', description:`“... order a smoothie on Postmates”`},
        { id: 4, image:'assets/logo_fitness.jpeg', title:'MyFitnessPal', description:`“... log a berry smoothie on MyFitnessPal”`},
        { id: 5, image:'assets/logo_mint.jpeg', title:'Mint', description:`“... check my accounts on Mint”`},
        { id: 6, image:'assets/logo_discord.jpeg', title:'Discord', description:`“... send a message to Rachel on Discord”`},
        { id: 7, image:'assets/logo_walmart.jpeg', title:'Walmart', description:`“... check in to Walmart”`},
        { id: 8, image:'assets/logo_twitter.jpeg', title:'Twitter', description:`“... check news on Twitter”`},
        { id: 9, image:'assets/logo_snap.jpeg', title:'Snap', description:`“... send a snap with cartoon lens on Snapchat”`}      
    ]

    return (
        <section className="partners padding">
            <div className="container container__extra partners__container">
                <Title>Featured Partners</Title>
                <Description>Google Assistant works with your favorite mobile apps on all Android phones, with more partners on the way. Try it out for yourself.</Description>
                <Comment>Just say, “Hey Google...”</Comment>
            </div>
            <div className="container partners__container container__extra">
                <div className="partners__grid">
                    
                    { Cards.map ( ( card )=> 
                        <PartnersCard key={card.id} {...card} />
                    ) }
                </div>
            </div>  
            
        </section>
        
    )
}


const PartnersCard = ( { title, description, image } ) => {
    return (
        <div className="partners__card">
            <div className="partners__logo">
                <img className="partners__img" src={image} alt="" />
            </div>
            <span className='partners__title item__title'>{title}</span>
            <span className='item__description'>{description}</span>
        </div>
    )
}


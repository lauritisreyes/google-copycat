import './Download.scss';

export const Download = () => {

    const Link = [
        { id:0 , image: '/assets/google-play.png'},
        { id:1 , image: '/assets/app-store.png'}
    ]


    return (
        <div className="download">
            <div className="container container__extra">
                <div className="download__content">
                    { Link.map( ( {id, image}) => 
                        <a className='download__a' key={id} href="">
                            <img className='download__img' src={image} alt="#" />
                        </a>
                    )}
                </div>
            </div>
            
        </div>
    )
}
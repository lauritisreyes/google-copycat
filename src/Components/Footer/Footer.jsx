import './Footer.scss'


export const Footer = () => {

    const navigation = [
        { id:0, name:'Privacy' },
        { id:1, name:'Terms' },
        { id:2, name:'About Google' },
        { id:3, name:'Google Products' },
        { id:4, name:'Developers' },
        { id:5, name:'Businesses' },
        { id:6, name:'Join user studies' },
    ]

    return (
        <footer className='footer'>
            <div className="container container__footer footer__content">
                <span className="footer__comment">Subscriptions may be required to access certain content.</span>
                <div className="footer__main">
                    <div className="footer__logo">
                        <div>
                            <img src="/assets/google_grey.png" alt="" />
                        </div>
                    </div>
                    <ul className="footer__ul">
                        { navigation.map ( ( {id, name} )=> 
                            <li className="footer__li" key={id}>
                                <a className='footer__link' href="">{name}</a>
                            </li>
                        )}
                    </ul>
                    <ul className="footer__ul">
                        <li className="footer__li">
                            <a className='footer__link' href="">Help</a>
                        </li>
                    </ul>
                </div>
            </div>

        </footer>
    )
}
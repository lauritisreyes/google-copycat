import './Header.scss'

export const Header = () => {
    return (
        <header className="header padding padding__extra">
            <div className="container container__extra message__container">
                <div className="header__message">
                    <div className="header__bubbles">
                        <img className='header__img' src="assets/bubbles.png" alt="" />
                    </div>
                    <span className="message__text">Hi, how can I help?</span>
                </div>
                <h1 className="header__title">Meet your Google Assistant</h1>
            </div>
            <div className="container description__container">
                <p className="header__description">Ask it questions. Tell it to do things. It’s your own personal Google, always ready to help.</p>
            </div>
        </header>
    )
}
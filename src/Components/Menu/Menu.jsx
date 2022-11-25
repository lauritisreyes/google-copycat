import './Menu.scss'


export const Menu = () => {

    const nav = [
        { id:0, name: 'Overview'},
        { id: 1 , name: 'Get Google Assistant'},
        { id: 2 , name: 'What can I do'},
        { id: 3 , name: 'News and Resources'}     
    ]
    

    return (
        <div className="menu">
            <div className="menu__content">
                <div className="menu__left">
                    <button className="menu__burger"><Burger/></button>
                    <a href="" className="menu__logo"><Logo/></a>
                    <nav className="menu__nav">
                        <ul className="nav__ul">
                            { nav.map ( ( { id, name } ) =>
                            <li className="nav__li" key={id}><button className='menu__button'>{name}</button></li>
                            )}
                        </ul>
                    </nav>
                </div>
                <button className='menu__button menu__store'>Google Store</button>

            </div>
        </div>
    )
}

const Logo = () => {
    return (
        <img src="/assets/hey-google.png" alt="" />
    )
}

const Burger = () => {
    return (
        <ul className="burger">
            <li className="burger__rectangle"></li>
            <li className="burger__rectangle"></li>
            <li className="burger__rectangle"></li>
        </ul>
    )
}
import './Header.css'; 

export const Header = () => {
    return (
            <header className="header">
                <div className="header__logo">
                    <img src="src/public/logo.png" alt="Logo" />
                </div>

                {/* Menú
            <nav className="header__nav">
                <Link to="/montain">Mountain</Link>
                <Link to="/sea">Sea</Link>
                <Link to="/about">About Us</Link>
            </nav> */}

                {/* Iconos */}
                {/* <div className="header__icons">
                <FaUser />
                <FaShoppingCart /> */}
            {/* </div> */}
        </header >
    );
}
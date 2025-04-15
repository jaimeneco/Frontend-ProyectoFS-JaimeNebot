import './Header.css';

export const Header = () => {
    return (
        <>
            <header class="Header">
                <div class="Header-logo">
                    <img class="Header-logoImage" src="src/assets/logo.png"
                        alt="Logotipo"/>
                </div>
                <nav class="Header-nav">
                    <ul class="Header-navList">
                        <li class="Header-navItem"><a class="Header-navLink" title="Ir a about me" href="./html/about-me.html">MOUNTAIN</a></li>
                        <li class="Header-navItem"><a class="Header-navLink" title="Ir a projects" href="./html/projects.html">SEA</a></li>
                        <li class="Header-navItem"><a class="Header-navLink" title="Ir a contact" href="./html/contact.html">ABOUT US</a></li>
                        <li class="material-symbols-outlined"><a class="Header-navLink" title="Ir a shop" href="./html/shop.html">account_circle</a></li>
                        <li class="material-symbols-outlined"><a class="Header-navLink" title="Ir a shop" href="./html/shop.html">shopping_cart</a></li>

                        
                    </ul>
                </nav>
            </header>
        </>
    );
}
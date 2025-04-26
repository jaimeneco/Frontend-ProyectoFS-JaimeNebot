import './AboutUs.css';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'

export const AboutUs = () => {
    return (
        <>
            <Header />
            <main className='Main-about'>
                <div className='Main-aboutContent'>
                    <p className='Main-aboutText' >ONPIK nace por y para la tabla, ya sea en el mar o en la montaña. <br/> Nuestra marca surge de la pasión por los deportes de acción y <br/> el sentimiento de libertad que estos despiertan.</p>
                    <img className='img' src="public/imgs/img-aboutUs/img-aboutPrincipal.jpg" alt="Imagen ONPIK" />
                </div>
                <div className='Content-historia'>
                    <img className='Content-img' src="public/imgs/img-aboutUs/img-aboutFir.jpg" alt="Imagen historia" />
                    <div className='Content-info'>
                        <p className='Content-title'>Nuestra historia:</p>
                        <p className='Content-text'>Todo empezó con una tabla y un sueño. Un grupo de amigos, locos por el mar y la montaña, que vivían para perseguir olas al amanecer y deslizarse por la nieve al caer la tarde. </p>
                        <p className='Content-text'> Lo nuestro no era solo deporte, era una forma de vida: surf, snow, kite, ski… cada tabla, una excusa para sentirnos libres, creativos y vivos. Nacimos entre acantilados y cumbres, entre salitre y viento helado, con el corazón dividido entre la espuma del mar y el crujir de la nieve bajo nuestros pies.</p>
                        <p className='Content-text'> Queríamos más que adrenalina: queríamos compartir esta pasión, conectar con quienes entienden que no se trata solo de deslizarse, sino de volar por dentro. Así nació nuestra marca. De la energía que te sacude en cada bajada, del vértigo que enamora cuando clavas tu primer truco. </p>
                        <p className='Content-text'>Esto no va de competir. Va de sentir. Va de vivir al máximo, siempre con una tabla bajo los pies y el alma bien arriba. </p>
                        <p className='Content-text'><b>¿NOS ACOMPAÑAS?</b></p>
                    </div>
                </div>

                <div className='Content-valores'>
                    <img className='Content-img' src="public/imgs/img-aboutUs/img-aboutSec.png" alt="Imagen valores" />
                    <div className='Content-info'>
                        <p className='Content-title'>Nuestros valores:</p>
                        <p className='Content-text'><b>-LIBERTAD:</b> Creemos en el poder de deslizarnos para desconectar del ruido y reconectar con lo esencial. Ya sea surfeando una ola o trazando líneas sobre nieve virgen, cada movimiento es una declaración de libertad. La tabla es nuestra forma de volar, de expresarnos sin límites, de dejar que el cuerpo hable cuando sobran las palabras.</p>
                        <p className='Content-text'><b>-PASIÓN QUE NOS MUEVE:</b> Nuestra energía nace de la pasión por lo que hacemos. No solo alquilamos deporte, compartimos un estilo de vida cargado de emoción, superación y adrenalina. La misma pasión que te empuja a madrugar por olas o a subir la montaña cargando tu equipo es la que ponemos en cada decisión y en cada detalle.</p>
                        <p className='Content-text'><b>-MOVIMIENTO Y CREATIVIDAD SIN LÍMITES:</b> Queremos ser tu lugar de referencia que vibra al ritmo del viento, las olas y la nieve. No importa de dónde vengas ni tu nivel: si amas lo que haces, ya eres parte de esto. Creemos en la fuerza de la conexión, en compartir aventuras, progresos, caídas y risas. Porque este viaje se disfruta más cuando creas en comunidad.

</p>
                    </div>
                </div>

                <div className='Logos'>
                    <p className='Logos-text'>Entidades colaboradoras:</p>
                    <img className='Logos-img' src="public/imgs/img-aboutUs/img-logos.png" alt="Empresas colaboradoras" />
                </div>
            </main >

            <Footer />
        </>
    );
}
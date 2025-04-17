import './AboutUs.css';
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'

export const AboutUs = () => {
    return (
        <>
            <Header />
            <main>
                <div className='Main-content'>
                    <img src="https://dummyjson.com/image/600x300/008080/ffffff?text=Snow" alt="Imagen genérica" />
                    <button>Call to action</button>
                </div>
                <div className='Content-historia'>
                    {/* <img className='Content-img' src="" alt="" /> */}
                    <p className='Content-title'>Historia de ONPIK</p>
                    <p className='Content-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam distinctio sequi ullam exercitationem commodi rem amet fugit tempore ducimus ratione, alias optio nesciunt voluptates eaque autem quasi deserunt, veritatis quaerat?
                    Quaerat voluptate numquam quasi earum laborum dicta molestiae officiis autem, odit, aut neque eos adipisci magni blanditiis minima accusantium nobis corrupti sapiente iste, commodi vero cumque. Pariatur dolorum dicta iusto.
                    Iusto ab enim aperiam minus dicta nihil ipsam exercitationem maxime culpa repellendus magnam dolores recusandae commodi inventore ullam, voluptates asperiores veritatis soluta sit fugit nam? Libero incidunt voluptas adipisci harum!
                    Eius nihil tempora expedita iure enim qui rerum corporis impedit voluptatibus maiores, doloremque, ducimus optio quae facilis. Veniam est beatae ipsum nemo tempora, ipsa, cumque ullam cum necessitatibus reiciendis omnis.
                    Voluptates quia obcaecati odit ea numquam sint perferendis, in praesentium, blanditiis nam, tempore ut architecto earum fuga possimus iusto corrupti vero quas mollitia. Suscipit tempora, dolorum dicta quas quod expedita.</p>
                </div>

                <div className='Content-valores'>
                    {/* <img className='Content-img' src="" alt="" /> */}
                    <p className='Content-title'>Valores de ONPIK</p>
                    <p className='Content-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam distinctio sequi ullam exercitationem commodi rem amet fugit tempore ducimus ratione, alias optio nesciunt voluptates eaque autem quasi deserunt, veritatis quaerat?
                    Quaerat voluptate numquam quasi earum laborum dicta molestiae officiis autem, odit, aut neque eos adipisci magni blanditiis minima accusantium nobis corrupti sapiente iste, commodi vero cumque. Pariatur dolorum dicta iusto.
                    Iusto ab enim aperiam minus dicta nihil ipsam exercitationem maxime culpa repellendus magnam dolores recusandae commodi inventore ullam, voluptates asperiores veritatis soluta sit fugit nam? Libero incidunt voluptas adipisci harum!
                    Eius nihil tempora expedita iure enim qui rerum corporis impedit voluptatibus maiores, doloremque, ducimus optio quae facilis. Veniam est beatae ipsum nemo tempora, ipsa, cumque ullam cum necessitatibus reiciendis omnis.
                    Voluptates quia obcaecati odit ea numquam sint perferendis, in praesentium, blanditiis nam, tempore ut architecto earum fuga possimus iusto corrupti vero quas mollitia. Suscipit tempora, dolorum dicta quas quod expedita.</p>
                </div>

                <div className='Content-mision'>
                    {/* <img className='Content-img' src="" alt="" /> */}
                    <p className='Content-title'>Misión de ONPIK</p>
                    <p className='Content-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam distinctio sequi ullam exercitationem commodi rem amet fugit tempore ducimus ratione, alias optio nesciunt voluptates eaque autem quasi deserunt, veritatis quaerat?
                    Quaerat voluptate numquam quasi earum laborum dicta molestiae officiis autem, odit, aut neque eos adipisci magni blanditiis minima accusantium nobis corrupti sapiente iste, commodi vero cumque. Pariatur dolorum dicta iusto.
                    Iusto ab enim aperiam minus dicta nihil ipsam exercitationem maxime culpa repellendus magnam dolores recusandae commodi inventore ullam, voluptates asperiores veritatis soluta sit fugit nam? Libero incidunt voluptas adipisci harum!
                    Eius nihil tempora expedita iure enim qui rerum corporis impedit voluptatibus maiores, doloremque, ducimus optio quae facilis. Veniam est beatae ipsum nemo tempora, ipsa, cumque ullam cum necessitatibus reiciendis omnis.
                    Voluptates quia obcaecati odit ea numquam sint perferendis, in praesentium, blanditiis nam, tempore ut architecto earum fuga possimus iusto corrupti vero quas mollitia. Suscipit tempora, dolorum dicta quas quod expedita.</p>
                </div>

                <div className='Logos'>
                    <p>Entidades colaboradoras:</p>
                    {/* <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" /> */}
                </div>
            </main>
            
            <Footer />
        </>
    );
}
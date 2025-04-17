import './Grid.css';

const products = [
    {
        id: 1,
        title: "Cámara DSLR",
        available: true,
        price: "15€/día",
        img: "https://via.placeholder.com/300x200?text=Cámara",
    },
    {
        id: 2,
        title: "Proyector HD",
        available: false,
        price: "20€/día",
        img: "https://via.placeholder.com/300x200?text=Proyector",
    },
    {
        id: 3,
        title: "Bicicleta Eléctrica",
        available: true,
        price: "25€/día",
        img: "https://via.placeholder.com/300x200?text=Bici+eléctrica",
    },
    {
        id: 4,
        title: "Altavoz Bluetooth",
        available: true,
        price: "10€/día",
        img: "https://via.placeholder.com/300x200?text=Altavoz",
    }
];

export const Grid = () => {
    return (
        <div className="grid-container">
            {products.map((product) => (
                <div key={product.id} className="card">
                    <img src={product.img} alt={product.title} className="card-img" />
                    <h3 className="card-title">{product.title}</h3>
                    <p className="card-availability">
                        Disponibilidad:{" "}
                        <span className={product.available ? "available" : "not-available"}>
                            {product.available ? "Disponible" : "No disponible"}
                        </span>
                    </p>
                    <p className="card-price">{product.price}</p>
                </div>
            ))}
        </div>
    );
};
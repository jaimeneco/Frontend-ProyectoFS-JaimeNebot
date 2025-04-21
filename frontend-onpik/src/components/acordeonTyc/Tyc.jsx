const secciones = [
    {
        titulo: "1. Sobre ONPIK",
        contenido:
            "ONPIK es una plataforma que facilita el alquiler de material deportivo de temporada (verano e invierno) entre particulares. Actuamos exclusivamente como intermediarios entre las personas que desean alquilar (propietarios) y quienes desean utilizar ese material (arrendatarios).",
    },
    {
        titulo: "2. Registro y Cuenta de Usuario",
        contenido:
            <p>Para utilizar los servicios de ONPIK, es necesario crear una cuenta personal. Al registrarte, te comprometes a:<br/>-Proporcionar información veraz y actualizada.<br/>-Mantener la confidencialidad de tus credenciales de acceso.<br/>-Ser mayor de edad o tener al menos 18 años.<br/>ONPIK se reserva el derecho de suspender o eliminar cuentas que incumplan estos términos.</p>
    },
    {
        titulo: "3. Condiciones del Alquiler",
        contenido:
            <p>-Todo el material publicado debe estar en condiciones óptimas para su uso.<br/>-Los precios, fechas y condiciones del alquiler son establecidos por el propietario.<br/>-El arrendatario es responsable de devolver el material en el estado en que lo recibió, respetando el periodo acordado.</p>
    },
    {
        titulo: "4. Seguro y Cobertura de Daños",
        contenido:
            <p>ONPIK incluye un seguro que cubre daños accidentales durante el periodo de alquiler, tanto al material como, en ciertos casos, al usuario. No cubre:<br/>-Uso negligente o intencionado del material.<br/>-Pérdidas por robo sin denuncia.<br/>-Daños fuera del periodo acordado.\nLos detalles completos de la póliza se encuentran disponibles en la sección 'Cobertura de seguro'.</p>
    },
    {
        titulo: "5. Responsabilidad",
        contenido:
            <p>ONPIK no es propietario del material publicado ni interviene en la transacción más allá de facilitar el contacto y gestión del alquiler. No nos hacemos responsables por:<br/>-Disputas entre usuarios.<br/>-Daños no cubiertos por el seguro.<br/>-Retrasos o incumplimientos en la entrega o devolución del material.</p>
    },
    {
        titulo: "6. Pagos y Comisiones",
        contenido:
            "Los pagos se gestionan a través de nuestra plataforma segura. ONPIK retiene una comisión por cada operación realizada, que se detallará antes de confirmar el alquiler.",
    },
    {
        titulo: "7. Cancelaciones y Reembolsos",
        contenido:
            "Ambas partes pueden cancelar una reserva según nuestra política de cancelación. En caso de cancelación, los reembolsos se gestionarán conforme a los plazos y condiciones publicados en nuestra web.",
    },
    {
        titulo: "8. Conducta del Usuario",
        contenido:
            <p>Los usuarios se comprometen a: <br/>-Respetar a otros miembros de la comunidad.<br/>-Usar el material de forma segura y responsable.<br/>-No publicar contenido ofensivo, ilegal o engañoso.<br/>-ONPIK se reserva el derecho a suspender usuarios que incumplan estas normas.</p>
    },
    {
        titulo: "9. Modificaciones",
        contenido:
            "ONPIK puede actualizar estos Términos y Condiciones en cualquier momento. Te notificaremos de cualquier cambio significativo. El uso continuado de la plataforma implica la aceptación de las nuevas condiciones.",
    },
    {
        titulo: "10. Contacto",
        contenido:
            "Para cualquier duda o incidencia, puedes contactar con nosotros a través del correo: info@onpik.com",
    },
];

import { useState } from "react";
import './Tyc.css';
export default function TerminosCondiciones() {
    const [activo, setActivo] = useState(null);

    const toggle = (index) => {
        setActivo(activo === index ? null : index);
    };

    return (
        <>

            <div className="Contenedor-acordeon">
                <h2 className="Contenedor-titulo">Términos y Condiciones de Uso:</h2>
                {secciones.map((seccion, index) => (
                    <div key={index} className="Contenedor-seccion">
                        <button
                            onClick={() => toggle(index)}
                            className="Contenedor-btn"
                        >
                            {seccion.titulo}
                        </button>
                        <div className={`Contenedor-content ${activo === index ? 'activo' : ''}`}>
                            {seccion.contenido}
                        </div>
                    </div>
                ))}
            </div>
            </>
    )
}
import { useState } from "react";
import './Ppc.css';

const seccionesPoli = [
    {
        titulo: "1. ¿Quién es el responsable del tratamiento de tus datos?",
        contenido: <p>ONPIK, S.L. Valencia. Correo electrónico: info@onpik.com</p>
    },
    {
        titulo: "2. ¿Qué datos personales recopilamos?",
        contenido: <p>Cuando te registras o utilizas nuestros servicios, podemos recopilar los siguientes datos:<br/>-Datos identificativos: nombre, apellidos, dirección de correo electrónico.<br/>-Datos de contacto: teléfono, dirección postal.<br/>-Información de uso: actividad dentro de la plataforma, historial de alquileres.<br/>-Datos de pago: gestionados de forma segura por pasarelas de pago externas.</p>
    },
    {
        titulo: "3. ¿Con qué finalidad tratamos tus datos?",
        contenido: <p>Usamos tus datos personales para:<br/>-Gestionar tu cuenta de usuario y tu actividad en la plataforma.-Facilitar la conexión entre propietarios y arrendatarios.<br/>-Gestionar reservas, pagos y devoluciones.<br/>-Tramitar incidencias y coberturas del seguro incluido.<br/>-Enviarte notificaciones relevantes sobre tu actividad.<br/>-Mejorar nuestros servicios y la experiencia de usuario.<br/>-Enviarte comunicaciones comerciales si nos das tu consentimiento.</p>
    },
    {
        titulo: "4. ¿Cuál es la base legal para el tratamiento de tus datos?",
        contenido: <p>-Ejecución de un contrato: para gestionar las reservas y servicios ofrecidos.<br/>-Consentimiento: para el envío de comunicaciones promocionales o uso de cookies.<br/>-Interés legítimo: para mejorar nuestros servicios o prevenir fraudes.<br/>-Obligación legal: para cumplir con normativas fiscales, contables o de protección de datos.</p>,
    },
    {
        titulo: "5. ¿Con quién compartimos tus datos?",
        contenido: <p>Solo compartimos datos con terceros cuando es necesario para ofrecer el servicio: <br/>-Proveedores de pago y plataformas de gestión de cobros.<br/>-Empresas aseguradoras en caso de siniestros.<br/>-Proveedores tecnológicos que dan soporte a nuestra plataforma.<br/>-Autoridades legales, si así lo exige la ley.

ONPIK no vende ni cede tus datos a terceros para fines comerciales.</p>,
    },
    {
        titulo: "6. ¿Cuánto tiempo conservamos tus datos?",
        contenido: `Tus datos se conservarán mientras tengas una cuenta activa o mientras sean necesarios para cumplir con nuestras obligaciones legales. Puedes solicitar la eliminación de tu cuenta en cualquier momento.`,
    },
    {
        titulo: "7. ¿Cuáles son tus derechos?",
        contenido: <p>Tienes derecho a:<br/>-Acceder a tus datos personales.<br/>-Solicitar su rectificación o supresión.<br/>-Limitar u oponerte a su tratamiento.<br/>-Portar tus datos a otro proveedor.<br/>-Retirar tu consentimiento en cualquier momento.<br/>Para ejercer tus derechos, puedes escribirnos a privacidad@onpik.com o al correo general de contacto.</p>
    },
    {
        titulo: "8. Seguridad de los datos",
        contenido: `ONPIK adopta medidas técnicas y organizativas para proteger tus datos frente a accesos no autorizados, pérdida, alteración o divulgación.`,
    },
    {
        titulo: "9. Uso de Cookies",
        contenido: <p>ONPIK utiliza cookies propias y de terceros para:<br/>-Mejorar tu experiencia de navegación.<br/>-Recordar tus preferencias.<br/>-Analizar el uso de la plataforma.<br/>-Mostrarte contenido personalizado y relevante.<br/>Puedes gestionar tus preferencias de cookies desde el banner inicial o a través de la configuración de tu navegador.</p>,
    },
    {
        titulo: "10. Cambios en esta política",
        contenido: `ONPIK se reserva el derecho de modificar esta política para adaptarla a cambios legislativos o mejoras en nuestros servicios. Te notificaremos cualquier cambio relevante.`,
    },
    {
        titulo: "11. Contacto",
        contenido: `Si tienes dudas sobre esta política o sobre cómo tratamos tus datos, puedes contactar con nuestro equipo de privacidad en: privacidad@onpik.com`,
    },
];

export default function PoliticaPrivacidad() {
    const [activo, setActivo] = useState(null);

    const toggle = (index) => {
        setActivo(activo === index ? null : index);
    };

    return (
        <>
            <div className="Contenedor-acordeon">
                <h2 className="Contenedor-titulo">Política de Privacidad y Cookies:</h2>
                {seccionesPoli.map((seccion, index) => (
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
    );
}

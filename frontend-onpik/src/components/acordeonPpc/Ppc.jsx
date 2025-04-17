import { useState } from "react";

const seccionesPoli = [
    {
        titulo: "1. ¿Quién es el responsable del tratamiento de tus datos?",
        contenido: `ONPIK, S.L.
[Dirección de la empresa]
Correo electrónico: info@onpik.com`,
    },
    {
        titulo: "2. ¿Qué datos personales recopilamos?",
        contenido: `Cuando te registras o utilizas nuestros servicios, podemos recopilar los siguientes datos:

- Datos identificativos: nombre, apellidos, dirección de correo electrónico.
- Datos de contacto: teléfono, dirección postal.
- Información de uso: actividad dentro de la plataforma, historial de alquileres.
- Datos de pago: gestionados de forma segura por pasarelas de pago externas.
- Ubicación aproximada (si se habilita) para facilitar búsquedas geolocalizadas.`,
    },
    {
        titulo: "3. ¿Con qué finalidad tratamos tus datos?",
        contenido: `Usamos tus datos personales para:

- Gestionar tu cuenta de usuario y tu actividad en la plataforma.
- Facilitar la conexión entre propietarios y arrendatarios.
- Gestionar reservas, pagos y devoluciones.
- Tramitar incidencias y coberturas del seguro incluido.
- Enviarte notificaciones relevantes sobre tu actividad.
- Mejorar nuestros servicios y la experiencia de usuario.
- Enviarte comunicaciones comerciales si nos das tu consentimiento.`,
    },
    {
        titulo: "4. ¿Cuál es la base legal para el tratamiento de tus datos?",
        contenido: `- Ejecución de un contrato: para gestionar las reservas y servicios ofrecidos.
- Consentimiento: para el envío de comunicaciones promocionales o uso de cookies.
- Interés legítimo: para mejorar nuestros servicios o prevenir fraudes.
- Obligación legal: para cumplir con normativas fiscales, contables o de protección de datos.`,
    },
    {
        titulo: "5. ¿Con quién compartimos tus datos?",
        contenido: `Solo compartimos datos con terceros cuando es necesario para ofrecer el servicio:

- Proveedores de pago y plataformas de gestión de cobros.
- Empresas aseguradoras en caso de siniestros.
- Proveedores tecnológicos que dan soporte a nuestra plataforma.
- Autoridades legales, si así lo exige la ley.

ONPIK no vende ni cede tus datos a terceros para fines comerciales.`,
    },
    {
        titulo: "6. ¿Cuánto tiempo conservamos tus datos?",
        contenido: `Tus datos se conservarán mientras tengas una cuenta activa o mientras sean necesarios para cumplir con nuestras obligaciones legales. Puedes solicitar la eliminación de tu cuenta en cualquier momento.`,
    },
    {
        titulo: "7. ¿Cuáles son tus derechos?",
        contenido: `Tienes derecho a:

- Acceder a tus datos personales.
- Solicitar su rectificación o supresión.
- Limitar u oponerte a su tratamiento.
- Portar tus datos a otro proveedor.
- Retirar tu consentimiento en cualquier momento.

Para ejercer tus derechos, puedes escribirnos a privacidad@onpik.com o al correo general de contacto.`,
    },
    {
        titulo: "8. Seguridad de los datos",
        contenido: `ONPIK adopta medidas técnicas y organizativas para proteger tus datos frente a accesos no autorizados, pérdida, alteración o divulgación.`,
    },
    {
        titulo: "9. Uso de Cookies",
        contenido: `ONPIK utiliza cookies propias y de terceros para:

- Mejorar tu experiencia de navegación.
- Recordar tus preferencias.
- Analizar el uso de la plataforma.
- Mostrarte contenido personalizado y relevante.

Puedes gestionar tus preferencias de cookies desde el banner inicial o a través de la configuración de tu navegador.

Para más información, consulta nuestra Política de Cookies detallada.`,
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
        <div className="max-w-3xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Política de Privacidad y cookies</h2>
            {seccionesPoli.map((seccion, index) => (
                <div key={index} className="mb-4 border rounded overflow-hidden">
                    <button
                        onClick={() => toggle(index)}
                        className="w-full text-left p-4 font-semibold bg-gray-100 hover:bg-gray-200"
                    >
                        {seccion.titulo}
                    </button>
                    {activo === index && (
                        <div className="p-4 bg-white whitespace-pre-line">
                            {seccion.contenido}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

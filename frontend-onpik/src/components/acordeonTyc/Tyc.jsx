const secciones = [
    {
        titulo: "1. Sobre ONPIK",
        contenido:
            "ONPIK es una plataforma que facilita el alquiler de material deportivo de temporada (verano e invierno) entre particulares. Actuamos exclusivamente como intermediarios entre las personas que desean alquilar (propietarios) y quienes desean utilizar ese material (arrendatarios).",
    },
    {
        titulo: "2. Registro y Cuenta de Usuario",
        contenido:
            "Para utilizar los servicios de ONPIK, es necesario crear una cuenta personal. Al registrarte, te comprometes a:\n- Proporcionar información veraz y actualizada.\n- Mantener la confidencialidad de tus credenciales de acceso.\n- Ser mayor de edad o tener al menos 18 años.\nONPIK se reserva el derecho de suspender o eliminar cuentas que incumplan estos términos.",
    },
    {
        titulo: "3. Condiciones del Alquiler",
        contenido:
            "- Todo el material publicado debe estar en condiciones óptimas para su uso.\n- Los precios, fechas y condiciones del alquiler son establecidos por el propietario.\n- El arrendatario es responsable de devolver el material en el estado en que lo recibió, respetando el periodo acordado.",
    },
    {
        titulo: "4. Seguro y Cobertura de Daños",
        contenido:
            "ONPIK incluye un seguro que cubre daños accidentales durante el periodo de alquiler, tanto al material como, en ciertos casos, al usuario. No cubre:\n- Uso negligente o intencionado del material.\n- Pérdidas por robo sin denuncia.\n- Daños fuera del periodo acordado.\nLos detalles completos de la póliza se encuentran disponibles en la sección 'Cobertura de seguro'.",
    },
    {
        titulo: "5. Responsabilidad",
        contenido:
            "ONPIK no es propietario del material publicado ni interviene en la transacción más allá de facilitar el contacto y gestión del alquiler. No nos hacemos responsables por:\n- Disputas entre usuarios.\n- Daños no cubiertos por el seguro.\n- Retrasos o incumplimientos en la entrega o devolución del material.",
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
            "Los usuarios se comprometen a:\n- Respetar a otros miembros de la comunidad.\n- Usar el material de forma segura y responsable.\n- No publicar contenido ofensivo, ilegal o engañoso.\nONPIK se reserva el derecho a suspender usuarios que incumplan estas normas.",
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

export default function TerminosCondiciones() {
    const [activo, setActivo] = useState(null);

    const toggle = (index) => {
        setActivo(activo === index ? null : index);
    };

    return (
        <>
            <div className="max-w-3xl mx-auto p-4">
                <h2 className="text-2xl font-bold mb-6 text-center">Términos y Condiciones de Uso</h2>
                {secciones.map((seccion, index) => (
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
        </>
    );
}
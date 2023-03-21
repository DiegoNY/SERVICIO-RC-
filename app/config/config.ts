require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    url: process.env.SERVICE || '',
    ruc: "123456789123",
    idSucursal: 1,
    procesos: process.env.PROCESOS || [
        {
            cabecera: '../../SERVICIO_DBF/DBF_DIEGO/documentos/cabecera.dbf',
            detalle: '../../SERVICIO_DBF/DBF_DIEGO/documentos/DETALLE.dbf',
            credito: '../../SERVICIO_DBF/DBF_DIEGO/documentos/detcredito.dbf',
            rta_s: './app/mock/sunat_answer.dbf',
        },
        {
            cabecera: 'C:/Users/Desarrollo05/Desktop/SERVICIO_DBF/documentos2/cabecera.dbf',
            detalle: 'C:/Users/Desarrollo05/Desktop/SERVICIO_DBF/documentos2/DETALLE.dbf',
            credito: 'C:/Users/Desarrollo05/Desktop/SERVICIO_DBF/documentos2/detcredito.dbf',
            rta_s: './app/mock/sunat_answer2.dbf',
        },
        {
            cabecera: 'C:/Users/Desarrollo05/Desktop/SERVICIO_DBF/documentos2/cabecera.dbf',
            detalle: 'C:/Users/Desarrollo05/Desktop/SERVICIO_DBF/documentos2/DETALLE.dbf',
            credito: 'C:/Users/Desarrollo05/Desktop/SERVICIO_DBF/documentos2/detcredito.dbf',
            rta_s: './app/mock/sunat_answer3.dbf',
        },
    ]
}



export { config }
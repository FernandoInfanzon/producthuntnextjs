export default function validarCrearCuenta(valores) {

    let errores = {};

    // Validar el nombre del usuario
    if(!valores.nombre) {
        errores.nombre = "El Nombre es obligatorio";
    }

    // Validar empresa
    if(!valores.empresa) {
        errores.empresa = "Nombre de empresa es obligatorio"
    }
   
    // Validar URL
    if(!valores.url) {
        errores.url = "La URL es obligatoria"
    } else if( !/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url) ){
        errores.url = "URL mal formateada o no válida"
    }

    // validar descripciòn
    if(!valores.descripcion) {
        errores.descripcion = "Agrega una descripción de tu producto"
    }
   
   

    return errores;
}
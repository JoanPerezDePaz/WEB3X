function iniciarApp(){

// Llamar a la funcion obtenerVideos
obtenerVideos();
// Obtener videos
function obtenerVideos(){
    const url = 'https://www.eporner.com/api/v2/video/search/';
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => console.log(resultado.videos))
}

// Mostrar videos
function mostrarVideos(videos = []){
    videos.forEach(video =>{
        const {id,title,keywords,views,rate,url,added,length_sec,length_min,embed} = video;
    })
}



}
document.addEventListener('DOMContentLoaded',iniciarApp);
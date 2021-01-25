
  let url = "http://gsx2json.com/api?id=1kklzXhsIohLWQsDsvmbrPIJChnTEZ4Y6jnN5-F0mrGs&columns=false"
  // fetch(url).then( procesarDatos )

  getArticulos(url);

  async function getArticulos(url){
    try{
      const data = await fetch(url)
      const dataJSON = await procesarDatos( data )
      await crearCatalogo( dataJSON )
    }
    catch(error){
      console.error(error.message);
    }  
  }


  function procesarDatos( datos ){
    // datos.json().then( crearCatalogo )
    return datos.json()
  }

  function crearCatalogo( articulos ){
    articulos.rows.forEach( crearArticulo )
  }

  function crearArticulo( articulo ){
    let ficha = document.querySelector(".articulo").cloneNode(true)
    
    ficha.querySelector(".titulo").innerText = articulo.titulo
    ficha.querySelector(".talle").innerText = articulo.talle
    ficha.querySelector(".imagen").src = articulo.imagen
    // ficha.querySelector(".reproducir").onclick = verPelicula.bind(pelicula)
    
    ficha.classList.remove("hide")
    
    document.querySelector("#articulos").appendChild( ficha )
  }

  // function verPelicula(){
  //   document.querySelector("#video").src = this.trailer
  //   document.querySelector("#poster").src = this.poster
  //   document.querySelector("#titulo").innerText = this.titulo
  //   document.querySelector("#estreno").innerText = `(${this.estreno})`
  //   document.querySelector("#descripcion").innerText = this.descripcion

  //   //Mostrar container reproductor
  //   mostrarReproductor()
  // }

  // function mostrarReproductor(){
  //   document.getElementById('reproductor').classList.remove('hide')
  // }

  // Funcionalidad boton arriba
  document.querySelector('.btn-gotop').onclick = ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Asignacion de clase al botón gotop al scrollear
  window.onscroll = ()=>{
    var scroll = document.documentElement.scrollTop
    var btn = document.querySelector('.btn-gotop')
    scroll > 100 ? btn.classList.add('show') : btn.classList.remove('show')
  }
window.addEventListener('load', () => {
  let lon, lat, keyApi
  let iconoAnimado = document.getElementById('icono-animado')

  if (navigator.geolocation) {
    /* saco las coordenadas */
    navigator.geolocation.getCurrentPosition(posicion => {


      lon = posicion.coords.longitude
      lat = posicion.coords.latitude
      keyApi = ''//keyApi
      console.log(lon, lat)
      /*   ubicación actual    */
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keyApi}`

      const api = new XMLHttpRequest();
      api.open('GET', url, true);
      api.send();
      api.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
      
          let datos = JSON.parse(this.responseText);
          let temperatura = Math.round(datos.main.temp) / 10 + "°C"
          let descripcionTemperatura = datos.weather[0].description
          let velocidadViento = datos.wind.speed + "m/s"
          let tipo = datos.weather[0].main
          let ubicacionClima = datos.name
      
          //funcion Dia detro del rango toma valor 
          const esDiaBandera=()=>{
            let diaActual=new Date()
            let horaActual= diaActual.getHours()
            if(horaActual>7 && horaActual<20){
              return true
            }else{
              return false
            }
            
          }
          switch (tipo) {

            case 'Rain':
              iconoAnimado.src = 'animated/thunder.svg'
              console.log('TORMENTA');
              break;
            case 'Drizzle':
              iconoAnimado.src = 'animated/rainy-2.svg'
              console.log('LLOVIZNA');
              break;
            case 'Thunderstorm':
              iconoAnimado.src = 'animated/rainy-7.svg'
              console.log('LLUVIA');
              break;
            case 'Snow':
              iconoAnimado.src = 'animated/snowy-6.svg'
              console.log('NIEVE');
              break;
            case 'Clear':
              if(esDiaBandera()){
                iconoAnimado.src = 'animated/day.svg'
                console.log('LIMPIO','DIA');
              }else{
                iconoAnimado.src = 'animated/night.svg'
                console.log('LIMPIO',);
              }
              
              break;
            case 'Atmosphere':
              iconoAnimado.src = 'animated/weather.svg'
              console.log('ATMOSFERA');
              break;
            case 'Clouds':
              if(esDiaBandera()){
              iconoAnimado.src = 'animated/cloudy-day-1.svg'
              console.log('NUBES','DIA');
              }else{
                iconoAnimado.src = 'animated/cloudy-night-1.svg'
                console.log('NUBES');
              }
              break;
            default:
              if(esDiaBandera()){
                iconoAnimado.src = 'animated/cloudy-day-1.svg'
                  console.log('por defecto');
                }else{
                  iconoAnimado.src = 'animated/cloudy-night-1.svg'
                  console.log('por defecto');
                }
                break;
              
          }

          document.getElementById('ubicacionClima').innerHTML = ubicacionClima
          document.getElementById('viento-velocidad').innerHTML = velocidadViento
          document.getElementById('temperatura-valor').innerHTML = temperatura
          document.getElementById('temperatura-descripcion').innerHTML = descripcionTemperatura.toUpperCase()
        
        }/* else{
          validacion no se coloco porque no se coloca la key de api privada
          alert("ERROR de Conexion API")
        } */
      }
    })

  }
}
)
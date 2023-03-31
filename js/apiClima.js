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
          let tipo = datos.weather[0].main
          let velocidadViento = datos.wind.speed + "m/s"
          let ubicacionClima = datos.name
      
          
          const esDia=()=>{
            let date=new Date()
            let hora= date.getHours()
            if(hora>6 && hora<20){
              return true
            }else{
              return false
            }
            
          }
          switch (tipo) {

            case 'Thunderstorm':
              iconoAnimado.src = 'animated/thunder.svg'
              console.log('TORMENTA');
              break;
            case 'Drizzle':
              iconoAnimado.src = 'animated/rainy-2.svg'
              console.log('LLOVIZNA');
              break;
            case 'Rain':
              iconoAnimado.src = 'animated/rainy-7.svg'
              console.log('LLUVIA');
              break;
            case 'Snow':
              iconoAnimado.src = 'animated/snowy-6.svg'
              console.log('NIEVE');
              break;
            case 'Clear':
              if(esDia()){
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
              if(esDia()){
              iconoAnimado.src = 'animated/cloudy-day-1.svg'
              console.log('NUBES','DIA');
              }else{
                iconoAnimado.src = 'animated/cloudy-nigth-1.svg'
                console.log('NUBES');
              }
              break;
            default:
              if(esDia()){
                iconoAnimado.src = 'animated/cloudy-day-1.svg'
                  console.log('por defecto');
                }else{
                  iconoAnimado.src = 'animated/cloudy-nigth-1.svg'
                  console.log('por defecto');
                }
                break;
              
          }


          document.getElementById('viento-velocidad').innerHTML = velocidadViento
          document.getElementById('ubicacionClima').innerHTML = ubicacionClima
          document.getElementById('temperatura-valor').innerHTML = temperatura
          document.getElementById('temperatura-descripcion').innerHTML = descripcionTemperatura.toUpperCase()
          // document.getElementById('temperatura-descripcion').innerHTML = tipo.toUpperCase()


        }
      }
    })

  }
}
)
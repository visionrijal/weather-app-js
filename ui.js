// get elements

class UI {
    showWeather(data) {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date();
        var dayName = days[d.getDay()];
        let output = `
       <div class="contain">
       <div class="weather-side">
         <div class="weather-gradient"></div>
         <div class="date-container">
           <h2 class="date-dayname">${dayName}</h2><i class="location-icon" data-feather="map-pin"></i><span class="location">${data.location.name}, ${data.location.country}</span>
         </div>
         <div class="weather-container"><i class="weather-icon" data-feather="sun"></i>
           <h1 class="weather-temp">${data.current.feelslike_c}</h1>
           <h3 class="weather-desc">${data.current.condition.text}</h3>
         </div>
       </div>
       <div class="info-side">
         <div class="today-info-container">
           <div class="today-info">
             <div class="precipitation"> <span class="title">PRECIPITATION</span><span class="value"> ${data.current.precip_mm}</span>
               <div class="clear"></div>
             </div>
             <div class="humidity"> <span class="title">HUMIDITY</span><span class="value">${data.current.humidity} %</span>
               <div class="clear"></div>
             </div>
             <div class="wind"> <span class="title">WIND</span><span class="value">${data.current.wind_kph} km/h</span>
               <div class="clear"></div>
             </div>
           </div>
         </div>
         <div class="location-container">
           <button class="location-button  btn btn-primary "  data-toggle="modal" data-target="#locModal"> <i data-feather="map-pin"></i><span>Change location</span></button>
         </div>
       </div>
     </div>
       `
        insert.innerHTML = output
    }
}
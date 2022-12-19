class Weather{
    
    async getWeather(location){
        let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=fa1c37346844472d84731725221512&q= ${location}`)
        let weatherData = await response.json();
        return weatherData;
    }
}

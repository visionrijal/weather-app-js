let weather = new Weather();
let ui = new UI();
let insert = document.querySelector('.insert')
let search = document.querySelector('.search-btn')




search.addEventListener('click',()=>{
    let value = document.querySelector('.search').value;
    weather.getWeather(value).then((data)=>{
        ui.showWeather(data);
    })
})


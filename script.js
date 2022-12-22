const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd711c9effbmshe0d15d01a9cddd4p141d9ejsn6f78fc2ea8ca',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const myfun = (city) => {

    cityName.innerHTML = city
    // we have to take this as dynamically
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            temp.innerHTML = response.temp
            temp1.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity3.innerHTML=response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML=response.wind_speed
            wind_degrees.innerHTML = response.wind_degree
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset



        })
        .catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {

    myfun(city.value)
    e.preventDefault()
})
// calling it By default
myfun("Delhi")
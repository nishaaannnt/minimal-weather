/* AIR QUALITY
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '38a4ac8814msh0c905639c215d8ep117462jsnb4c050cf93f2',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
*/

//WEATHER
// let 
const getWeather=(city)=>{
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '38a4ac8814msh0c905639c215d8ep117462jsnb4c050cf93f2',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
temp.innerHTML='fetching...'
humidity.innerHTML='fetching...'
windspeed.innerHTML='fetching...'
state.innerHTML='fetching...'

area.innerHTML=''+city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
        // console.log(response);
        temp.innerHTML=response.temp+'&#176; C';
        humidity.innerHTML=response.humidity;
        windspeed.innerHTML=response.wind_speed
        state.innerHTML=response.feels_like
    })
	.catch(err => console.error(err));

}


getWeather('Mumbai');

submit.addEventListener('click',()=>{
    let data=city.value;
    if(data!=null){
        getWeather(data);
    }
})

// About to Main
aboutButt.addEventListener('click',(e)=>{
    document.getElementById('card').classList.toggle('hidden')
    document.getElementById('about').classList.toggle('hidden')
    if(document.getElementById('about').classList.contains('hidden')){
        aboutButt.innerHTML='About'
    }
    else{
        aboutButt.innerHTML='< Back'
    }
})
 /*collects the apikey and apiurl from openweathermap api site for its weather details*/  
    const apiKey ="9370921bbed0ef711307ada09937d838";
    const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");
    
    /*An async function in JavaScript is a function that is designed to work asynchronously, which means it can perform tasks that take some time to complete, like fetching data from an API or reading a file, without blocking the execution of the rest of your code. These functions are used in conjunction with the await keyword to wait for the completion of asynchronous operations.*/
    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      
     /*if an error is encounted, it shouldnt display any city weather detail*/   
     if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none"; 
     }
     /*if no error then wait for the api request, and load any city weather detail to the variable data*/
     else{
        
         let data = await response.json();
 
     /*get all the class element from the html file and load the respective data from the api*/
     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
     document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
     document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
     /*if the weather data from the api is clouds, display the cloud image*/
     if(data.weather[0].main == "Clouds"){
         weatherIcon.src="image/clouds.png";
     }
     /*if the weather data from the api is clear, display the clear image*/
     else if(data.weather[0].main == "Clear"){
         weatherIcon.src="image/clear.png";
     }
     /*if the weather data from the api is rain, display the rain image*/
     else if(data.weather[0].main == "Rain"){
         weatherIcon.src="image/rain.png";
     }
     /*if the weather data from the api is drizzle, display the drizzle image*/
     else if(data.weather[0].main == "Drizzle"){
         weatherIcon.src="image/drizzle.png";
     }
     /*if the weather data from the api is mist, display the mist image*/
     else if(data.weather[0].main == "Mist"){
         weatherIcon.src="image/mist.png";
     }
 /*if there is no error then display the weather data*/
 document.querySelector(".weather").style.display = "block";
 document.querySelector(".error").style.display ="none";
     }
     
 /*if the search button is clicked, then collect the weather info*/
 }
 searchBtn.addEventListener("click", ()=>{
     checkWeather(searchBox.value);
 })
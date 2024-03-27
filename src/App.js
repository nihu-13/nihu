import './App.css';
import rain from './Assets/rain.png'
import clear from './Assets/clear.png'
import cloud from './Assets/cloud.png'
import drizzle from './Assets/drizzle.png'
import snow from './Assets/snow.png'
import { useState } from 'react';
const apikey = '4eb9209bba58327552142e0cf2cd35e2'

function App() {
  const [icon, seticon] = useState(cloud)
  const [errorMessage, setErrorMessage] = useState("");
  const search = async (e) => {
    e.preventDefault();
    let cityName = document.getElementById('city')
    console.log(typeof cityName.value)
    if (cityName.value === "" || cityName.value === undefined) { return; }
    try {
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apikey}&units=imperial`);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'City not found');
      }
      let info = await response.json();
      console.log(info);

      let temperature = document.getElementById('temperature');
      temperature.innerHTML = info.main.temp + " &#8451";
      let humidity = document.getElementById('humidity');
      humidity.innerHTML ='<i class="fas fa-water"></i> '+ info.main.humidity + " &#8451 || ";
      let wind = document.getElementById('wind');
      wind.innerHTML ='<i class="fa-solid fa-wind"></i> '+ info.wind.speed + " &#8451";
      let name = document.getElementById('name');
      name.innerHTML = cityName.value;
      let min = document.getElementById('min');
      min.innerHTML = "Min : " + info.main.temp_min + " &#8451 || ";
      let max = document.getElementById('max');
      max.innerText = "Max : " + info.main.temp_max + " ℃ ";
      if (info.weather.icon === '01d' || info.weather.icon === '01n') {
        seticon(clear)
      }
      else if (info.weather.icon === '01d' || info.weather.icon === '01n') {
        seticon(clear)
      }
      else if (info.weather.icon === '02d' || info.weather.icon === '02n') {
        seticon(cloud)
      }
      else if ((info.weather.icon === '09d' || info.weather.icon === '09n') && (info.weather.icon === '10d' || info.weather.icon === '10n')) {
        seticon(rain)
      }
      else if (info.weather.icon === '13d' || info.weather.icon === '13n') {
        seticon(snow)
      }
      else if ((info.weather.icon === '03d' || info.weather.icon === '03n') && (info.weather.icon === '04d' || info.weather.icon === '04n')) {
        seticon(drizzle)
      }
      else {
        seticon(clear)
      }
      setErrorMessage(""); // Reset error message
    } catch (error) {
      setErrorMessage(error.message);
    }


  }
  return (
    <>
      <div className="container">
        <div className="row  " >
          <div className="col-md-5 mx-auto" >
            <div className="card mt-5 " style={{ backgroundColor: "black", borderRadius: '20px' }}>
              <div className="card-body text-center ">
                <form className="d-flex mt-2">
                  <input className="form-control p-2 me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" id='city' />
                  <button className="btn btn-outline-light rounded-pill" type="submit" onClick={search}>Search</button>
                </form>
                {errorMessage && <div className="text-danger mt-3">{errorMessage}</div>}
                <div className='container'>
                  <div className="card-body text-center">

                    <img src={icon}
                      className="img-fluid mb-2"
                      alt="GeeksforGeeks Logo" />

                    <h1 id="temperature" className="text-light" style={{ fontSize: '5.5rem' }}>33</h1>
                    <h1 id="name" className="text-light">mp</h1>
                    <span id='min' className="text-light"></span>
                    <span id="max" className="text-light"></span>
                    <br></br>
                    <span id='humidity' className="text-light mt-3"></span>
                    <span id="wind" className="text-light"></span>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

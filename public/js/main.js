

const submitbutton = document.getElementById('submitbutton');
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val ');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityval = cityname.value;
    if(cityval === ""){
        city_name.innerText ='Please write a city name before search';
         datahide.classList.add('data_hide');
   }
   else{
     try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=049fc44addb3c6797136ff669786b1a9`;
    const response = await fetch(url);
    const data =  await response.json();
    const arrdata = [data];
     city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
     temp_real_val.innerText = arrdata[0].main.temp;
     //temp_sta tus.innerText = arrdata[0].weather.main;
      
     const tempmood = arrdata[0].weather.main;

     if(tempmood == "Clear"){
        temp_status.innerHTML = "<i class ='fas fa-sun' style ='color:#eccc68;`></i>";
     }
     else if(tempmood == "Clouds"){
        temp_status.innerHTML = "<i class ='fas fa-clouds'  style ='color:#f1f2f6;`></i>";
     }
     else if(tempmood == "Rain"){
        temp_status.innerHTML = "<i class ='fas fa-rain'  style ='color:#a4b0be;'</i>";
     }
     else{
        temp_status.innerHTML = "<i class ='fas fa-cloud'  style ='color:#1ff2f6;'</i>";
     }
     datahide.classList.remove('data_hide');
     }

    catch{
        city_name.innerText = "Please enter correct name";
        datahide.classList.add('data_hide');
    }
  }

}


submitbutton.addEventListener('click',getInfo);





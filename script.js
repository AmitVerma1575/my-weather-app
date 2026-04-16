const myLocation= document.querySelector("#myLocation")

//--------------Search Location Button-------------
const search = document.querySelector("#search")
//------------------------END---------------------------

//-----------------------input element fetch-----------
const inpt = document.querySelector("input")
//------------------------END---------------------------

// ELEMENT BKO ACCES JISME DATA SHOW KRE GE 

const weather = document.querySelector(".weather")
const city = document.querySelector(".city")
const temp = document.querySelector(".temp")
const condition = document.querySelector(".condition")
//------------------CLOSE-----------------------------


 async function gotMyLocation(position){

const lati =position.coords.latitude
const longi = position.coords.longitude
 
  showdata(lati,longi)
 }

  async function showdata(lati,longi){
  

  const myresult = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=b04e686561e445128e5193221261304&q=${lati},${longi}&days=1&aqi=yes&alerts=no
`)
      const data = await myresult.json(); 


city.textContent = `${data.location.name}, ${data.location.country} `
temp.textContent = `🌡️ ${data.current.temp_c} °C`
condition.textContent = `🌤️${data.current.condition.text}`
  
 }

 async function failed(err){
console.log("please try again later... ")
 }


//---------------------MY LOCATION-----------------------
myLocation.addEventListener("click" ,async ()=>{

navigator.geolocation.getCurrentPosition(gotMyLocation,failed);

})
//------------------------END--------------------------------------


//----------------------------Show dta Search ka kunction----------------------



 async function Search_data_show(place){

 const searchResult = await fetch(`http://api.weatherapi.com/v1/current.json?key=6f080609e4854b90906155401261604&q=${place}&aqi=yes`) 

const data_search  = await  searchResult.json();


city.textContent = `${data_search.location.name}, ${data_search.location.country}, `
temp.textContent = `🌡️ ${data_search.current.temp_c} °C`
condition.textContent = `🌤️${data_search.current.condition.text}`
  
}



//-----------------------------Search Pe EventListener---------------------

search.addEventListener("click" ,(e)=>{
  
 const place = inpt.value.trim();
 e.preventDefault();
 if(place===""){
  alert(" Input Was Empty Enter Something")
 }
 else{
  Search_data_show(place);
 }
})
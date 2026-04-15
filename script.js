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
      const data = await myresult.json(); // ✅ REQUIRED


city.textContent = `${data.location.name}, ${data.location.country}, `
temp.textContent = `🌡️ ${data.current.temp_c}`
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

//-----------------------------Search Pe EventListener---------------------

search.addEventListener("click" ,(e)=>{
 const place = inpt.value.trim();
 if(place===""){
  alert(" Input Was Empty Enter Something..")
 }
 else{
  Search_data_show(place);
 }
  
})
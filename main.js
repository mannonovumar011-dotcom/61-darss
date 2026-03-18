const regions = {
"Tashkent":19.7,
"Andijan":10.4,
"Fergana":6.5,
"Namangan":4.8,
"Samarqand":8.5,
"Bukhara":10.7,
"Khorezm":9.2,
"Navoiy":11.2,
"Kashkadarya":12.5,
"Surkhandarya":14.8,
"Jizzakh":6.7,
"Sirdaryo":5.6
};

const input = document.getElementById("search");


input.addEventListener("input",()=>{
  let val=input.value.toLowerCase();
  list.innerHTML="";

  Object.keys(regions).forEach(r=>{
    if(r.toLowerCase().includes(val)){
      let li=document.createElement("li");
      li.textContent=r;

      li.onclick=()=>{
        input.value=r;
        list.innerHTML="";
      }

      list.appendChild(li);
    }
  });
});

function showTemp(){
  let city=input.value;

  if(regions[city]!==undefined){
    document.getElementById("city").innerText=city+", Uzbekistan";
    document.getElementById("temp").innerText=regions[city]+"°C";
  }
}
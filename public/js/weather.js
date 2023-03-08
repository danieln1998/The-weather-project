const weForm = document.getElementById("weather_form");
const latInput = document.getElementById("lat_input");
const lonInput = document.getElementById("lon_input");

const dataBlock2 = document.getElementById("weather_data_block");

weForm.addEventListener('submit', (e) => {
    // prevent page from refreshing.
    e.preventDefault();
    fetchData();
})

async function fetchData()
{
    try {
        if (!lonInput.value||!latInput.value)
        {
            dataBlock2.innerHTML="You must enter lon&lat"
        } else {
            // User entered location, call our server with that location
            
            //const server_url = `http://localhost:3000/weather?lon=${lonInput.value}&lat=${latInput.value}`;
            const server_url2 =  `http://localhost:3000/weather?lat=${latInput.value}&lon=${lonInput.value}`;
           // console.log(server_url);
            // localhost:3000/weather?lon=35&lat=32

            // default is GET
            let res2 = await fetch(server_url2);
            console.log(res2);
            // try reading response body as text
            // if response body is json we'll call res.json();
            let data2 = await res2.text();
            console.log(data2);
            if (res2.ok)
            {
              
                dataBlock2.innerHTML=data2;
               
            } else {
               
               throw new Error(data2);
            }
        }
    } catch (err)
    {
       
        dataBlock2.innerHTML=err.message;
        console.log(err);
        
    }
}
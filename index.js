

async function fetchData(){
    try{

        const req = document.getElementById("req").value.toLowerCase();

        const response = await fetch(`https://restcountries.com/v3.1/name/${req}`);
        if(!response.ok){
            throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        console.log(data[0].flags.png)
        document.getElementById("info").innerHTML = `<h2>${data[0].name.official}</h2><p>
Common name: ${data[0].name.common}<br>
Capital: ${data[0].capital}<br>
Population: ${data[0].population}<br>
Time zones: ${data[0].timezones.join("; ")}<br>
Area: ${data[0].area}km²<br>
Domains: ${data[0].tld.join(" ")}<br>
Languages: ${Object.keys(data[0].languages).map(element => {return data[0].languages[element];}).join(", ")}</p>`;

        document.getElementById("sprite").src = data[0].flags.png;
        document.getElementById("sprite").alt = data[0].flags.alt;

        document.getElementById("coatofarms").src = data[0].coatOfArms.png;

        document.getElementById("sprite").style.display = "inline-block";
        document.getElementById("coatofarms").style.display = "inline-block";

        console.log(data);
    }
    catch(error){
        console.error("Error fetching data: ", error);
    }
}



// fetch(`https://api.nasa.gov/planetary/apod?api_key=RdkCnkWJfnp30vrS8rsF7oeojSzzX5lqbaRwJ6fl`)
//   .then(response => {
//     if(!response.ok){
//         throw new Error(`HTTP error ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => console.log(data)); 
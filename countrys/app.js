const body = document.querySelector("body");
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const content = document.querySelector("#content");
const info = document.querySelector("#info");


function showCountry(data){
    content.innerHTML = "";
    let html = `
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img src="${data.flags.png}" class="card-img-top img" alt="country image">
            <div class="card-body">
                <h3 class="card-title text-center">${data.name.common}</h3>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Capital:</b> ${data.capital}</li>
                        <li class="list-group-item"><b>Continents:</b> ${data.continents}</li>
                        <li class="list-group-item"><b>Languages:</b> ${Object.values(data.languages)}</li>
                        <li class="list-group-item"> <b>Maps:</b> <a href="${data.maps.googleMaps}" target="_blank">Google maps</a></li>
                    </ul>
            </div>
        </div>
        `
    content.innerHTML = html;
}

function searchCountry(){
    input.value = "";
    button.addEventListener("click", () => {
        const research = input.value.trim();

        if(research) {
            getCountry(research);
            info.classList.add("dnone");
    }
    });
};
searchCountry();
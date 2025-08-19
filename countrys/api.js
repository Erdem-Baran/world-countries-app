    function getCountry(country){
        const request = new XMLHttpRequest();
        request.open("GET", "https://restcountries.com/v3.1/name/" + country);
        request.send();

        request.addEventListener("load", function(){
            if(this.status === 200){
                const data = JSON.parse(this.responseText);
                showCountry(data[0])
                searchCountry()
            }else{
                alert("Please enter a valid country name")
            }
        })
}



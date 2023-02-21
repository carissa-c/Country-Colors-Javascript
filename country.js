class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }


DisplayColors() {
	//Where all of the Dom changes happen
	//accessing property
	//this.name
    let cNameNode = document.querySelector("#CountryName");
    cNameNode.innerText = this.name;

    let cLangNode = document.querySelector("#OfficialLanguage");
    cLangNode.innerText = this.lang;

    let cHelloNode = document.querySelector("#HelloWorld");
    cHelloNode.innerText = this.greeting;

    // let cColorNode = document.querySelector("#Color1");
    // cColorNode1.style.backgroundColor = this.colors[0];

    //getElementById doesn't need #
    let cColorNode1 = document.getElementById("Color1");
    cColorNode1.style.backgroundColor = this.colors[0];
    let cColorNode2 = document.getElementById("Color2");
    cColorNode2.style.backgroundColor = this.colors[1];
    let cColorNode3 = document.getElementById("Color3");
    cColorNode3.style.backgroundColor = this.colors[2];

}

}

let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])
let italy = new Country("Italy", "Italian", "Ciao mondo!", ["green", "white", "red"]);


function SwitchCountry() {
    let input = document.querySelector("#CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if (input === "Italy") {
        country = italy;
    }

    country.DisplayColors();
}

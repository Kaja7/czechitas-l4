// tady je místo pro náš program


/*const address = {
    ulice: "pod Kaštany",
    cislo: 12,
    mesto: "Praha",
    postalCode: "170 00",
}

let vstupUzivatel = prompt("Zadej spravne cislo domu")
address.number = cislo(vstupUzivatel)

const product = {
    name: 'Mlýnek na kávu',
	price: 520,
	currency: 'Kč',
}

const { name, price, currency} = product

//cvičení knihovna

const kniha1 = {
    name: "Moje kniha"

}

//Cvičení očkování

let vstupJmeno = prompt("Jmeno")
let vstupVek = Number(prompt("Vek"))

const person = 
    jmeno: vstupJmeno,
    vek: vstupVek,
    


// Realitka

 const apartment = {
	type: 'rent',
	disposition: '3+1',
	area: {
		floorage: 100,
		balcony: 2,
		units: 'sqm',
	},
	city: 'Prague',
	district: 'Old Town',
	price: {
		rent: 28000,
		fees: {
			water: 1000,
			energy: 2500,
			services: 560,
		},
		currency: 'czk',
	},
	ownership: 'personal',
	condition: 'renovated',
	status: 'free',
	floor: 3,
}

document.body.innerHTML += "<p>Dispozice: "+ apartment.disposition +"</p>"
document.body.innerHTML += "<p>Najem bez poplatku: "+ apartment.rent +"</p>"
document.body.innerHTML += "<p>Vymera bytu: "+ apartment.area.floorage + apartment.area.units +"</p>"

const mesto = apartment.city
const mestskaCast = apartment.district

document.body.innerHTML += "<p>Mesto: "+ mesto +"</p>"
document.body.innerHTML += "<p>Mestska cast: "+ mestskaCast +"</p>"

apartment.status = "taken"
document.body.innerHTML += "<p>Stav inzeratu: "+ apartment.status +"</p>" */


// Úkol film - v konzoli

// Úkol emaily

let email = prompt("e-mail")
let atIndex = email.indexOf('@')

let parsedEmail = {
	uzivatelskeJmeno: email.slice(0, atIndex),
	domena: email.slice(atIndex + 1),
}

document.body.innerHTML =
	'<p>Uživatelské jméno: ' + parsedEmail.uzivatelskeJmeno + '</p>'
document.body.innerHTML += '<p>Doména: ' + parsedEmail.domena + '</p>'
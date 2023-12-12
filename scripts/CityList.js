import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click",
    (clickEvt) => {
        const cityTarget = clickEvt.target

        if (cityTarget.dataset.type === "city") {
            window.alert(`${cityTarget.dataset.walkername} service(s) this city.`)
        }
    }
)

const findWalkerCityMatch = (cityObj, allWalkers) => {
    let walkerCityMatchArray = []

    for (const walker of allWalkers) {
        if (walker.cityId === cityObj.id) {
            walkerCityMatchArray.push(walker.name)
        }
    }
    
    return walkerCityMatchArray
}

export const CityList = () => {
    
    let citiesHTML = "<ul>"
    
    for (const city of cities) {

        let walkerCityMatch = findWalkerCityMatch(city, walkers)

        citiesHTML += `<li 
                            data-type="city"
                            data-id="${city.id}"
                            data-walkerName="${walkerCityMatch.join(`\ &\ `)}"
                            >${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML

}
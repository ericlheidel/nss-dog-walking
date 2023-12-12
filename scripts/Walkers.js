import { getCities, getWalkers } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click",
    (theClickevent) => {
        const whatWasClickedOn = theClickevent.target

        if (whatWasClickedOn.dataset.type === "walker") {
            window.alert(`This walker works in ${whatWasClickedOn.dataset.city}`)
        }

    }
)

export const getCityWalkerMatch = (walkerObj, allCities) => {
    let cityWalkerMatch = null

    for (const city of allCities) {
        if (city.id === walkerObj.cityId) {
            cityWalkerMatch = city.name
        }
    }

    return cityWalkerMatch
}

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {

        let cityName = getCityWalkerMatch(walker, cities)

        walkerHTML += `
                    <li
                        data-id="${walker.id}"
                        data-city="${cityName}"
                        data-type="walker"
                    >${walker.name}
                    </li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}


//{"name":"Австрия","fullName":"Австрийская Республика",
// "flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/50px-Flag_of_Austria.svg.png"}
import { flow, makeAutoObservable } from "mobx"
import { getCountryByName, CountryInfo } from "../../../api/apiService"
import { baseModel } from "../baseVM/baseViewModel"


class AutocompleteModel implements baseModel {
    text: string = ""
    countries: CountryInfo[] | null = null
    isError: boolean = false
    isProcess: boolean = false

    constructor() {
        makeAutoObservable(this)
    }


    fetchCountries = flow(function* (this: AutocompleteModel, text: string) {
        try {
            this.isProcess = true
            const res = yield getCountryByName(text)
            if (Array.isArray(res)) {
                const hash: Record<string, CountryInfo> = {}
                const countries = res.reduce<CountryInfo[]>((acc, country) => {
                    const key = country.fullName
                    if (hash[key]) {
                        return acc
                    }
                    hash[key] = country
                    acc.push(country)
                    return acc
                }, [])
                this.countries = countries
            } else {
                throw new Error("Wrong response")
            }

        } catch (e) {
            console.error("Error with getCountry", e)
            this.isError = true
        } finally {
            this.isProcess = false
        }

    })

    setText(text: string) {
        this.text = text
    }

    clearCountries() {
        this.countries = null
    }

}

export default AutocompleteModel
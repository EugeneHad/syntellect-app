import { useCallback } from "react"
import { CountryInfo } from "../../../../api/apiService"
import CountryItem from "./CountryItem/CountryItem"
import "./DropdownList.css"
export interface dropdownLisProps {
    countries: CountryInfo[]
    onClick: (name: string) => void
    count: number
}


const DropdownList = (props: dropdownLisProps) => {
    const { countries, onClick, count } = props

    if (countries.length === 0) {
        return <div className="dropDownText">{"Not found"}</div>
    }

    const slicedArr = countries.slice(0, count)

    return <div className="dropDown">
        {slicedArr.map((country, idx) => {
            return <CountryItem {...country} key={`${country}-${idx}`} onClick={onClick} />
        })}
    </div>
}

export default DropdownList
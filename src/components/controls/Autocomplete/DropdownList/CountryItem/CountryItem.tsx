import { useCallback } from "react"
import { CountryInfo } from "../../../../../api/apiService"
import "./CountryItem.css"

export interface CountryItemProps extends CountryInfo {
    onClick: (name: string) => void
}
// ограничение для длинных
const CountryItem = (props: CountryItemProps) => {
    const { name, fullName, flag, onClick } = props
    const count = 4

    return <div className="dropdown-item" onClick={() => {
        onClick(fullName)
    }}>
        <img src={flag} alt="country flag" loading="lazy"></img>
        <div>{`${name} (${fullName})`}</div>
    </div>
}

export default CountryItem
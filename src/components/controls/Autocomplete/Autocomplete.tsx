import Button, { ButtonProps } from "../../shared/Button/Button"
import TextInput from "../../shared/Text/Text"
import { useCallback, useEffect, useState } from "react"
import "./Autocomplete.css"
import { observer } from "mobx-react"
import AutocompleteVM from "./AutocompleteVM"
import DropdownList from "./DropdownList/DropdownList"
import Skeleton from "../../shared/Skeleton/Skeleton"

export interface autocompleteProps {
    vm: AutocompleteVM,
    count: number
}


const Autocomplete = observer((props: autocompleteProps) => {
    const { vm, count } = props
    const [forceClosed, setForseClosed] = useState(false)
    const handleChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        //to-do action
        vm.setText(event)
        vm.debouncedFetchCountries(event)
        setForseClosed(false)
    }, [vm.debouncedFetchCountries, vm.setText])

    const handleClick = useCallback((name: string) => {
        vm.setText(name)
        setForseClosed(true)
    }, [vm.setText])

    const renderDropDown = () => {
        if (vm.isError) {
            return <div>{"Error"}</div>
        }
        if (vm.isProcess) {
            return <Skeleton count={count}></Skeleton>
        }

        if (vm.countries && !forceClosed) {
            return <DropdownList count={count} countries={vm.countries} onClick={handleClick}></DropdownList>
        }
    }
    return <div className="autocomplete">
        <TextInput value={vm.text} onChange={handleChange}></TextInput>
        {renderDropDown()}
    </div>
})

export default Autocomplete
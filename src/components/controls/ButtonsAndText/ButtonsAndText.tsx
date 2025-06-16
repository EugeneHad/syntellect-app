import Button, { ButtonProps } from "../../shared/Button/Button"
import TextInput from "../../shared/Text/Text"
import { useCallback } from "react"
import "./ButtonsAndText.css"
import { observer } from "mobx-react"
import BtnAndTxtModelVM from "./BtnsAndTxtVM"

export interface ButtonsAndTextProps {
    vm: BtnAndTxtModelVM
}


const ButtonsAndText = observer((props: ButtonsAndTextProps) => {
    const { vm } = props
    const handleChange = useCallback((val: React.ChangeEvent<HTMLTextAreaElement>) => {
        vm.setText(val)
    }, [vm.setText])


    const renderButtons = (buttonsProps: ButtonProps[]) => {
        return <div>{buttonsProps.map((props, idx) => {
            return <Button {...props} key={`button${idx}}`} />
        })}</div>
    }

    return <div className="btnAndTxtContainer">
        {vm.leftButtons.length > 0 && renderButtons(vm.leftButtons)}
        <TextInput value={vm.text} onChange={handleChange}></TextInput>
        {vm.rightButtons.length > 0 && renderButtons(vm.rightButtons)}
    </div>
})

export default ButtonsAndText
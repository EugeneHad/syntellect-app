import { baseModel } from "../baseVM/baseViewModel"
import { ButtonProps } from "../../shared/Button/Button"
import { makeAutoObservable } from "mobx"

class BtnsAndTxtModel implements baseModel {
    text: string = ""
    leftButtons: ButtonProps[] = []
    rightButtons: ButtonProps[] = []

    constructor(leftButtons: ButtonProps[], rightButtons: ButtonProps[]) {
        this.leftButtons = leftButtons
        this.rightButtons = rightButtons
        makeAutoObservable(this)
    }

    setText(text: string) {
        this.text = text
    }
}

export default BtnsAndTxtModel
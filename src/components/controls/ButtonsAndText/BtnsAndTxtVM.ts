import { makeAutoObservable } from "mobx"
import BtnsAndTxtModel from "./BtnsAndTxtModel"
import Button, { ButtonProps } from "../../shared/Button/Button"
import baseViewModel from "../../shared/baseClass/baseViewModel"
//dispose по доке mobx
class BtnAndTxtModelVM extends baseViewModel<BtnsAndTxtModel> {
    constructor(model: BtnsAndTxtModel) {
        super(model)
    }

    get leftButtons() {
        return this.model.leftButtons
    }

    get rightButtons() {
        return this.model.rightButtons
    }
}

export default BtnAndTxtModelVM
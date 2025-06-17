import BtnsAndTxtModel from "./BtnsAndTxtModel"
import baseViewModel from "../baseVM/baseViewModel"

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
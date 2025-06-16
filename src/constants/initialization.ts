import { ButtonProps } from "../components/shared/Button/Button";
import BtnsAndTxtModel from "../components/controls/ButtonsAndText/BtnsAndTxtModel";
import BtnAndTxtModelVM from "../components/controls/ButtonsAndText/BtnsAndTxtVM";
import AutocompleteModel from "../components/controls/Autocomplete/AutocompleteModel";
import AutocompleteVM from "../components/controls/Autocomplete/AutocompleteVM";


export const initialization = () => {
    const rightButtons1: ButtonProps[] = [
        {
            onClick: () => {
                model1.setText("")
            },
            children: "Clear",
        },
        {
            onClick: () => {
                model1.setText("Hello world")
            },
            children: "Paste Hello world"
        }
    ]
    const leftButtons2: ButtonProps[] = [
        {
            onClick: () => {
                if (Number(model2.text)) {
                    alert(model2.text)
                }
            },
            children: "Is Number",
        }
    ]
    const rightButtons2: ButtonProps[] = [
        {
            onClick: () => {
                alert(model2.text)
            },
            children: "Alert",
        }
    ]

    const model1 = new BtnsAndTxtModel([], rightButtons1)
    const model2 = new BtnsAndTxtModel(leftButtons2, rightButtons2)

    const viewModel1 = new BtnAndTxtModelVM(model1)
    const viewModel2 = new BtnAndTxtModelVM(model2)
    const autoCompleteModel1 = new AutocompleteModel()
    const autoCompleteModel2 = new AutocompleteModel()
    const autocompleteVM1 = new AutocompleteVM(autoCompleteModel1)
    const autocompleteVM2 = new AutocompleteVM(autoCompleteModel2)

    return { viewModel1, viewModel2, autocompleteVM1, autocompleteVM2 }
}

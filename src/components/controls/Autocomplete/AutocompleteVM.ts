import baseViewModel from "../../shared/baseClass/baseViewModel";
import AutocompleteModel from "./AutocompleteModel";
//todo -utils

const debounce = <F extends (...args: any[]) => void>(
    func: F,
    delay: number
): ((...args: Parameters<F>) => void) => {

    let timeoutId: ReturnType<typeof setTimeout>

    return (...args: Parameters<F>) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => func(...args), delay)
    };
};


class AutocompleteVM extends baseViewModel<AutocompleteModel> {
    debouncedFetchCountries: (event: React.ChangeEvent<HTMLTextAreaElement>) => void

    constructor(model: AutocompleteModel) {
        super(model)
        this.fetchCountries = this.fetchCountries.bind(this)
        this.debouncedFetchCountries = debounce(this.fetchCountries, 300)
    }

    get isProcess() {
        return this.model.isProcess
    }

    get isError() {
        return this.model.isError
    }

    async fetchCountries(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const text = event.target.value
        if (text.length > 0) {
            await this.model.fetchCountries(text)
        } else {
            this.model.clearCountries()
        }

    }


    get countries() {
        if (!(this.isError && this.isProcess && this.model.countries)) {
            return this.model.countries
        } else {
            return null
        }
    }

}

export default AutocompleteVM
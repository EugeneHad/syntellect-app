export interface baseModel {
    text: string
    setText: (text: string) => void
}

class baseViewModel<T extends baseModel> {
    model: T
    constructor(model: T) {
        this.model = model
    }

    get text() {
        return this.model.text
    }

    setText(event: React.ChangeEvent<HTMLTextAreaElement> | string) {
        const text = typeof event === "string" ? event : event.target.value
        this.model.setText(text)
    }
}

export default baseViewModel
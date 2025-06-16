import React from "react"
import "./Text.css"

export interface TextProps {
    value: string
    onChange: (val: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextInput = (props: TextProps) => {
    const { value, onChange } = props
    return <textarea value={value} className="text" onChange={onChange} name="somename"></textarea>
}

export default TextInput
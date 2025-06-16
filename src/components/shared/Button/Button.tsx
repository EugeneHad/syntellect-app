import "./Button.css"

export interface ButtonProps {
    onClick: () => void
    children: string
}

const Button = (props: ButtonProps) => {
    const { onClick, children } = props
    return <button onClick={onClick} className="button">{children}</button>
}

export default Button
import logo from '../assets/investment-calculator-logo.png'

export default function  Header() {
    return (
        <header id="header">
            <img src={logo} alt="/"/>
            <h1>investment calculator</h1>
        </header>
    )
}
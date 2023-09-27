import Logo from "./Logo";
import Instruction from "./Instruction";
import Link from "./Link";
import '../App.css';

export default function Header() {
    return (
        <div className="App-header">
            <Logo />
            <Instruction />
            <Link />
        </div>
    )
}
import Link from "next/link";
import Image from "next/image";
import Logo from "../Assets/Logo.jpg"

const NavBar = () => {
    return(
        <nav>
            <div className="logo">
                <Image src={Logo} width={40} height={40}/>
                <h1>System</h1>
            </div>

            <Link href="/">Home</Link>

            <Link href="/about"> About</Link>

            <Link href="/employees">Employee List</Link>

        </nav>
    )
}

export default NavBar;
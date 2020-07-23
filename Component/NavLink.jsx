import Link from 'next/link';

const Navlink = ({setToggleMenu,toggleMenu}) => {

    const handleClick = e => {
       // e.preventDefault();
        setToggleMenu(false);
    }
    return (
        <ul className="nav-items nav-link" id="animate-link">
            <li>
                <Link href="/">
                    <a onClick={toggleMenu ? handleClick : undefined}>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/team">
                    <a onClick={toggleMenu ? handleClick : undefined}>Gurkha Team</a>
                </Link>
                
            </li>
            <li>
                <Link href="/projects">
                    <a onClick={toggleMenu ? handleClick : undefined}>Case Studies</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a onClick={toggleMenu ? handleClick : undefined}>Podcast</a>
                </Link>
            </li>
            <li>
            <Link href="/">
                    <a onClick={toggleMenu ? handleClick : undefined}>Blog</a>
                </Link>
            </li>
        </ul>
    );
}

export default Navlink;

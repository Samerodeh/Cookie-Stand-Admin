import Link from 'next/link'

function Header() {
    return (
        <header className="flex-1 p-1.5 text-3xl text-left bg-green-500 ">

            <Link href='/overview'><button className="float-right pl-1.25 pr-1 text-base bg-gray-100 "> Overview </button></Link>

            <h1 className="h-15.5 p-5 text-3xl text-left font"> Cookie Stand Admin </h1>

        </header>
    )
}

export default Header;
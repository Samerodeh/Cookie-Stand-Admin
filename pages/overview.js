import React from 'react'
import Link from 'next/link'

const overview = () => {
    return (
        <header className="flex-1.2 p-1.5 text-3xl text-left bg-green-500 ">

            <Link href='/'><button className="float-right pl-1.25 pr-1 text-base bg-gray-100 "> Main page </button></Link>

            <h1 className="p-4 text-3xl text-left font h-15.5"> Cookie Stand Admin </h1>

        </header>
    )
}

export default overview;
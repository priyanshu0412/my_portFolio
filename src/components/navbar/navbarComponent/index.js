"use client"
import MobileNavbar from '@/components/mobileNavbar'
import Link from 'next/link'

// -------------------------------------

const NavbarComponent = ({ navbar }) => {

    return (
        <>
            <div className='items-center justify-between hidden w-full h-20 px-16 lg:flex'>
                <div>
                    <Link className='w-fit' href={"/"}>
                        <p className="text-2xl font-bold tracking-wider text-transparent cursor-pointer bg-gradient-to-r from-teal-400 to-gray-300 bg-clip-text font-poppins">
                            Priyanshu
                        </p>
                    </Link>
                </div>
                <div className='flex items-center justify-center gap-8'>
                    {
                        navbar.length > 0 && navbar.map((ele, index) => {
                            return (
                                <Link
                                    href={ele?.title === "Home" ? "/" : `/#${ele?.title}`}
                                    key={index}
                                    className='w-fit'>
                                    <p
                                        className="text-[#d9d9d9] hover:text-white font-normal font-poppins cursor-pointer">
                                        {ele?.title}
                                    </p>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className='flex items-center justify-center h-full'>
                    <Link className='w-fit' href={"/contact"}>
                        <button className='text-[#000] bg-[#b2b3b3] px-6 py-2 rounded-full hover:bg-[#ffffffc0]'>
                            Get In Touch
                        </button>
                    </Link>
                </div >
            </div >

            {/* Mobile Navbar */}
            <MobileNavbar navbar={navbar} />
        </>
    )
}

export default NavbarComponent

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/assets/images/gsb-logo.png';


const Header = () => {
    return (
        <header className='bg-white shadow-md p-1 px-5'>
            <div className='flex justify-between items-center'>
                <Image src={Logo} alt="logo" width={100} height={50}/>
                <nav className='flex justify-between min-w-28'>
                    <Link href="/pages/home">
                        {/* <a className="hover:text-blue-500">Home</a> */}
                        Home
                    </Link>

                    <Link href="/pages/products">
                        {/* <a className="hover:text-blue-500">About</a> */}
                        About
                    </Link>
                </nav>
                <div className="flex  justify-between items-center min-w-28">
                    <Link href="" className="color-black hover:text-blue-500">
                        {/* <a className="color-black hover:text-blue-500">Login</a> */}
                        Login
                    </Link>
                    <Link href="" className="p-2 bg-blue-500 rounded-md text-white">
                        {/* <a className="p-2 bg-blue-500 rounded-md text-white">Sign up</a> */}
                        Sign up
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
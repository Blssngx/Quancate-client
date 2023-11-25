import React from 'react';
import Link from "next/link";
import { MainNav } from './main-nav';
import { ModeToggle } from './ModeToggle';
import { UserButton } from '@clerk/nextjs';

type Props = {};

const Navbar = async (props: Props) => {
    return (
        <div className="flex h-16 items-center border-b px-4">
            <Link href="/">
                <div className="relative z-20 flex items-center text-lg font-bold mr-2">
                    WANT
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                        fill="red"
                        className="mr-1 h-6 w-6 ml-1"
                        stroke="currentColor"
                    >
                        <g>
                            <path
                                d="M207.063,167.141c-1.031-0.609-2.344-0.641-3.406-0.031c-1.031,0.594-1.688,1.719-1.688,2.938v85.938v85.953 c0,1.234,0.656,2.344,1.688,2.938c1.063,0.625,2.375,0.594,3.406-0.031l144-85.953c1.031-0.594,1.641-1.703,1.641-2.906 c0-1.172-0.609-2.297-1.641-2.891L207.063,167.141z"
                            />
                            <path
                                d="M256,0C114.625,0,0,114.625,0,256s114.625,256,256,256s256-114.625,256-256S397.375,0,256,0z M256,448 c-105.875,0-192-86.125-192-192S150.125,64,256,64s192,86.125,192,192S361.875,448,256,448z"
                            />
                        </g>
                    </svg>
                    W
                </div>
            </Link>
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
                {/* <ModeToggle /> */}
                <UserButton />
            </div>
        </div>
    )
};

export default Navbar;
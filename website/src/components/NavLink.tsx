"use client"

import Link from "next/link"
import Image from 'next/image'
import { usePathname } from 'next/navigation'

interface Props {
    href: any
    text: string
    icon: any
}

export default function NavLink({ href, text, icon }:Props){

    const pathname = usePathname()

    return (
        <Link className={`nav_link  ${pathname === href ? 'active' : ''}`} href={href}>
            <Image draggable="false" className={`${pathname === href ? 'grayscale-0' : 'grayscale'}`} src={icon} width={24} height={24} alt={`${text} icon`}/>
            <span className="hidden lg:block">{text}</span>
        </Link>
    )

}
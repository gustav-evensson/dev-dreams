"use client"

import { useRouter } from "next/navigation"
import Image from "next/image";
import leftArrow from '@/public/icons/TopBar/arrowLeft_24x24.svg'

export default function BackBtn(){

    const router = useRouter();

    return(
        <button onClick={() => router.back()}>
            <Image src={leftArrow} width={24} height={24} alt="back button"/>
        </button>
    )

}
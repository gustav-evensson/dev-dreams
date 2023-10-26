"use client";

import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";

import { useDispatch } from "react-redux";
import { close } from "../app/GlobalRedux/Features/sideBar/sideBarSlice";

interface Props {
    href: any;
    text: string;
    icon: any;
}

export default function NavLink({ href, text, icon }: Props) {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const router = useRouter();

    const navigate = () => {
        dispatch(close());
        router.push(href);
    };

    return (
        <button
            className={`w-max m-auto rounded-full transition hover:bg-bg2 flex items-center gap-2 p-2 xl:w-full xl:rounded-lg  ${
                pathname === href ? "text-primary bg-primary_transparent fill-primary hover:bg-primary_transparent" : ""
            }`}
            onClick={navigate}
        >
            <Image
                draggable="false"
                className={`${pathname === href ? "grayscale-0" : "grayscale"}`}
                src={icon}
                width={24}
                height={24}
                alt={`${text} icon`}
            />
            <span className="hidden xl:block">{text}</span>
        </button>
    );
}

"use client";

// Redux imports
import { useDispatch } from "react-redux";
import { open } from "../app/GlobalRedux/Features/sideBar/sideBarSlice";

// Next assets
import Image from "next/image";

// Assets
import sideBarImage from "@/public/icons/TopBar/sidebar_24x24.svg";

export default function SideBarBtn() {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(open())} className="block xl:hidden">
            <Image draggable="false" src={sideBarImage} width={24} height={24} alt="sidebar image" />
        </button>
    );
}

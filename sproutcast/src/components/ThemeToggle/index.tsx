"use client"
import { useTheme } from "next-themes"
import { FaRegMoon, FaRegSun} from "react-icons/fa"

export const ThemeToggle = () => {
    const {setTheme} = useTheme()
    return (
        <section className="flex gap-5">
            <FaRegMoon size={25} onClick={()=>setTheme("dark")} className="cursor-pointer"></FaRegMoon>
            <FaRegSun size={25} onClick={()=>setTheme("light")} className="cursor-pointer"></FaRegSun>
        </section>

    )
}
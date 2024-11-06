import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "../ThemeToggle"

export const NavigationBar = () => {
    return (
        <nav className="flex gap-5 w-full">
            <section className="flex gap-5 text-lg font-bold dark:text-white">
              <Image
               src={"/images/logo.png"} 
               width={50}
               height={50}
               className="rounded-lg"
               alt="sproutcast logo">
              </Image>  
              sproutcast
            </section>
            <Link href={"/"} className="dark:text-white">Podcasts</Link>
            <Link href={"/favourites"}  className="dark:text-white">My Favourites</Link>
            <Link href={"/history"}  className="dark:text-white">My History</Link>
            <ThemeToggle></ThemeToggle>
        </nav>
    )
}
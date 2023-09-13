

import { HomeIcon, SearchIcon, PenSquare, Heart, User2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import LogoThreads from '../assets/threadsLogo.svg'

const menus = [
  {
    Logo: HomeIcon,
    alt: "Sua página inicial",
    route: "/",
  },
  {
    Logo: SearchIcon,
    alt: "Pesquise coisas de seu interesse",
    route: "/search",
  },
  {
    Logo: PenSquare,
    alt: "O que você anda pensando",
    route: "/post",
  },
  {
    Logo: Heart,
    alt: "Atividade",
    route: "/activity",
  },
  {
    Logo: User2,
    alt: "Seu perfil",
    route: "/profile",
  },
]


export default function Home() {
  return (
    <main >

   <nav className="flex justify-between items-center py-1 px-6">
    <Image src={LogoThreads} height={28} alt="Logo" />  
     <ul className="flex">
      {menus.map((menu) => (
          <li 
          title={menu.alt}
          key={menu.alt}
          className="px-7 py-5 hover:bg-neutral-800 rounded-xl transition-all duration-300 ease-in-out">
          <Link href={menu.route}>
             <menu.Logo size={28} className="text-neutral-600"/>
         </Link>    
          </li>
      ))}
     
     </ul>
   </nav>
      
    </main>
  )
}

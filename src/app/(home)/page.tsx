
import { 
  Heart,
  MessageCircle,
  Repeat2,
  Send,
  MoreHorizontal,
} from 'lucide-react'
import Image from 'next/image'
import ThreadsLogo  from '../../assets/threadsLogo.svg'
    
import DropdownMenuHome from './dropdown/dropdown'
import HomePost from './post'

import styles from './styles.module.css'
import { cn } from "@/lib/utils";

import { PostAvatar } from './post/post-avatar'
import { RepliesAvatar } from './post/replies-avatar'
import Navbar from './navbar'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main >
   <nav className="flex justify-between items-center py-1 px-6">
   <Image src={ThreadsLogo} height={32} alt="Logo"/>
   
    <Navbar/>
    <DropdownMenuHome/>
   </nav>

   <article className="max-w-lg m-auto">
     <section>
       <HomePost/>
     </section>

     <hr className="my-4 h-[0.5px] opacity-20" />
  
     <section  className={styles.container}>
        <div className={styles.avatar}>
        <PostAvatar src="https://github.com/jmininel.png" fallbackInitials="Shadcn"/>
        </div>

        <div className={styles.username}>
          <p>Juliana Mininel</p>
        </div>

        <div className={cn(styles.time, "flex items-center gap-1")}>
          <span>10H</span>
          <Button variant="outline" size="icon" className="rounded-full border-none" >
            <MoreHorizontal/>
          </Button>
        </div>

        <div className={styles.separator}>
        <span className="border-l-zinc-700 h-full border-l-[2px] block ml-5 my-2"></span>
        </div>

        <div className={cn(styles.reply_avatar, "m-auto")}>
          <RepliesAvatar
            data={[
              {
                src:"https://github.com/jmininel.png", 
                fallbackInitials:"JM"
              },
              {
                src:"https://github.com/joaobibiano.png", 
                fallbackInitials:"JM"
              }
            ]}
          />
        </div>

        <div className={styles.post}>
        <p className="">
              Recomendar o NextJS ou remix como default way para criar um app
              react foi o melhor conselho que o core team poderia fazer. No
              começo eu torci o nariz, mas hoje vejo que é o que mais faz
              sentido. Além do que obviamente a Vercel vai dominar o react em
              breve.
            </p>
        </div>

        <div className={cn(styles.actions, "flex space-x-2 mt-3 gap-2")}>
          <Heart/>
          <MessageCircle/>
          <Repeat2/>
          <Send/>
        </div>

        <div className={cn(styles.likes_and_replies, "mt-3")}>
          <span className="text-sm text-neutral-500">
            7 replies 23 likes
          </span>
        </div>
     </section>
   </article>
  </main>
  )
}

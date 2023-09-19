
import { Button } from "@/components/ui/button";
import { NewPost } from './newPost'
import { PostAvatar } from "./post-avatar";

export default function HomePost () {
  return(
    <div className="flex justify-between items-center gap-3">
   <PostAvatar src="https://github.com/shadcn.png" fallbackInitials="Shadcn"/>

    <NewPost />
    <Button disabled variant="outline" className="rounded-xl text-neutral-500 ">
       Post
    </Button>
    </div>
  )
}
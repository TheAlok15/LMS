
import { School, Book, Lightbulb,Laptop,User, GraduationCap } from 'lucide-react'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from './dropdown-menu';

const Navbar = () => {

  const user = true;
  return (
    <div className='h-16 dark:bg-black bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10'>

      <div className="max-w-7xl mx-auto hidden md:flex justify-between item-center gap-10">
        <div className='flex  item-center gap-2'>
             <GraduationCap size={30} />
            <h1 className='hidden md:block font extrabold text-2xl'>Learnify</h1>
            {/* jb bhi mobile devise rhega tb hideen rhega ye nam, md means medium device like laptop */}
        </div>
        <div>
          {/* user icon and dark mode */}
          {
           user ?  <DropdownMenu>
           <DropdownMenuTrigger asChild>
             <Button variant="outline">Open</Button>
           </DropdownMenuTrigger>
           <DropdownMenuContent className="w-56">
             <DropdownMenuLabel>My Account</DropdownMenuLabel>
             <DropdownMenuSeparator />
             <DropdownMenuGroup>
               <DropdownMenuItem>
                 Profile
                 <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
               </DropdownMenuItem>
               <DropdownMenuItem>
                 Billing
                 <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
               </DropdownMenuItem>
               <DropdownMenuItem>
                 Settings
                 <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
               </DropdownMenuItem>
               <DropdownMenuItem>
                 Keyboard shortcuts
                 <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
               </DropdownMenuItem>
             </DropdownMenuGroup>
             <DropdownMenuSeparator />
             <DropdownMenuGroup>
               <DropdownMenuItem>Team</DropdownMenuItem>
               <DropdownMenuSub>
                 <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                 <DropdownMenuPortal>
                   <DropdownMenuSubContent>
                     <DropdownMenuItem>Email</DropdownMenuItem>
                     <DropdownMenuItem>Message</DropdownMenuItem>
                     <DropdownMenuSeparator />
                     <DropdownMenuItem>More...</DropdownMenuItem>
                   </DropdownMenuSubContent>
                 </DropdownMenuPortal>
               </DropdownMenuSub>
               <DropdownMenuItem>
                 New Team
                 <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
               </DropdownMenuItem>
             </DropdownMenuGroup>
             <DropdownMenuSeparator />
             <DropdownMenuItem>GitHub</DropdownMenuItem>
             <DropdownMenuItem>Support</DropdownMenuItem>
             <DropdownMenuItem disabled>API</DropdownMenuItem>
             <DropdownMenuSeparator />
             <DropdownMenuItem>
               Log out
               <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
             </DropdownMenuItem>
           </DropdownMenuContent>
         </DropdownMenu> 
         : (
          <div> </div>         )
          } 

        

        </div>
      </div>
    </div>
  )
}

export default Navbar
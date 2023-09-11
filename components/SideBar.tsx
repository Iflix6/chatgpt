'use client'
import NewChat from "./NewChat";
import React, { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';


const SideBar = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      // Code to work with session data, e.g., displaying user info
      
    }
  }, [session]);
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
        
          {/* NewChat */}
            <NewChat />

          <div>
            {/*ModelSelection */}
          </div>

          {/* Map through the ChatRows*/}
       </div>
      </div>
      {session && 
      <img 
      onClick={() => signOut()}
       src={session.user?.image!}
       alt="Profile Picture" 
       className="h-12 w-12 
       rounded-full cursor-pointer
       mx-auto mb-2 hover:opacity-50"/> }
    </div>
  )
}

export default SideBar
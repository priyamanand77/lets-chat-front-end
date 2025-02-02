import { Button, Input } from '@material-tailwind/react'
import React from 'react'
import Logout from "/logo/logout.png"
import { MdAttachment, MdSend } from 'react-icons/md'
import ChatCard from './ChatCard'
export default function ChatRoom() {
    return (
        <div className='h-full flex flex-col'>

            <header className='fixed w-full flex justify-around bg-gray-700 py-1.5'>
                <div>Hi, Priyam</div>
                <div className='font-bold'>Chat Room Name</div>
                <div>
                    <Button className=" bg-red-500 px-2 py-1.5 rounded-4xl" onClick={() => { console.log("clicked") }}>
                        Exit-Room
                    </Button>
                </div>
            </header>
              <div className="p-5 flex-grow flex flex-col items-center justify-center">
      <main className="flex items-center justify-center w-full" style={{ height: 'calc(100vh - 6rem)' }}>
        <div className=" p-8 text-white rounded shadow-md h-full w-full max-w-lg overflow-auto">
         
          <ChatCard sender="priyam" message="test"time="12/12/12"  /> 
          
           </div>
      </main>
    </div>

            <footer className='bottom-0 fixed w-[100%] p-[2%] flex justify-around'>
                <input
                    type="text"
                    placeholder="Type Your Messgae Here..."
                    className="border border-gray-300 p-2 rounded-full w-full max-w-xs"
                />
                <Button className="  bg-green-500 px-5 py-3 rounded-full " onClick={() => { console.log("clicked2") }}>
                    <MdSend className='size-5' />
                </Button>
            </footer>
        </div>
    )
}

import React from 'react';
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline';

const HomePage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen
    px-2 text-white'>
      <h1 className='text-5xl font-bold mb-20'>ChatGPT</h1>
      
      <div className='flex items-center space-x-2 text-center'>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <SunIcon className='h-8 w-8'/>
            <h2>Examples</h2>
          </div>
            
          <div space-y-2>
            <p className='infoText'>Explain Something to me</p>
            <p className='infoText'>Summarise documents and blog posts.</p>
            <p className='infoText'>Write, debug and explain code.</p>
          </div>          
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <BoltIcon className='h-8 w-8'/>
            <h2>Capabilities</h2>
          </div>
            
          <div space-y-2>
            <p className='infoText'>Language translation</p>
            <p className='infoText'>Generate conversations and replies</p>
            <p className='infoText'>Remembers what user said earlier in the conversation</p>
          </div>          
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <ExclamationTriangleIcon className='h-8 w-8'/>
            <h2>Limitations</h2>
          </div>
            
          <div space-y-2>
            <p className='infoText'>It can't multitask.</p>
            <p className='infoText'>Occasionally generate incorrect information</p>
            <p className='infoText'>Knowledge base is limited to September 2021.</p>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default HomePage
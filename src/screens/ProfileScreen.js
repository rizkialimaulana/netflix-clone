import React from 'react'
import Navbar from '../components/Navbar'
import avatar from '../assets/img/avatar.png'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
const ProfileScreen = () => {
  return (
    <>
        <Navbar />
        <div className='relative h-screen bg-black text-white flex items-center justify-center'>
            <div className='flex flex-col space-y-4'>
                <h1 className='text-4xl'>Edit Profile</h1>
                <div className='flex space-x-4'>
                    <img src={avatar} alt="" className='w-20 h-20' />
                    <div className='flex flex-col w-[30rem] space-y-4'>
                        <h1 className='bg-gray-500 py-2 pl-2'>test@gmail.com</h1>
                        <h1 className='text-xl'>Plans (Current Plan : premium)</h1>
                        <span className='text-gray-300'>Renewal date : 04/11/2022</span>
                        <div className='py-2 pl-2 flex flex-col space-y-6'>
                            <div className='flex flex-row items-center justify-between'>
                                <div className='flex flex-col'>
                                    <span className='text-lg'>Netflix Standard</span>
                                    <p className='text-sm'>1080p</p>
                                </div>
                                <button className='py-2 px-5 bg-red-500'>Subscribe</button>
                            </div>
                            <div className='flex flex-row items-center justify-between'>
                                <div className='flex flex-col'>
                                    <span className='text-lg'>Netflix Basic</span>
                                    <p className='text-sm'>480p</p>
                                </div>
                                <button className='py-2 px-5 bg-red-500'>Subscribe</button>
                            </div>
                            <div className='flex flex-row items-center justify-between'>
                                <div className='flex flex-col'>
                                    <span className='text-lg'>Netflix Premium</span>
                                    <p className='text-sm'>4K + HDR</p>
                                </div>
                                <button className='py-2 px-5 bg-gray-500'>Current Package</button>
                            </div>
                        </div>
                        <button className='bg-red-500 py-2' onClick={() => signOut(auth)}>Sign out</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProfileScreen
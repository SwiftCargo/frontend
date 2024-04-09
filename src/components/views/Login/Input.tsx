import { RiUser3Line, RiKeyLine } from '@remixicon/react'
import Link from 'next/link'

export default async function Input() {
    return (
        <div className="flex flex-col w-full">
            <label className="hidden md:flex text-start mb-2 text-sm font-medium text-white">Your Username</label>
            <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <RiUser3Line size={16} className='text-gray-500' />
                </div>
                <input type="text" className="outline-none order 0 text-sm rounded-lg focus:ring-primary-700 focus:border-primary-700 block w-full ps-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white w-f" placeholder="pikushe" />
            </div>

            <label className="hidden md:flex text-start mb-2 text-xs md:text-sm font-medium text-white">Your Password</label>
            <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <RiKeyLine size={16} className='text-gray-500' />
                </div>
                <input type="password" className="outline-none order 0 text-sm rounded-lg focus:ring-primary-700 focus:border-primary-700 block w-full ps-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white w-f" placeholder="*******" />
            </div>

            <div className='flex flex-row justify-between'>
                <div className="flex items-center">
                    <input type="checkbox" value="" className=" outline-none w-3.5 h-3.5 text-primary-600 rounded  focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" />
                    <label className="ms-1 text-xs font-medium text-gray-400 ">Remember me</label>
                </div>

                <Link href={'/forgot-password'} className='text-xs font-medium text-gray-300 hover:text-primary-500 underline'>Forgot Password!</Link>
            </div>
        </div>
    )
}
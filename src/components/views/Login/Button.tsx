import { RiDiscordFill, RiGoogleFill, RiSteamFill } from '@remixicon/react'
export default async function Button() {
    return (
        <div className="flex flex-col gap-1 md:gap-2 w-full text-xs md:text-base">
            <button className="bg-gray-800 p-4 rounded-t-lg hover:bg-gray-600">
                Sign in
            </button>
            <div className="hidden md:flex text-gray-600 font-bold justify-center">Or</div>
            <button className="flex flex-row bg-gray-700 text-gray-400 p-2.5 hover:bg-gray-600 hover:text-white items-center justify-between w-auto gap-2 transition-all duration-400 ease-in-out">
                <RiDiscordFill size={18} />
                <span className='w-full'>Sign in with Discord</span>
            </button>
            <button className="flex flex-row bg-gray-700 text-gray-400 p-2.5 hover:bg-gray-600 hover:text-white items-center justify-between w-auto gap-2 transition-all duration-400 ease-in-out">
                <RiGoogleFill size={18} />
                <span className='w-full'>Sign in with Google</span>
            </button>
            <button className="flex flex-row bg-gray-700 text-gray-400 p-2.5 rounded-b-lg hover:bg-gray-600 hover:text-white items-center justify-between w-auto gap-2 transition-all duration-400 ease-in-out">
                <RiSteamFill size={18} />
                <span className='w-full'>Sign in with Steam</span>
            </button>
        </div>
    )
}
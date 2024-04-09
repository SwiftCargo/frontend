import Image from "next/image";
import UserAvatar from "../../../../public/userPhoto.jpg";
import { RiMore2Fill } from '@remixicon/react';
export default function Account() {
    return (
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-1 items-center">
                <div className="w-full">
                    <Image src={UserAvatar} alt="User Avatar" width={40} height={40} className="rounded-full" />
                </div>
                <div className="flex flex-col gap text-sm hover:bg-surface-900 w-full px-4 py-2 rounded transition-all">
                    <label className="font-bold">pikushe</label>
                    <span className="text-xs font-thin text-slate-300">Developer</span>
                </div>
            </div>
            <div className="p-2 rounded-full hover:bg-primary-600 cursor-pointer transition-all">
                <RiMore2Fill size={20} />
            </div>
        </div>
    );
}
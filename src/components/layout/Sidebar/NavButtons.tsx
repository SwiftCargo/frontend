import { cn } from '@/lib/utils';
import { RiHomeLine, RiNewsLine, RiCalendarEventLine, RiTruckLine, RiBarChartLine, RiGroupLine, RiArrowDropDownLine, RiArrowDropUpLine, RiZzzLine } from '@remixicon/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface Props {
    userID?: string;
}
export default function NavButtons(props: Props) {
    const [subNav, setSubNav] = useState(false)
    const router = usePathname();

    const showSubnav = () => setSubNav(!subNav);

    const subNavItem = [
        {
            title: 'My Jobs',
            path: `/jobs/${props.userID}`,
        },
        {
            title: 'All Jobs',
            path: '/jobs/all',
            cName: 'sub-nav'
        }
    ]
    return (
        <div className="flex flex-col gap-1 text-base w-full">
            <Link href={'/'} className={cn("flex flex-row gap-3 bg-transparent font-thin hover:bg-primary-600 py-4 px-2 rounded-lg items-center transition-all", router === '/' ? 'bg-primary-800' : 'bg-transparent')}>
                <RiHomeLine size={20} />
                <label>Home</label>
            </Link>
            <Link href={'/news'} className={cn("flex flex-row gap-3 bg-transparent font-thin hover:bg-primary-600 py-4 px-2 rounded-lg items-center transition-all", router === '/news' ? 'bg-primary-800' : 'bg-transparent')}>
                <RiNewsLine size={20} />
                <label>News</label>
            </Link>
            <Link href={'/events'} className={cn("flex flex-row gap-3 bg-transparent font-thin hover:bg-primary-600 py-4 px-2 rounded-lg items-center transition-all", router === '/events' ? 'bg-primary-800' : 'bg-transparent')}>
                <RiCalendarEventLine size={20} />
                <label>Events</label>
            </Link>
            <div className='flex flex-col gap-2'>
                <div onClick={showSubnav} className={cn("cursor-pointer w-full flex flex-col gap-3 bg-transparent font-thin 0 py-4 px-2 rounded-lg  transition-all", router === '/jobs' ? 'hover:bg-transparent' : 'hover:bg-primary-600')}>
                    <div className='flex flex-row items-center'>
                        <div className='flex flex-row gap-3 w-full'>
                            <RiTruckLine size={20} />
                            <label>Jobs</label>
                        </div>
                        {subNav ? <RiArrowDropUpLine size={25} /> : <RiArrowDropDownLine size={25} />}
                    </div>

                </div>
                {subNav &&
                    subNavItem.map((item, index) => {
                        return (
                            <Link href={item.path} key={index} className={cn('flex flex-col gap-1 rounded-md  p-2 mx-6 items-center', router === item.path ? 'bg-primary-800' : 'hover:bg-primary-600')}>
                                <label>{item.title}</label>
                            </Link>
                        );
                    })}
            </div>
            <Link href={'/leaderboard'} className={cn("flex flex-row gap-3 bg-transparent font-thin hover:bg-primary-600 py-4 px-2 rounded-lg items-center transition-all", router === '/leaderboard' ? 'bg-primary-800' : 'bg-transparent')}>
                <RiBarChartLine size={20} />
                <label>Leaderboard</label>
            </Link>
            <Link href={'/members'} className={cn("flex flex-row gap-3 bg-transparent font-thin hover:bg-primary-600 py-4 px-2 rounded-lg items-center transition-all", router === '/members' ? 'bg-primary-800' : 'bg-transparent')}>
                <RiGroupLine size={20} />
                <label>Members</label>
            </Link>
            <Link href={'/loa'} className={cn("flex flex-row w-full gap-3 bg-transparent font-thin hover:bg-primary-600 py-4 px-2 rounded-lg items-center transition-all", router === '/members' ? 'bg-primary-800' : 'bg-transparent')}>
                <RiZzzLine size={20} />
                <label>LOA</label>
            </Link>
        </div>
    );
}
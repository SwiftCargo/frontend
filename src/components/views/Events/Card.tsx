'use client'

import Image from "next/image"
import Route from "../../../../public/example-route.png"
import { RiParkingLine, RiTimeLine, RiRouteLine, RiCalendarEventLine, RiExternalLinkLine } from '@remixicon/react';
import React from 'react';
import Link from "next/link";

interface Props {
    image?: string;
    title: string;
    date: string;
    location: string;
    destination: string;
    meetupTime: string;
    departureTime: string;
    link?: string;
}

export default function EventsCard({ image, title, date, location, destination, meetupTime, departureTime, link }: Props) {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
        <div className="relative flex flex-col gap-2 bg-surface-700 rounded-lg transition-all"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div>
                <div className="w-full">
                    <Image src={image ? image : Route} alt="..." width={450} height={300} className="rounded-t-xl w-full" />
                    {
                        isHovered && (
                            <Link href={link ? link : "https://truckersmp.com/vtc/71075"} className="cursor-pointer absolute inset-0 flex gap-1 items-center rounded-lg justify-center bg-black bg-opacity-50 text-white text-2xl font-semibold transition-opacity duration-300 opacity-0 hover:opacity-100">
                                <RiExternalLinkLine size={45} className="text-surface-300" />
                                <span className="font-semibold">Review</span>
                            </Link>
                        )
                    }
                </div>
                <div className="flex flex-col gap bg-surface-500 rounded-b-xl md:w-full px-2 ">
                    <div className="flex flex-col gap-1 w-full">
                        <h2 className="text-lg w-full">{title}</h2>
                        <h4 className="flex flex-row gap-1 text-surface-400 text-xs"><RiCalendarEventLine size={15} />{date}</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-1 pb-1">
                        <div className="flex flex-row gap-2 items-center bg-surface-600 rounded-xl p-2">
                            <div className="p-2 bg-[#3a3b64] rounded-xl">
                                <RiParkingLine size={20} color="#7367f0" />
                            </div>
                            <div className="flex flex-col text-sm">
                                <span className="text-start text-surface-300">Location</span>
                                <span>{location}</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center bg-surface-600 rounded-xl p-2">
                            <div className="p-2 bg-[#64633a] rounded-xl">
                                <RiTimeLine size={20} color="#d7f067" />
                            </div>
                            <div className="flex flex-col text-sm">
                                <span className="text-start text-surface-300">Meetup Time</span>
                                <span>{meetupTime}</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center bg-surface-600 rounded-xl p-2">
                            <div className="p-2 bg-[#3a3b64] rounded-xl">
                                <RiRouteLine size={20} color="#7367f0" />
                            </div>
                            <div className="flex flex-col text-sm">
                                <span className="text-start text-surface-300">Destination</span>
                                <span>{destination}</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center bg-surface-600 rounded-xl p-2">
                            <div className="p-2 bg-[#64633a] rounded-xl">
                                <RiTimeLine size={20} color="#d7f067" />
                            </div>
                            <div className="flex flex-col text-sm">
                                <span className="text-start text-surface-300">Departure Time</span>
                                <span>{departureTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
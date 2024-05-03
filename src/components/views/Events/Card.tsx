import Image from "next/image"
import Route from "../../../../public/example-route.png"
import { RiParkingLine, RiTimeLine, RiRouteLine, RiCalendarEventLine } from '@remixicon/react';

export default async function EventsCard() {
    return (
        <div className="flex flex-col gap-2 bg-surface-700 rounded-lg">
            <div>
                <div className="w-full">
                    <Image src={Route} alt="..." width={450} height={300} className="rounded-t-xl w-full" />
                </div>
                <div className="flex flex-col gap bg-surface-500 rounded-b-xl md:w-full px-2">
                    <div className="flex flex-col gap-1 w-full">
                        <h2 className="text-lg w-full">LEO COMMUNITY & FRIENDS CONVOY #13</h2>
                        <h4 className="flex flex-row gap-1 text-surface-400 text-xs"><RiCalendarEventLine size={15} />9 May 2024</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-1 pb-1">
                        <div className="flex flex-row gap-2 items-center bg-surface-600 rounded-xl p-2">
                            <div className="p-2 bg-[#3a3b64] rounded-xl">
                                <RiParkingLine size={20} color="#7367f0" />
                            </div>
                            <div className="flex flex-col text-sm">
                                <span className="text-start text-surface-300">Location</span>
                                <span>Daugavpils</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center bg-surface-600 rounded-xl p-2">
                            <div className="p-2 bg-[#64633a] rounded-xl">
                                <RiTimeLine size={20} color="#d7f067" />
                            </div>
                            <div className="flex flex-col text-sm">
                                <span className="text-start text-surface-300">Meetup Time</span>
                                <span>17:00 UTC</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center bg-surface-600 rounded-xl p-2">
                            <div className="p-2 bg-[#3a3b64] rounded-xl">
                                <RiRouteLine size={20} color="#7367f0" />
                            </div>
                            <div className="flex flex-col text-sm">
                                <span className="text-start text-surface-300">Destination</span>
                                <span>Saint Petersburg</span>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center bg-surface-600 rounded-xl p-2">
                            <div className="p-2 bg-[#64633a] rounded-xl">
                                <RiTimeLine size={20} color="#d7f067" />
                            </div>
                            <div className="flex flex-col text-sm">
                                <span className="text-start text-surface-300">Departure Time</span>
                                <span>18:00 UTC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full">
                <button className="bg-primary-500 w-full p-2 rounded-xl hover:bg-primary-700 transition-colors">Review</button>
            </div>
        </div >
    )
}
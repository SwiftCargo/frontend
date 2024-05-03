import EventsCard from "@/components/views/Events/Card";

export default function Events() {
    return (
        <div className="flex flex-col gap-1 md:py-1 md:pr-6 w-full">
            <div>
                <h1 className="text-3xl font-thin">Swift Cargo <span className="text-primary-600 font-bold">Events</span></h1>
            </div>
            <div className="md:grid grid-cols-4 gap-2 gap-y-1">
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
            </div>
        </div>
    );
}

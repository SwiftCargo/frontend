import EventsCard from "@/components/views/Events/Card";
import PageHead from "@/components/views/PageHead";

export default function Events() {
    return (
        <div className="flex flex-col gap-1 md:py-6 md:pr-6 w-full">
            <PageHead>Swift Cargo <span className="text-primary-600 font-bold">Events</span></PageHead>
            <div className="md:grid grid-cols-4 gap-x-3 gap-y-11">
                <EventsCard title="Leo" date="19 May 2024" location="Daugavpils" destination="Saint Petersburg" meetupTime="17:00 UTC" departureTime="18:00 UTC" />
                <EventsCard title="Leo" date="19 May 2024" location="Daugavpils" destination="Saint Petersburg" meetupTime="17:00 UTC" departureTime="18:00 UTC" />
                <EventsCard title="Leo" date="19 May 2024" location="Daugavpils" destination="Saint Petersburg" meetupTime="17:00 UTC" departureTime="18:00 UTC" />
                <EventsCard title="Leo" date="19 May 2024" location="Daugavpils" destination="Saint Petersburg" meetupTime="17:00 UTC" departureTime="18:00 UTC" />
                <EventsCard title="Leo" date="19 May 2024" location="Daugavpils" destination="Saint Petersburg" meetupTime="17:00 UTC" departureTime="18:00 UTC" />
                <EventsCard title="Leo" date="19 May 2024" location="Daugavpils" destination="Saint Petersburg" meetupTime="17:00 UTC" departureTime="18:00 UTC" />
                <EventsCard title="Leo" date="19 May 2024" location="Daugavpils" destination="Saint Petersburg" meetupTime="17:00 UTC" departureTime="18:00 UTC" />
                <EventsCard title="Leo" date="19 May 2024" location="Daugavpils" destination="Saint Petersburg" meetupTime="17:00 UTC" departureTime="18:00 UTC" />
            </div>
        </div>
    );
}

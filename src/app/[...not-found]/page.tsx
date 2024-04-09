import Link from "next/link";

export default function Error() {
    return (
        <div className="flex h-full w-screen md:w-full text-center justify-center">
            <div className="flex flex-col gap-6 md:gap-10 text-center justify-center md:m-auto">
                <div className="flex flex-col gap-4">
                    <h1 className="text-7xl md:text-9xl">Oops!</h1>
                    <h4 className="text-sm md:text-xl">Error 404: Page <span className="text-red-600">Not Found</span></h4>
                </div>
                <div className="p-2 md:p-4 bg-gray-600 rounded items-center hover:bg-gray-400 transition-all text-sm md:text-base">
                    <Link href={'/'}>Go to Homepage</Link>
                </div>
            </div>
        </div>
    );
}

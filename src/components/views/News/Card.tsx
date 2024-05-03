import Image from "next/image"
import Logo from "../../../../public/swift-background.jpg"
import Link from "next/link";

export default async function NewsCard() {
    const truncateDescription = (text: string, maxLength: number) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };
    return (
        <div className="flex flex-col gap-2 p-4 bg-surface-700 rounded-lg">
            <div className="bg-surface-500 rounded-xl md:w-full h-full">
                <div className="w-full">
                    <Image src={Logo} alt="..." width={350} height={300} className="rounded-t-xl w-full" />
                </div>
                <div className="flex flex-col gap-2 px-2 py-2 w-full">
                    <h3 className="text-lg text-center w-full"><span className="text-primary-500">#TMP10</span> Swift Meeting</h3>
                    {/* //TODO: Text wrap */}
                    <p className="block break-words w-full text-sm text-surface-300">{truncateDescription("qwdwqdwqdqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdwqwdwqdwqdw", 100)}</p>
                </div>
            </div>
            <div className="flex w-full">
                <button className="bg-primary-500 w-full p-2 rounded-xl hover:bg-primary-700 transition-colors">Read More</button>
            </div>
        </div>
    )
}
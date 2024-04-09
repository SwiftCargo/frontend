import Image from "next/image";
import Logo from "../../../../public/swift.png";
import Link from "next/link";
export default function Head() {
    return (
        <Link href={'/'} className="w-full">
            <div className="flex flex-row gap-2 items-center text-xl w-full">
                <h1 className="font-medium mb-9">Swift</h1>
                <Image src={Logo} alt="Logo" width={40} height={40} />
                <h1 className="font-thin mt-9">Cargo</h1>
            </div>
        </Link>
    );
}
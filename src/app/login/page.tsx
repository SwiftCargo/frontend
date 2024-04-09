import Image from "next/image";
import Logo from '../../../public/swift.png'
import Input from "@/components/views/Login/Input";
import Button from "@/components/views/Login/Button";
export default function Login() {
    return (
        <div className="flex h-full w-full absolute text-center justify-center overflow-hidden">
            <div className="flex flex-col gap-16 text-center justify-center m-auto ">

                {/*<div className="flex flex-row gap-2 items-center text-5xl">
                    <h1 className="font-medium mb-9">Swift</h1>
                    <Image src={Logo} alt="Logo" width={80} height={80}/>
                    <h1 className="font-thin mt-9">Cargo</h1>
                </div>*/}
                <div className="flex flex-col gap-2 md:gap-6 p-10 md:p-16 bg-surface-800 rounded-lg w-full">
                    <div className="hidden md:flex flex-row gap-2 items-center text-5xl mb-6">
                        <h1 className="font-medium mb-9">Swift</h1>
                        <Image src={Logo} alt="Logo" width={80} height={80} />
                        <h1 className="font-thin mt-9">Cargo</h1>
                    </div>
                    <h3 className="text-lg md:text-2xl  font-extralight text-gray-400">Log in to your account</h3>
                    <Input />
                    <Button />
                </div>
            </div>
        </div>
    );
}

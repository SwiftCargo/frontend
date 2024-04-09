export default function Card({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className=" w-[350px] p-4 bg-surface-700 rounded shadow-md">
            <div className=" flex flex-col md:flex-row gap-3 items-center">
                {children}
            </div>
        </div>
    );
}
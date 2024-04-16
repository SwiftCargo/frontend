export default function InformationCard({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className=" w-[360px] p-4 bg-surface-700 rounded-lg shadow-md">
            <div className=" flex flex-col md:flex-row items-center w-full">
                {children}
            </div>
        </div>
    );
}
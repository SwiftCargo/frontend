export default function PageHead({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="mb-8">
            <h1 className="text-3xl font-thin">{children}</h1>
        </div>
    )
}
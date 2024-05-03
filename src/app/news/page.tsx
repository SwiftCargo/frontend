import NewsCard from "@/components/views/News/Card";

export default function News() {
    return (
        <div className="flex flex-col gap-8 md:py-6 md:pr-6 w-full">
            <div>
                <h1 className="text-3xl font-thin">Swift Cargo <span className="text-primary-600 font-bold">News</span></h1>
            </div>
            <div className="md:grid grid-cols-4 gap-3 gap-y-8">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    );
}

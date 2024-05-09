import NewsCard from "@/components/views/News/Card";
import PageHead from "@/components/views/PageHead";

export default function News() {
    return (
        <div className="flex flex-col md:py-6 md:pr-6 w-full">
            <PageHead>Swift Cargo <span className="text-primary-600 font-bold">News</span></PageHead>
            <div className="md:grid grid-cols-4 gap-3 gap-y-9">
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

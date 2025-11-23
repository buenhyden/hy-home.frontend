import { Search } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import VideoCard from '../components/features/video/VideoCard';
import { useStore } from '../store/useStore';

const Home = () =>
{
    const { videos, fetchVideos, deleteVideo, isLoading, isAuthenticated } = useStore();
    const [search, setSearch] = useState('');
    const [filterCategory, setFilterCategory] = useState('All');

    useEffect(() =>
    {
        fetchVideos();
    }, [fetchVideos]);

    const categories = useMemo(() =>
    {
        return ['All', ...new Set(videos.map(v => v.category))];
    }, [videos]);

    const filteredVideos = useMemo(() =>
    {
        return videos.filter(v =>
        {
            const matchesSearch = v.title.toLowerCase().includes(search.toLowerCase()) ||
                v.description.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = filterCategory === 'All' || v.category === filterCategory;
            return matchesSearch && matchesCategory;
        });
    }, [videos, search, filterCategory]);

    return (
        <>
            {/* Hero Section */}
            <div className="relative overflow-hidden border-b border-slate-800 bg-slate-900/50">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-6 tracking-tight">
                        Visual Storyteller
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Creative Director & Motion Designer. <br className="hidden sm:block" />
                        브랜드의 가치를 시각적 언어로 통역하는 작업을 합니다.
                    </p>

                    {/* Search & Filter Bar */}
                    <div className="max-w-3xl mx-auto bg-slate-900 p-2 rounded-2xl border border-slate-700 shadow-2xl flex flex-col sm:flex-row gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                className="w-full bg-transparent border-none text-white placeholder-slate-500 pl-10 pr-4 py-2 focus:outline-none focus:ring-0"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-1 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilterCategory(cat)}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${ filterCategory === cat
                                        ? 'bg-slate-700 text-white shadow-sm'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content: Video Grid */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {isLoading ? (
                    <div className="text-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-4"></div>
                        <p className="text-slate-500">Loading masterpiece...</p>
                    </div>
                ) : filteredVideos.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredVideos.map((video) => (
                            <VideoCard
                                key={video.id}
                                video={video}
                                isAdmin={isAuthenticated}
                                onDelete={deleteVideo}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 border border-dashed border-slate-800 rounded-3xl bg-slate-900/30">
                        <p className="text-slate-500 text-lg">No projects found matching your criteria.</p>
                        <button onClick={() => { setSearch(''); setFilterCategory('All') }} className="mt-4 text-indigo-400 hover:underline">
                            Clear filters
                        </button>
                    </div>
                )}
            </main>
        </>
    );
};

export default Home;
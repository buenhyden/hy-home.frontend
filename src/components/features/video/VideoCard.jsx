import { Play, Trash2 } from 'lucide-react';

const VideoCard = ({ video, isAdmin, onDelete }) => {
  return (
    <div className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1">
      {/* Thumbnail */}
      <div className="aspect-video bg-slate-900 relative overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          onError={(e) => {
            e.target.src =
              'https://placehold.co/640x360/1e293b/cbd5e1.png?text=No+Image';
          }}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={video.url}
            target="_blank"
            rel="noreferrer"
            className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white hover:bg-white hover:text-indigo-600 transition-colors transform scale-90 group-hover:scale-100"
          >
            <Play fill="currentColor" size={24} />
          </a>
        </div>
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-xs font-medium text-white px-2.5 py-1 rounded-full border border-white/10">
          {video.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-white line-clamp-1 group-hover:text-indigo-400 transition-colors">
            {video.title}
          </h3>
        </div>
        <p className="text-slate-400 text-sm line-clamp-2 mb-4 h-10">
          {video.description}
        </p>

        {isAdmin && (
          <div className="flex justify-end border-t border-slate-700 pt-3">
            <button
              onClick={() => onDelete(video.id)}
              className="text-red-400 text-xs flex items-center gap-1 hover:text-red-300 transition-colors"
            >
              <Trash2 size={14} /> 삭제하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;

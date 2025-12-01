import React, { useState } from 'react';
import { 
  Upload, Eye, Moon, Sun, Monitor, Smartphone, 
  Search, MoreVertical, User, Tv
} from 'lucide-react';

export default function ThumbTest() {
  // --- State Management ---
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [title, setTitle] = useState("I Built a SaaS in 24 Hours (And You Can Too)");
  const [channelName, setChannelName] = useState("Indie Hacker");
  const [views, setViews] = useState("125K views");
  const [timeAgo, setTimeAgo] = useState("2 days ago");
  
  // Toggles
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isBlurred, setIsBlurred] = useState(false);

  // --- Handlers ---
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setThumbnail(event.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  // --- Layout Components ---

  // 1. Mobile Homepage View
  const MobileView = () => (
    <div className={`w-[375px] shrink-0 border-x transition-colors duration-300 ${isDarkMode ? 'bg-[#0f0f0f] border-zinc-800' : 'bg-white border-zinc-200'} pb-8 shadow-2xl`}>
        {/* Fake YouTube Mobile Header */}
        <div className={`h-12 flex items-center justify-between px-4 mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <div className="flex items-center gap-4">
                <span className="font-bold tracking-tighter text-xl flex items-center gap-1 font-sans">
                    <div className="w-7 h-5 bg-red-600 rounded-[4px] flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[6px] border-l-white border-b-[3px] border-b-transparent ml-0.5"></div>
                    </div> 
                    YouTube
                </span>
            </div>
            <div className="flex gap-4 items-center">
                <Search size={22} strokeWidth={1.5} />
                <div className="w-6 h-6 rounded-full bg-purple-600 text-white text-[10px] flex items-center justify-center font-bold">IH</div>
            </div>
        </div>

        {/* Categories Pills */}
        <div className={`flex gap-2 px-3 py-2 overflow-x-hidden text-sm mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <span className={`px-3 py-1.5 rounded-lg text-xs font-medium ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>All</span>
            <span className={`px-3 py-1.5 rounded-lg text-xs font-medium ${isDarkMode ? 'bg-zinc-800 text-white' : 'bg-zinc-100 text-black'}`}>Gaming</span>
            <span className={`px-3 py-1.5 rounded-lg text-xs font-medium ${isDarkMode ? 'bg-zinc-800 text-white' : 'bg-zinc-100 text-black'}`}>SaaS</span>
        </div>

        {/* The User's Video Card */}
        <div className="flex flex-col mb-1 opacity-100">
            {/* Thumbnail Container */}
            <div className="relative aspect-video w-full bg-zinc-800 group overflow-hidden">
                {thumbnail ? (
                    <img 
                        src={thumbnail} 
                        className={`w-full h-full object-cover transition-all duration-300 ${isBlurred ? 'blur-[5px]' : ''}`} 
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-zinc-500 gap-2">
                        <Upload size={32} />
                        <span className="text-xs">Upload Thumbnail</span>
                    </div>
                )}
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded-[4px] font-medium">
                    12:42
                </span>
            </div>
            
            {/* Meta Data */}
            <div className="flex gap-3 px-3 py-3">
                <div className="w-9 h-9 rounded-full bg-purple-600 shrink-0 text-white flex items-center justify-center text-xs font-bold">IH</div>
                <div className="flex flex-col gap-0.5 pr-6 w-full">
                    <h3 className={`text-[16px] leading-[1.3rem] font-medium line-clamp-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        {title || "Video Title Goes Here"}
                    </h3>
                    <div className="text-[12px] text-zinc-400 flex items-center gap-1">
                        {channelName} • {views} • {timeAgo}
                    </div>
                </div>
                <MoreVertical size={18} className={`shrink-0 ml-auto ${isDarkMode ? 'text-white' : 'text-black'}`} />
            </div>
        </div>

        {/* Fake Next Video (Distraction) */}
        <div className="flex flex-col opacity-40 pointer-events-none">
            <div className="aspect-video w-full bg-zinc-700 mb-3"></div>
            <div className="flex gap-3 px-3">
                <div className="w-9 h-9 rounded-full bg-zinc-600 shrink-0"></div>
                <div className="flex flex-col gap-2 w-full mt-1">
                    <div className="h-4 bg-zinc-700 rounded w-10/12"></div>
                    <div className="h-3 bg-zinc-700 rounded w-1/2"></div>
                </div>
            </div>
        </div>
    </div>
  );

  // 2. Desktop Sidebar View
  const SidebarView = () => (
    <div className={`w-[400px] shrink-0 p-4 border transition-colors duration-300 ${isDarkMode ? 'bg-[#0f0f0f] border-zinc-800' : 'bg-white border-zinc-200'} shadow-xl`}>
         {/* Sidebar Header */}
         <div className={`flex justify-between mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
             <h4 className="font-medium text-lg">Up Next</h4>
             <span className="text-xs font-bold uppercase tracking-wide text-zinc-500 mt-1">Autoplay</span>
         </div>

         {/* The User's Video */}
         <div className="flex gap-2 mb-3">
            <div className="relative w-[168px] aspect-video bg-zinc-800 shrink-0 rounded-lg overflow-hidden group">
                {thumbnail ? (
                    <img 
                        src={thumbnail} 
                        className={`w-full h-full object-cover transition-all duration-300 ${isBlurred ? 'blur-[5px]' : ''}`} 
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-500">
                        <Upload size={20} />
                    </div>
                )}
                <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded font-medium">
                    12:42
                </span>
            </div>
            <div className="flex flex-col gap-1 pr-2">
                <h3 className={`text-sm font-semibold leading-tight line-clamp-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    {title || "Video Title Goes Here"}
                </h3>
                <div className="text-xs text-zinc-400 mt-0.5">
                    {channelName}<br/>
                    {views} • {timeAgo}
                </div>
            </div>
         </div>

         {/* Fake Neighbors */}
         {[1, 2, 3].map(i => (
             <div key={i} className="flex gap-2 mb-3 opacity-40">
                <div className="w-[168px] aspect-video bg-zinc-700 shrink-0 rounded-lg"></div>
                <div className="flex flex-col gap-2 w-full mt-1">
                    <div className="h-3 bg-zinc-700 rounded w-11/12"></div>
                    <div className="h-3 bg-zinc-700 rounded w-2/3"></div>
                </div>
             </div>
         ))}
    </div>
  );

  // 3. Television View (New)
  const TvView = () => (
    <div className="w-[480px] shrink-0 p-8 bg-[#1a1a1a] rounded-xl shadow-2xl border border-zinc-800 relative overflow-hidden">
        {/* TV Interface Background Effect */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>

        {/* TV Header */}
        <div className="flex items-center gap-3 mb-8 text-zinc-400">
            <div className="w-8 h-8 rounded-full bg-zinc-700"></div>
            <span className="text-sm font-medium">Recommended for you</span>
        </div>

        {/* The Selected Card (Simulating "Active" State) */}
        <div className="transform scale-105 transition-transform duration-300 origin-center mb-6">
            <div className={`relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl border-[4px] ${isDarkMode ? 'border-white' : 'border-zinc-900'}`}>
                {thumbnail ? (
                    <img 
                        src={thumbnail} 
                        className={`w-full h-full object-cover ${isBlurred ? 'blur-[5px]' : ''}`} 
                    />
                ) : (
                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-500">
                        <Tv size={48} />
                    </div>
                )}
                <div className="absolute bottom-3 right-3 bg-black/90 text-white text-xs px-2 py-1 rounded font-bold tracking-wide">
                    12:42
                </div>
            </div>
        </div>

        {/* TV Meta Data */}
        <div className="flex flex-col gap-2 px-1">
            <h3 className="text-xl font-bold text-white line-clamp-2 leading-snug">
                {title || "Video Title Goes Here"}
            </h3>
            <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium">
                <span>{channelName}</span>
                <span>•</span>
                <span>{views}</span>
                <span>•</span>
                <span>{timeAgo}</span>
            </div>
            {/* Description Preview (Common on TV) */}
            <div className="mt-2 text-zinc-500 text-xs line-clamp-2 leading-relaxed max-w-[90%]">
                This is a preview of how the video description might look on a large television screen interface.
            </div>
        </div>
    </div>
  );

  // --- Main Render ---
  return (
    <div className={`min-h-screen font-sans flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-black text-zinc-300' : 'bg-slate-50 text-slate-600'}`}>
      
      {/* --- Top Toolbar --- */}
      <div className={`h-16 border-b flex items-center justify-between px-4 lg:px-6 sticky top-0 z-50 backdrop-blur-md ${isDarkMode ? 'bg-black/80 border-zinc-800' : 'bg-white/80 border-zinc-200'}`}>
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-red-900/40">
                <Eye size={20} />
            </div>
            <h1 className={`text-lg font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>ThumbTest</h1>
        </div>

        <div className="flex items-center gap-3">
             <button 
                onClick={() => setIsBlurred(!isBlurred)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${isBlurred ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}
             >
                 <Eye size={16} />
                 {isBlurred ? 'Blur ON' : 'Blur OFF'}
             </button>

             <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full transition-all ${isDarkMode ? 'bg-zinc-800 text-yellow-400 hover:bg-zinc-700' : 'bg-zinc-200 text-slate-700 hover:bg-zinc-300'}`}
             >
                 {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
             </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden h-[calc(100vh-64px)]">
          
          {/* --- Editor Sidebar (Left) --- */}
          <div className={`w-full lg:w-[360px] border-r flex flex-col p-6 gap-6 overflow-y-auto shrink-0 z-10 ${isDarkMode ? 'bg-[#121212] border-zinc-800' : 'bg-white border-zinc-200'}`}>
              
              {/* Image Input */}
              <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider block opacity-70 flex items-center gap-2">
                    <Monitor size={14} /> Thumbnail Source
                  </label>
                  <label className={`aspect-video w-full rounded-xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all group overflow-hidden relative shadow-inner ${isDarkMode ? 'border-zinc-700 hover:bg-zinc-800 hover:border-zinc-500' : 'border-zinc-300 hover:bg-slate-50 hover:border-indigo-400'}`}>
                        {thumbnail ? (
                            <>
                                <img src={thumbnail} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                                <div className="z-10 bg-black/50 text-white px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity font-medium text-sm">
                                    <Upload size={16} /> Change Image
                                </div>
                            </>
                        ) : (
                            <>
                                <Upload className="mb-2 opacity-40 group-hover:scale-110 transition-transform duration-300" size={32} />
                                <span className="text-xs opacity-50 font-medium">Click to upload thumbnail</span>
                            </>
                        )}
                        <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                  </label>
              </div>

              {/* Text Inputs */}
              <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider block opacity-70">Video Title</label>
                    <textarea 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter your clickable title..."
                        className={`w-full p-3 rounded-lg text-sm bg-transparent border outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none h-24 leading-relaxed ${isDarkMode ? 'border-zinc-700 focus:border-blue-500' : 'border-zinc-300'}`}
                    />
                    <div className="flex justify-end">
                        <span className={`text-[10px] font-bold ${title.length > 60 ? 'text-red-500' : 'text-green-500'}`}>
                            {title.length} / 100 CHARS
                        </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider block opacity-70">Channel Name</label>
                    <div className="relative">
                        <User size={16} className="absolute left-3 top-3 opacity-30" />
                        <input 
                            type="text"
                            value={channelName}
                            onChange={(e) => setChannelName(e.target.value)}
                            className={`w-full pl-9 p-2.5 rounded-lg text-sm bg-transparent border outline-none focus:ring-2 focus:ring-blue-600 transition-all ${isDarkMode ? 'border-zinc-700' : 'border-zinc-300'}`}
                        />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider block opacity-70">Views</label>
                        <input 
                            type="text"
                            value={views}
                            onChange={(e) => setViews(e.target.value)}
                            className={`w-full p-2.5 rounded-lg text-sm bg-transparent border outline-none focus:ring-2 focus:ring-blue-600 transition-all ${isDarkMode ? 'border-zinc-700' : 'border-zinc-300'}`}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider block opacity-70">Uploaded</label>
                        <input 
                            type="text"
                            value={timeAgo}
                            onChange={(e) => setTimeAgo(e.target.value)}
                            className={`w-full p-2.5 rounded-lg text-sm bg-transparent border outline-none focus:ring-2 focus:ring-blue-600 transition-all ${isDarkMode ? 'border-zinc-700' : 'border-zinc-300'}`}
                        />
                      </div>
                  </div>
              </div>

              <div className={`mt-auto p-4 rounded-xl border text-xs leading-relaxed opacity-60 ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-50 border-slate-200'}`}>
                  <p><strong>Pro Tip:</strong> Use the "Blur" toggle to ensure your thumbnail subject is visible even when not perfectly focused. This mimics a user scrolling fast.</p>
              </div>
          </div>

          {/* --- Preview Canvas (Right) --- */}
          <div className="flex-1 overflow-y-auto p-8 lg:p-12 flex flex-wrap gap-16 justify-center content-start bg-opacity-50">
              
              {/* Mobile Preview Block */}
              <div className="flex flex-col gap-4 items-center">
                  <div className="flex items-center gap-2 opacity-50">
                      <Smartphone size={16} />
                      <span className="text-xs font-bold uppercase tracking-wide">Mobile Feed</span>
                  </div>
                  <MobileView />
              </div>

              {/* Sidebar Preview Block */}
              <div className="flex flex-col gap-4 items-center">
                  <div className="flex items-center gap-2 opacity-50">
                      <Monitor size={16} />
                      <span className="text-xs font-bold uppercase tracking-wide">Desktop Sidebar</span>
                  </div>
                  <SidebarView />
              </div>

              {/* TV Preview Block (NEW) */}
              <div className="flex flex-col gap-4 items-center">
                  <div className="flex items-center gap-2 opacity-50">
                      <Tv size={16} />
                      <span className="text-xs font-bold uppercase tracking-wide">Smart TV Interface</span>
                  </div>
                  <TvView />
              </div>

          </div>
      </div>
    </div>
  );
}
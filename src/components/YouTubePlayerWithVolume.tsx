import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface YouTubePlayerWithVolumeProps {
  videoId: string;
  title: string;
  subtitle?: string;
  delay?: number;
}

// Declare YouTube API types
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
    youtubeAPIReady?: boolean;
    youtubeAPICallbacks?: Array<() => void>;
  }
}

// Load YouTube API only once
let isAPILoading = false;

function loadYouTubeAPI(callback: () => void) {
  if (window.YT && window.YT.Player) {
    // API already loaded
    callback();
    return;
  }

  // Add callback to queue
  if (!window.youtubeAPICallbacks) {
    window.youtubeAPICallbacks = [];
  }
  window.youtubeAPICallbacks.push(callback);

  // Load API script only once
  if (!isAPILoading) {
    isAPILoading = true;
    
    window.onYouTubeIframeAPIReady = () => {
      window.youtubeAPIReady = true;
      // Execute all waiting callbacks
      if (window.youtubeAPICallbacks) {
        window.youtubeAPICallbacks.forEach(cb => cb());
        window.youtubeAPICallbacks = [];
      }
    };

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }
}

export function YouTubePlayerWithVolume({ 
  videoId, 
  title, 
  subtitle,
  delay = 0 
}: YouTubePlayerWithVolumeProps) {
  const [volume, setVolume] = useState(50);
  const [player, setPlayer] = useState<any>(null);
  const [isReady, setIsReady] = useState(false);
  const playerIdRef = useRef(`youtube-player-${videoId}-${Math.random().toString(36).substr(2, 9)}`);
  const playerInstanceRef = useRef<any>(null);

  useEffect(() => {
    const initPlayer = () => {
      if (!window.YT || !window.YT.Player) {
        console.error('YouTube API not loaded');
        return;
      }

      // Make sure element exists
      const element = document.getElementById(playerIdRef.current);
      if (!element) {
        console.error('Player element not found:', playerIdRef.current);
        return;
      }

      try {
        const newPlayer = new window.YT.Player(playerIdRef.current, {
          videoId: videoId,
          playerVars: {
            controls: 1,
            modestbranding: 1,
            rel: 0,
          },
          events: {
            onReady: (event: any) => {
              event.target.setVolume(volume);
              setIsReady(true);
              console.log('YouTube player ready:', videoId);
            },
          },
        });
        playerInstanceRef.current = newPlayer;
        setPlayer(newPlayer);
      } catch (error) {
        console.error('Error creating YouTube player:', error);
      }
    };

    loadYouTubeAPI(initPlayer);

    return () => {
      if (playerInstanceRef.current && playerInstanceRef.current.destroy) {
        try {
          playerInstanceRef.current.destroy();
        } catch (e) {
          console.error('Error destroying player:', e);
        }
      }
    };
  }, [videoId]);

  useEffect(() => {
    if (player && isReady && player.setVolume) {
      try {
        player.setVolume(volume);
      } catch (e) {
        console.error('Error setting volume:', e);
      }
    }
  }, [volume, player, isReady]);

  const toggleMute = () => {
    if (player && isReady) {
      if (volume > 0) {
        setVolume(0);
      } else {
        setVolume(50);
      }
    }
  };

  return (
    <div 
      className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-slate-900"
      style={{ 
        opacity: 0,
        animation: `fadeInUp 0.5s ease-out ${delay}s forwards`
      }}
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      {/* YouTube Player */}
      <div className="w-full h-full">
        <div id={playerIdRef.current} className="w-full h-full"></div>
      </div>

      {/* Volume Control - appears on hover */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-2 rounded-full border border-white/20">
          <button
            onClick={toggleMute}
            className="text-white hover:text-blue-400 transition-colors"
            aria-label={volume > 0 ? "Wycisz" : "Włącz dźwięk"}
          >
            {volume > 0 ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={volume}
            onChange={(e) => setVolume(parseInt(e.target.value))}
            className="w-20 h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
          />
        </div>
      </div>

      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 to-transparent p-4 pointer-events-none">
        <h4 className="text-white mb-1">{title}</h4>
        {subtitle && <p className="text-slate-300 text-sm">{subtitle}</p>}
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import HomeHeader from "./components/HomeHeader";
import { useEffect, useRef } from "react";

// YouTube IFrame API types
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function Home() {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    // Load YouTube IFrame API
    const loadYouTubeAPI = () => {
      if (window.YT && window.YT.Player) {
        initializePlayer();
        return;
      }

      // Check if script is already being loaded
      if (document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        // Wait for API to be ready
        const checkInterval = setInterval(() => {
          if (window.YT && window.YT.Player) {
            clearInterval(checkInterval);
            initializePlayer();
          }
        }, 100);
        return;
      }

      // Load the script
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.async = true;
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        initializePlayer();
      };
    };

    const initializePlayer = () => {
      if (!containerRef.current || playerRef.current) return;

      const playerId = `youtube-player-${Date.now()}`;
      const playerDiv = document.createElement('div');
      playerDiv.id = playerId;
      playerDiv.className = 'absolute inset-0 w-full h-full opacity-70';
      containerRef.current.appendChild(playerDiv);

      playerRef.current = new window.YT.Player(playerId, {
        videoId: 'xxvAzOGf3gs',
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: 'xxvAzOGf3gs',
          controls: 0,
          rel: 0,
          showinfo: 0,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1,
          fs: 0,
          iv_load_policy: 3,
        },
        events: {
          onReady: (event: any) => {
            // For iOS, set up gesture handlers proactively and try to play
            if (isIOSDevice) {
              setupGesturePlay(event.target);
              // Try multiple times with delays for iOS 18+
              setTimeout(() => {
                event.target.playVideo().catch(() => {});
              }, 100);
              setTimeout(() => {
                event.target.playVideo().catch(() => {});
              }, 500);
              setTimeout(() => {
                event.target.playVideo().catch(() => {});
              }, 1000);
            } else {
              event.target.playVideo();
            }
          },
          onStateChange: (event: any) => {
            // If video is paused (state 2) on iOS, try to resume
            if (isIOSDevice && event.data === 2) {
              setTimeout(() => {
                event.target.playVideo().catch(() => {});
              }, 100);
            }
          },
          onAutoplayBlocked: (event: any) => {
            // Explicitly handle autoplay blocking - common on iOS 18+
            // This ensures gesture handlers are active when autoplay fails
            if (isIOSDevice) {
              setupGesturePlay(event.target);
            }
          }
        }
      });
    };

    const setupGesturePlay = (player: any) => {
      let hasPlayed = false;
      const playOnGesture = () => {
        if (hasPlayed) return;
        player.playVideo().catch(() => {});
        hasPlayed = true;
        // Remove all listeners after successful play attempt
        window.removeEventListener('touchstart', playOnGesture);
        window.removeEventListener('touchend', playOnGesture);
        window.removeEventListener('click', playOnGesture);
        window.removeEventListener('scroll', playOnGesture);
        document.removeEventListener('touchstart', playOnGesture);
      };
      // iOS 18 sometimes requires interaction with the page, so listen to multiple events
      window.addEventListener('touchstart', playOnGesture, { once: true, passive: true });
      window.addEventListener('touchend', playOnGesture, { once: true, passive: true });
      window.addEventListener('click', playOnGesture, { once: true });
      window.addEventListener('scroll', playOnGesture, { once: true, passive: true });
      document.addEventListener('touchstart', playOnGesture, { once: true, passive: true });
    };

    // Try to play via postMessage as fallback
    const tryPlayPostMessage = () => {
      const iframes = document.querySelectorAll('iframe[src*="youtube.com"]');
      iframes.forEach((iframe) => {
        (iframe as HTMLIFrameElement).contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "playVideo", args: [] }),
          "*"
        );
      });
    };

    loadYouTubeAPI();

    // Fallback: retry on visibility change
    const onVisibilityChange = () => {
      if (!document.hidden && playerRef.current) {
        setTimeout(() => {
          playerRef.current?.playVideo().catch(() => {});
          tryPlayPostMessage();
        }, 100);
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    // Retry on page focus for iOS
    const onFocus = () => {
      if (isIOSDevice) {
        setTimeout(() => {
          if (playerRef.current) {
            playerRef.current.playVideo().catch(() => {});
          }
          tryPlayPostMessage();
        }, 100);
      }
    };
    window.addEventListener('focus', onFocus);

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('focus', onFocus);
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // Ignore destroy errors
        }
      }
    };
  }, []);
  return (
    <main className="bg-black min-h-screen">
      <HomeHeader />
      <div className="relative h-screen w-full overflow-hidden ">
        <div 
          ref={containerRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
        {/* Fallback iframe for browsers that don't support JS API - hidden by default */}
        <iframe
          className="absolute inset-0 w-full h-full pointer-events-none opacity-0 -z-10"
          src="https://www.youtube.com/embed/xxvAzOGf3gs?si=wCLiDUfhNU4-uNsR&autoplay=1&mute=1&playsinline=1&loop=1&playlist=xxvAzOGf3gs&controls=0&rel=0&showinfo=0&modestbranding=1&enablejsapi=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {/* Invisible overlay to prevent any interaction */}
        <div className="absolute inset-0 w-full h-full pointer-events-auto" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10  text-white text-center px-4 gap-8">
          <h1 className="w-6/12 max-sm:w-full max-sm:text-2xl text-4xl leading-relaxed font-light">
            Luke & Noah Clarke are a Northeastern and Mid-Atlantic based
            filmmaking duo.
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <p className="text-xl max-sm:text-base z-50 hover:scale-110 transition-transform bg-white text-black rounded-full py-2 px-6 cursor-pointer">
              <Link href="/work">View Work</Link>
            </p>
            <p className="text-xl max-sm:text-base z-50 hover:scale-110 transition-transform bg-transparent text-white border border-white rounded-full py-2 px-6 cursor-pointer">
              <Link href="/about">About the Duo</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

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
  const restartTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let isMounted = true;
    let apiCheckInterval: ReturnType<typeof setInterval> | null = null;

    // Detect iOS
    const isIOSDevice =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    const destroyPlayer = () => {
      if (playerRef.current) {
        const resizeHandler = (playerRef.current as any)?._resizeHandler;
        if (resizeHandler) {
          window.removeEventListener("resize", resizeHandler);
        }

        const observer = (playerRef.current as any)?._observer;
        if (observer) {
          observer.disconnect();
        }

        try {
          playerRef.current.destroy();
        } catch (e) {
          // Ignore destroy errors from mobile browsers restoring cached iframes.
        }

        playerRef.current = null;
      }

      containerRef.current?.replaceChildren();
    };

    const restartPlayer = (delay = 0) => {
      if (restartTimeoutRef.current) {
        clearTimeout(restartTimeoutRef.current);
      }

      restartTimeoutRef.current = setTimeout(() => {
        if (!isMounted) return;
        destroyPlayer();
        loadYouTubeAPI();
      }, delay);
    };

    // Load YouTube IFrame API
    const loadYouTubeAPI = () => {
      if (window.YT && window.YT.Player) {
        initializePlayer();
        return;
      }

      // Check if script is already being loaded
      if (document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        // Wait for API to be ready
        if (apiCheckInterval) {
          clearInterval(apiCheckInterval);
        }

        apiCheckInterval = setInterval(() => {
          if (window.YT && window.YT.Player) {
            if (apiCheckInterval) {
              clearInterval(apiCheckInterval);
              apiCheckInterval = null;
            }
            initializePlayer();
          }
        }, 100);
        return;
      }

      // Load the script
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.async = true;
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        initializePlayer();
      };
    };

    // Safe wrapper for playVideo that handles non-Promise returns
    const safePlayVideo = (player: any) => {
      try {
        if (player && typeof player.playVideo === "function") {
          const result = player.playVideo();
          // If it returns a Promise, handle it
          if (result && typeof result.catch === "function") {
            result.catch(() => {
              // Silently handle errors
            });
          }
        }
      } catch (error) {
        // Silently handle errors
      }
    };

    const initializePlayer = () => {
      if (!containerRef.current) return;

      if (playerRef.current) {
        const existingIframe = containerRef.current.querySelector(
          'iframe[src*="youtube.com"]'
        );
        if (existingIframe?.isConnected) return;
        destroyPlayer();
      }

      containerRef.current.replaceChildren();

      const playerId = `youtube-player-${Date.now()}`;
      const playerDiv = document.createElement("div");
      playerDiv.id = playerId;
      playerDiv.className = "absolute inset-0 w-full h-full opacity-70 youtube-player-container";
      playerDiv.style.cssText = `
        width: 100% !important;
        height: 100% !important;
        overflow: hidden !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
      `;
      containerRef.current.appendChild(playerDiv);

      // Add CSS for mobile scaling - use class-based selector for reliability
      const styleId = "youtube-player-mobile-scale";
      if (!document.getElementById(styleId)) {
        const style = document.createElement("style");
        style.id = styleId;
        style.textContent = `
          .youtube-player-container iframe {
            transform: scale(1.2) !important;
            transform-origin: center center !important;
            width: 100% !important;
            height: 100% !important;
          }
          @media (max-width: 640px) {
            .youtube-player-container iframe {
              transform: scale(3.9) !important;
              transform-origin: center center !important;
            }
          }
        `;
        document.head.appendChild(style);
      }

      playerRef.current = new window.YT.Player(playerId, {
        videoId: "RVR4syciE7k",
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: "RVR4syciE7k",
          controls: 0,
          disablekb: 1,
          rel: 0,
          showinfo: 0,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1,
          fs: 0,
          iv_load_policy: 3,
          cc_load_policy: 0,
        },
        events: {
          onReady: (event: any) => {
            // Apply scaling styles directly to the iframe after it's created
            const applyScaling = () => {
              let iframe: HTMLIFrameElement | null = null;
              
              // Try multiple methods to find the iframe
              // Method 1: Check if player has getIframe method
              if (event.target && typeof event.target.getIframe === 'function') {
                try {
                  iframe = event.target.getIframe();
                } catch (e) {
                  console.log("getIframe method failed:", e);
                }
              }
              
              // Method 2: Look in playerDiv
              if (!iframe) {
                iframe = playerDiv.querySelector("iframe") as HTMLIFrameElement;
              }
              
              // Method 3: Look by ID
              if (!iframe) {
                iframe = document.querySelector(`#${playerId} iframe`) as HTMLIFrameElement;
              }
              
              // Method 4: Look in the entire document for YouTube iframes
              if (!iframe) {
                const allIframes = document.querySelectorAll("iframe");
                for (let i = 0; i < allIframes.length; i++) {
                  const f = allIframes[i] as HTMLIFrameElement;
                  if (f.src && f.src.includes("youtube.com/embed")) {
                    iframe = f;
                    break;
                  }
                }
              }
              
              // Method 5: Check if playerDiv's parent or children
              if (!iframe) {
                iframe = containerRef.current?.querySelector("iframe") as HTMLIFrameElement;
              }
              
              if (iframe) {
                const isMobile = window.innerWidth <= 640;
                const scale = isMobile ? 3.9 : 1.2;
                
                console.log("Applying scaling:", { 
                  isMobile, 
                  scale, 
                  iframeFound: !!iframe,
                  iframeSrc: iframe.src,
                  playerDiv: playerDiv.innerHTML.substring(0, 200)
                });
                
                // Apply styles with !important via setProperty
                // Keep iframe at 100% dimensions, then scale it up to zoom in
                iframe.style.setProperty("transform", `scale(${scale})`, "important");
                iframe.style.setProperty("transform-origin", "center center", "important");
                iframe.style.setProperty("width", "100%", "important");
                iframe.style.setProperty("height", "100%", "important");
                iframe.style.setProperty("position", "absolute", "important");
                iframe.style.setProperty("top", "0", "important");
                iframe.style.setProperty("left", "0", "important");
                
                // Ensure the container clips overflow
                playerDiv.style.setProperty("overflow", "hidden", "important");
                playerDiv.style.setProperty("position", "relative", "important");
                
                // Also ensure parent container has overflow hidden
                if (containerRef.current) {
                  containerRef.current.style.setProperty("overflow", "hidden", "important");
                }
                
                console.log("Scaling applied:", {
                  transform: iframe.style.transform,
                  width: iframe.style.width,
                  height: iframe.style.height
                });
                
                return true;
              } else {
                console.log("Iframe not found - trying all methods. PlayerDiv content:", playerDiv.innerHTML.substring(0, 500));
                console.log("Container content:", containerRef.current?.innerHTML.substring(0, 500));
              }
              return false;
            };

            // Try applying scaling multiple times with delays
            const tryApplyScaling = () => {
              if (!applyScaling()) {
                // Retry with delays
                setTimeout(() => applyScaling(), 100);
                setTimeout(() => applyScaling(), 300);
                setTimeout(() => applyScaling(), 600);
                setTimeout(() => applyScaling(), 1000);
              }
            };

            // Apply scaling immediately
            tryApplyScaling();

            // Use MutationObserver to watch for iframe creation - observe both playerDiv and container
            const observer = new MutationObserver((mutations) => {
              if (applyScaling()) {
                observer.disconnect();
              }
            });
            
            // Observe multiple targets
            observer.observe(playerDiv, {
              childList: true,
              subtree: true,
            });
            
            if (containerRef.current) {
              observer.observe(containerRef.current, {
                childList: true,
                subtree: true,
              });
            }
            
            // Also observe document body in case YouTube creates it elsewhere
            observer.observe(document.body, {
              childList: true,
              subtree: true,
            });

            // Disconnect observer after 5 seconds (increased time)
            setTimeout(() => observer.disconnect(), 5000);

            // Update scaling on resize (for orientation changes, etc.)
            const handleResize = () => {
              applyScaling();
            };
            window.addEventListener("resize", handleResize);

            // Store cleanup function
            if (playerRef.current) {
              (playerRef.current as any)._resizeHandler = handleResize;
              (playerRef.current as any)._observer = observer;
            }

            // For iOS, set up gesture handlers proactively and try to play
            if (isIOSDevice) {
              setupGesturePlay(event.target);
              // Try multiple times with delays for iOS 18+
              setTimeout(() => {
                safePlayVideo(event.target);
              }, 100);
              setTimeout(() => {
                safePlayVideo(event.target);
              }, 500);
              setTimeout(() => {
                safePlayVideo(event.target);
              }, 1000);
            } else {
              safePlayVideo(event.target);
            }
          },
          onStateChange: (event: any) => {
            // If video is paused (state 2) on iOS, try to resume
            if (isIOSDevice && event.data === 2) {
              setTimeout(() => {
                safePlayVideo(event.target);
              }, 100);
            }
          },
          onAutoplayBlocked: (event: any) => {
            // Explicitly handle autoplay blocking - common on iOS 18+
            // This ensures gesture handlers are active when autoplay fails
            if (isIOSDevice) {
              setupGesturePlay(event.target);
            }
          },
        },
      });
    };

    const setupGesturePlay = (player: any) => {
      let hasPlayed = false;
      const playOnGesture = () => {
        if (hasPlayed) return;
        safePlayVideo(player);
        hasPlayed = true;
        // Remove all listeners after successful play attempt
        window.removeEventListener("touchstart", playOnGesture);
        window.removeEventListener("touchend", playOnGesture);
        window.removeEventListener("click", playOnGesture);
        window.removeEventListener("scroll", playOnGesture);
        document.removeEventListener("touchstart", playOnGesture);
      };
      // iOS 18 sometimes requires interaction with the page, so listen to multiple events
      window.addEventListener("touchstart", playOnGesture, {
        once: true,
        passive: true,
      });
      window.addEventListener("touchend", playOnGesture, {
        once: true,
        passive: true,
      });
      window.addEventListener("click", playOnGesture, { once: true });
      window.addEventListener("scroll", playOnGesture, {
        once: true,
        passive: true,
      });
      document.addEventListener("touchstart", playOnGesture, {
        once: true,
        passive: true,
      });
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
      if (document.hidden) return;

      setTimeout(() => {
        const hasIframe = containerRef.current?.querySelector(
          'iframe[src*="youtube.com"]'
        );

        if (!playerRef.current || !hasIframe) {
          restartPlayer();
          return;
        }

        safePlayVideo(playerRef.current);
        tryPlayPostMessage();
      }, 100);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    // Retry on page focus for iOS and rebuild after mobile browser cache restores.
    const onFocus = () => {
      if (!isIOSDevice) return;

      setTimeout(() => {
        const hasIframe = containerRef.current?.querySelector(
          'iframe[src*="youtube.com"]'
        );

        if (!playerRef.current || !hasIframe) {
          restartPlayer();
          return;
        }

        safePlayVideo(playerRef.current);
        tryPlayPostMessage();
      }, 100);
    };
    window.addEventListener("focus", onFocus);

    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        restartPlayer();
      } else {
        onVisibilityChange();
      }
    };
    window.addEventListener("pageshow", onPageShow);

    return () => {
      isMounted = false;
      if (apiCheckInterval) {
        clearInterval(apiCheckInterval);
      }
      if (restartTimeoutRef.current) {
        clearTimeout(restartTimeoutRef.current);
      }
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("pageshow", onPageShow);
      destroyPlayer();
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
          src="https://www.youtube.com/embed/RVR4syciE7k?autoplay=1&mute=1&playsinline=1&loop=1&playlist=RVR4syciE7k&controls=0&disablekb=1&rel=0&showinfo=0&modestbranding=1&fs=0&iv_load_policy=3&cc_load_policy=0&enablejsapi=1"
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

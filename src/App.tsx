import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import { AudioButton } from "./components/AudioButton";
import { EntryGate } from "./components/EntryGate";
import { PetalsCanvas } from "./components/PetalsCanvas";
import { CountdownSection } from "./components/sections/CountdownSection";
import { EventsSection } from "./components/sections/EventsSection";
import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { MemoriesSection } from "./components/sections/MemoriesSection";
import { RsvpSection } from "./components/sections/RsvpSection";
import { UploadSection } from "./components/sections/UploadSection";
import { VenueSection } from "./components/sections/VenueSection";
import { siteConfig } from "./data/siteConfig";

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [preloadRest, setPreloadRest] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    document.body.style.overflow = hasEntered ? "auto" : "hidden";
  }, [hasEntered]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        if (isAudioPlaying && audioRef.current) {
          audioRef.current.pause();
        }
      } else if (isAudioPlaying && hasEntered && audioRef.current) {
        audioRef.current.play().catch(console.warn);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [isAudioPlaying, hasEntered]);

  const handleReveal = () => {
    setHasEntered(true);
    setPreloadRest(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => setIsAudioPlaying(true)).catch(console.warn);
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isAudioPlaying) {
      audioRef.current.pause();
      setIsAudioPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsAudioPlaying(true)).catch(console.warn);
    }
  };

  return (
    <main className="font-serif">
      <PetalsCanvas active={hasEntered} />

      <audio ref={audioRef} id="bg-audio" loop preload="metadata">
        <source src={siteConfig.media.backgroundAudio} type="audio/mpeg" />
      </audio>

      <AnimatePresence>
        {!hasEntered && (
          <EntryGate isVisible={!hasEntered} onReveal={handleReveal} />
        )}
      </AnimatePresence>

      {hasEntered && <AudioButton isPlaying={isAudioPlaying} onToggle={toggleAudio} />}

      <div id="main-content" className={hasEntered ? "visible fade-in" : ""}>
        <Hero preload={preloadRest} />
        <CountdownSection />
        <MemoriesSection preload={preloadRest} />
        <VenueSection />
        <EventsSection preload={preloadRest} />
        <RsvpSection />
        <UploadSection />
        <Footer />
      </div>
    </main>
  );
}

import { useRef } from 'react';
import { motion } from 'motion/react';
import { getTextStyle, siteConfig } from '../data/siteConfig';

interface EntryGateProps {
  onReveal: () => void;
  isVisible: boolean;
}

export function EntryGate({ onReveal, isVisible }: EntryGateProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const gateRef = useRef<HTMLDivElement>(null);

  const handleStart = async () => {
    if (isVisible && videoRef.current && videoRef.current.paused) {
      try {
        gateRef.current?.classList.add('video-playing');
        videoRef.current.muted = false;
        await videoRef.current.play();
      } catch (err) {
        console.warn('Video play blocked:', err);
        onReveal();
      }
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      id="entry-gate"
      ref={gateRef}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleStart}
      className="cursor-pointer"
    >
      <video
        ref={videoRef}
        id="entry-video"
        playsInline
        muted
        autoPlay={false}
        preload="auto"
        onEnded={onReveal}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={`${siteConfig.media.entryVideo}#t=0.001`} type="video/mp4" />
      </video>
      <div className="absolute inset-x-0 bottom-20 text-center z-10">
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white font-sans tracking-[0.3em] uppercase text-xs"
          style={getTextStyle(siteConfig.entryGate.cta)}
        >
          {siteConfig.entryGate.cta.text}
        </motion.p>
      </div>
    </motion.div>
  );
}

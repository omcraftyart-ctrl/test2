import { Volume2, VolumeX } from 'lucide-react';

interface AudioButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export function AudioButton({ isPlaying, onToggle }: AudioButtonProps) {
  return (
    <button
      id="audio-btn"
      onClick={onToggle}
      className="fixed bottom-24 right-6 w-12 h-12 rounded-full bg-[--terracotta] text-white flex items-center justify-center z-[900] shadow-lg hover:scale-110 transition-transform"
      aria-label="Toggle background music"
    >
      {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
    </button>
  );
}

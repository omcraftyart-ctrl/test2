import { Heart } from 'lucide-react';

export function SectionOrnament() {
  return (
    <div className="ornament mt-4 mb-8">
      <div className="ornament-line rev"></div>
      <Heart size={12} fill="currentColor" className="text-[--gold]" />
      <div className="ornament-line"></div>
    </div>
  );
}

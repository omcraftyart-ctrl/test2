import { SectionOrnament } from '../SectionOrnament';
import { getTextStyle, siteConfig } from '../../data/siteConfig';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface MemoriesSectionProps {
  preload: boolean;
}

export function MemoriesSection({ preload }: MemoriesSectionProps) {
  const { memories, media } = siteConfig;

  const [ref1, isVisible1] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2, triggerOnce: true });
  const [ref2, isVisible2] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="memories-section">
      <div ref={ref1} className={`text-center reveal ${isVisible1 ? 'revealed' : ''}`}>
        <span className="section-label" style={getTextStyle(memories.label)}>{memories.label.text}</span>
        <h2 className="section-heading script text-[--terracotta]">
          <span style={getTextStyle(memories.headingLine1)}>{memories.headingLine1.text}</span>
          <br />
          <span style={getTextStyle(memories.headingLine2)}>{memories.headingLine2.text}</span>
        </h2>
        <SectionOrnament />
      </div>
      <div ref={ref2} className={`memories-frame reveal reveal-delay-2 ${isVisible2 ? 'revealed' : ''}`}>
        <div className="memories-inner">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload={preload ? 'auto' : 'none'}
            className="w-full h-auto aspect-[1080/1600] object-cover"
          >
            <source src={`${media.memoriesVideo}#t=0.001`} type="video/mp4" />
          </video>
        </div>
      </div>
      <p className="text-center mt-8 italic text-[--text-light] text-lg" style={getTextStyle(memories.caption)}>{memories.caption.text}</p>
    </section>
  );
}

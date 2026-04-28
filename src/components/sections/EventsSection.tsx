import { getTextStyle, siteConfig, StyledText } from '../../data/siteConfig';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { SectionOrnament } from '../SectionOrnament';

interface EventCardProps {
  title: StyledText;
  subtitle: StyledText;
  videoSrc: string;
  preload: boolean;
  showSep?: boolean;
}

function EventCard({ title, subtitle, videoSrc, preload, showSep = true }: EventCardProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <div ref={ref} className={`event-block reveal ${isVisible ? 'revealed' : ''}`}>
        <div className="text-center mb-4">
          <p className="event-subtitle sans" style={getTextStyle(subtitle)}>{subtitle.text}</p>
          <h3 className="event-title script" style={getTextStyle(title)}>{title.text}</h3>
        </div>
        <div className={`event-video-wrap ${isVisible ? 'unlocked' : ''}`}>
          <video autoPlay muted loop playsInline preload={preload ? 'auto' : 'none'}>
            <source src={`${videoSrc}#t=0.001`} type="video/mp4" />
          </video>
        </div>
      </div>
      {showSep && (
        <div className={`event-sep reveal ${isVisible ? 'revealed' : ''}`}>
          <div className="event-sep-line"></div>
          <div className="event-sep-dot"></div>
          <div className="event-sep-line"></div>
        </div>
      )}
    </>
  );
}

interface EventsSectionProps {
  preload: boolean;
}

export function EventsSection({ preload }: EventsSectionProps) {
  const { events } = siteConfig;

  return (
    <section id="events-section">
      <div className="text-center mb-12">
        <span className="section-label" style={getTextStyle(events.label)}>{events.label.text}</span>
        <h2 className="section-heading script text-[--terracotta]">
          <span style={getTextStyle(events.headingLine1)}>{events.headingLine1.text}</span>
          <br />
          <span style={getTextStyle(events.headingLine2)}>{events.headingLine2.text}</span>
        </h2>
        <SectionOrnament />
      </div>
      {events.items.map((event, index) => (
        <EventCard
          key={`${event.title.text}-${index}`}
          title={event.title}
          subtitle={event.subtitle}
          videoSrc={event.videoSrc}
          preload={preload}
          showSep={index !== events.items.length - 1}
        />
      ))}
    </section>
  );
}

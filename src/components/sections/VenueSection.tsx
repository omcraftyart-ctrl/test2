import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { getTextStyle, siteConfig } from '../../data/siteConfig';
import { SectionOrnament } from '../SectionOrnament';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function VenueSection() {
  const { venue, media } = siteConfig;
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="venue-section">
      <div ref={ref} className={`text-center reveal ${isVisible ? 'revealed' : ''}`}>
        <span className="section-label" style={getTextStyle(venue.label)}>{venue.label.text}</span>
        <h2 className="section-heading script text-[--terracotta]">
          <span style={getTextStyle(venue.headingLine1)}>{venue.headingLine1.text}</span>
          <br />
          <span style={getTextStyle(venue.headingLine2)}>{venue.headingLine2.text}</span>
        </h2>
        <SectionOrnament />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="venue-card"
      >
        <img className="venue-img" src={media.venueImage} alt={venue.venueName.text} />
        <div className="venue-info text-center">
          <h3 className="venue-name script text-4xl" style={getTextStyle(venue.venueName)}>{venue.venueName.text}</h3>
          <p className="venue-address serif italic mb-6">
            <span style={getTextStyle(venue.addressLine1)}>{venue.addressLine1.text}</span>
            <br />
            <span style={getTextStyle(venue.addressLine2)}>{venue.addressLine2.text}</span>
          </p>
          <iframe
            className="venue-map w-full h-[220px] border-0 rounded-lg mb-6"
            src={venue.mapsEmbedUrl}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            className="directions-btn font-sans inline-flex items-center gap-2"
            href={venue.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            style={getTextStyle(venue.directionsCta)}
          >
            <MapPin size={16} /> {venue.directionsCta.text}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

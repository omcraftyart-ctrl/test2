import { motion } from 'motion/react';
import { getTextStyle, siteConfig } from '../../data/siteConfig';
import { useCountdown } from '../../hooks/useCountdown';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function CountdownSection() {
  const { countdown } = siteConfig;
  const { days, hours, minutes, seconds, isExpired } = useCountdown(countdown.targetDate);
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="countdown-section">  
      <motion.div ref={ref} className={`countdown-card reveal ${isVisible ? 'revealed' : ''}`}>
        <span className="section-label" style={getTextStyle(countdown.label)}>{countdown.label.text}</span>
        <p className="countdown-quote" style={getTextStyle(countdown.quote)}>{countdown.quote.text}</p>
        <p className="countdown-date" style={getTextStyle(countdown.date)}>{countdown.date.text}</p>
        {isExpired ? (
          <p className="script text-5xl text-[--terracotta]" style={getTextStyle(countdown.expired)}>{countdown.expired.text}</p>
        ) : (
          <div className="countdown-grid">
            <div className="countdown-unit">  
              <span className="countdown-number">{days}</span>
              <span className="countdown-label" style={getTextStyle(countdown.units.days)}>{countdown.units.days.text}</span>
            </div>
            <div className="countdown-unit">
              <span className="countdown-number">{hours}</span>
              <span className="countdown-label" style={getTextStyle(countdown.units.hours)}>{countdown.units.hours.text}</span>
            </div>
            <div className="countdown-unit">
              <span className="countdown-number">{minutes}</span>
              <span className="countdown-label" style={getTextStyle(countdown.units.mins)}>{countdown.units.mins.text}</span>
            </div>
            <div className="countdown-unit">
              <span className="countdown-number">{seconds}</span>
              <span className="countdown-label" style={getTextStyle(countdown.units.secs)}>{countdown.units.secs.text}</span>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}

import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { getTextStyle, siteConfig } from '../../data/siteConfig';

interface HeroProps {
  preload: boolean;
}

export function Hero({ preload }: HeroProps) {
  const { hero, media } = siteConfig;

  return (
    <section id="hero">
      <video
        id="hero-bg-video"
        autoPlay
        loop
        muted
        playsInline
        preload={preload ? 'auto' : 'metadata'}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src={`${media.backgroundVideo}#t=0.001`} type="video/mp4" />
      </video>
      <div className="hero-frame"><span></span></div>
      <motion.div
        className="hero-card"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="card-corner tl"></div>
        <div className="card-corner tr"></div>
        <div className="card-corner bl"></div>
        <div className="card-corner br"></div>
        <img className="ganesh-icon mb-4" src={media.ganeshImage} alt="Shri Ganesh" />
        <p className="font-sans text-[0.62rem] tracking-[0.3em] text-[--terracotta] uppercase mb-5" style={getTextStyle(hero.mantra)}>
          {hero.mantra.text}
        </p>
        <div className="couple-block">
          <span className="couple-name shimmer-gold pinyon" style={getTextStyle(hero.groomName)}>{hero.groomName.text}</span>
          <p className="family-line" style={getTextStyle(hero.groomFamily)}>{hero.groomFamily.text}</p>
          <p className="family-subline" style={getTextStyle(hero.groomSubFamily)}>{hero.groomSubFamily.text}</p>
        </div>
        <div className="ampersand-wrap">
          <div className="ampersand-line"></div>
          <span className="ampersand script">&</span>
          <div className="ampersand-line"></div>
        </div>
        <div className="couple-block">
          <span className="couple-name shimmer-gold pinyon" style={getTextStyle(hero.brideName)}>{hero.brideName.text}</span>
          <p className="family-line" style={getTextStyle(hero.brideFamily)}>{hero.brideFamily.text}</p>
          <p className="family-subline" style={getTextStyle(hero.brideSubFamily)}>{hero.brideSubFamily.text}</p>
        </div>
      </motion.div>
      <div className="scroll-cue">
        <p style={getTextStyle(hero.scrollText)}>{hero.scrollText.text}</p>
        <ChevronDown size={18} />
      </div>
    </section>
  );
}

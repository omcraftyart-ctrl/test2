import { Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { getTextStyle, siteConfig } from '../../data/siteConfig';

export function Footer() {
  const { footer } = siteConfig;

  return (
    <footer id="footer-section">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
        <span className="script text-6xl text-[--gold-light] leading-tight block" style={getTextStyle(footer.coupleName)}>{footer.coupleName.text}</span>
        <div className="flex items-center justify-center gap-4 mt-4 opacity-40">
          <div className="h-px w-16 bg-[--gold-light]" />
          <Heart size={18} fill="currentColor" className="text-[--gold-light]" />
          <div className="h-px w-16 bg-[--gold-light]" />
        </div>
      </motion.div>
      <div className="footer-grid">
        <div>
          <span className="footer-heading script text-4xl" style={getTextStyle(footer.complimentsTitle)}>{footer.complimentsTitle.text}</span>
          <ul className="footer-list serif italic opacity-80 leading-relaxed">
            {footer.complimentsList.map(name => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
        <div>
          <span className="footer-heading script text-4xl" style={getTextStyle(footer.rsvpTitle)}>{footer.rsvpTitle.text}</span>
          <div className="footer-rsvp-names serif opacity-80 leading-relaxed">
            {footer.rsvpNames.map(name => (
              <p key={name}>{name}</p>
            ))}
          </div>
          <div className="footer-kids mt-6 italic text-[--gold-light]">
            <strong className="block text-lg font-semibold mb-1" style={getTextStyle(footer.kidsTitle)}>{footer.kidsTitle.text}</strong>
            <span style={getTextStyle(footer.kidsQuote)}>{footer.kidsQuote.text}</span>
          </div>
        </div>
        <div className="footer-endnote border-t border-white/10 pt-10 text-center">
          <div className="w-32 h-px bg-[--gold-light] opacity-40 mx-auto mb-8" />
          <p className="serif italic text-white/50" style={getTextStyle(footer.endNote)}>{footer.endNote.text}</p>
        </div>
      </div>
    </footer>
  );
}

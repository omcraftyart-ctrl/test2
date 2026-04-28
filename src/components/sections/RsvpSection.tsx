import { useState } from 'react';
import { Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getTextStyle, siteConfig } from '../../data/siteConfig';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function RsvpSection() {
  const { rsvp } = siteConfig;
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [attending, setAttending] = useState('yes');
  const [refHeader, isHeaderVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1, triggerOnce: true });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    await new Promise(res => setTimeout(res, 2000));
    setFormStatus('success');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="rsvp-section">
      <div ref={refHeader} className={`text-center reveal ${isHeaderVisible ? 'revealed' : ''}`}>
        <span className="section-label" style={getTextStyle(rsvp.label)}>{rsvp.label.text}</span>
        <h2 className="section-heading script text-[--terracotta]">
          <span style={getTextStyle(rsvp.headingLine1)}>{rsvp.headingLine1.text}</span>
          <br />
          <span style={getTextStyle(rsvp.headingLine2)}>{rsvp.headingLine2.text}</span>
        </h2>
        <p className="mt-4 italic text-[--text-light] text-lg mb-10" style={getTextStyle(rsvp.intro)}>{rsvp.intro.text}</p>
      </div>

      <form className="rsvp-form" onSubmit={handleSubmit}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="form-card"
        >
          <p className="form-card-title serif" style={getTextStyle(rsvp.guestDetailsTitle)}>{rsvp.guestDetailsTitle.text}</p>
          <div className="field-group">
            <label className="field-label sans" style={getTextStyle(rsvp.nameLabel)}>{rsvp.nameLabel.text}</label>
            <input className="field-input serif" type="text" name="name" required placeholder={rsvp.namePlaceholder} />
          </div>
          <div className="field-group">
            <label className="field-label sans" style={getTextStyle(rsvp.phoneLabel)}>{rsvp.phoneLabel.text}</label>
            <input className="field-input serif" type="tel" name="phone" required placeholder={rsvp.phonePlaceholder} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="form-card"
        >
          <p className="form-card-title serif" style={getTextStyle(rsvp.joinQuestionTitle)}>{rsvp.joinQuestionTitle.text}</p>
          <div className="radio-pill-row">
            <label className={`radio-pill sans ${attending === 'yes' ? 'selected' : ''}`}>
              <input type="radio" name="attending" value="yes" checked={attending === 'yes'} onChange={() => setAttending('yes')} />
              <span style={getTextStyle(rsvp.acceptText)}>{rsvp.acceptText.text}</span>
            </label>
            <label className={`radio-pill sans ${attending === 'no' ? 'selected' : ''}`}>
              <input type="radio" name="attending" value="no" checked={attending === 'no'} onChange={() => setAttending('no')} />
              <span style={getTextStyle(rsvp.declineText)}>{rsvp.declineText.text}</span>
            </label>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`form-card ${attending === 'no' ? 'opacity-40 pointer-events-none' : ''}`}
        >
          <p className="form-card-title serif" style={getTextStyle(rsvp.guessTitle)}>{rsvp.guessTitle.text}</p>
          <p className="form-card-subtitle" style={getTextStyle(rsvp.guessSubtitle)}>{rsvp.guessSubtitle.text}</p>
          <div className="circle-select">
            <label className="circle-opt">
              <input type="radio" name="guess_emotional" value="Ashish" />
              <div className="circle-face script">A</div>
              <span className="circle-opt-label sans">Ashish</span>
            </label>
            <label className="circle-opt">
              <input type="radio" name="guess_emotional" value="Ayushi" />
              <div className="circle-face script">A</div>
              <span className="circle-opt-label sans">Ayushi</span>
            </label>
            <label className="circle-opt">
              <input type="radio" name="guess_emotional" value="Both" />
              <div className="circle-face script">B</div>
              <span className="circle-opt-label sans">Both</span>
            </label>
          </div>
          <p className="text-center text-xs text-[--text-light] italic mt-4" style={getTextStyle(rsvp.revealHint)}>{rsvp.revealHint.text}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`form-card ${attending === 'no' ? 'opacity-40 pointer-events-none' : ''}`}
        >
          <p className="form-card-title serif" style={getTextStyle(rsvp.moodTitle)}>{rsvp.moodTitle.text}</p>
          <p className="form-card-subtitle" style={getTextStyle(rsvp.moodSubtitle)}>{rsvp.moodSubtitle.text}</p>
          <div className="mood-grid">
            {rsvp.moodOptions.map(option => (
              <label key={option.value} className="mood-opt serif"><input type="radio" name="mood" value={option.value} /> {option.text}</label>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="form-card"
        >
          <p className="form-card-title serif" style={getTextStyle(rsvp.noteTitle)}>{rsvp.noteTitle.text}</p>
          <textarea className="text-area serif" name="message" rows={3} placeholder={rsvp.notePlaceholder} />
          <p className="text-[0.8rem] text-[--text-light] italic mt-2" style={getTextStyle(rsvp.noteHelp)}>{rsvp.noteHelp.text}</p>
        </motion.div>

        <div className="mt-8">
          <button type="submit" disabled={formStatus === 'submitting'} className="submit-btn sans flex items-center justify-center gap-3">
            {formStatus === 'submitting' ? (
              <>
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                <span style={getTextStyle(rsvp.submittingText)}>{rsvp.submittingText.text}</span>
              </>
            ) : <span style={getTextStyle(rsvp.submitText)}>{rsvp.submitText.text}</span>}
          </button>
        </div>
      </form>

      <AnimatePresence>
        {formStatus === 'success' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} id="rsvp-modal" className="open flex">
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="modal-card"
            >
              <div className="modal-icon-ring bg-[--terracotta]/10">
                <Heart size={32} className="text-[--terracotta]" />
              </div>
              <h3 className="modal-title script text-5xl" style={getTextStyle(rsvp.modalTitle)}>{rsvp.modalTitle.text}</h3>
              <p className="modal-msg italic" style={getTextStyle(rsvp.modalMessage)}>{rsvp.modalMessage.text}</p>
              <button className="modal-close-btn sans" onClick={() => setFormStatus('idle')} style={getTextStyle(rsvp.modalClose)}>{rsvp.modalClose.text}</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

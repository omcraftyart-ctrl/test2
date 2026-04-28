import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { getTextStyle, siteConfig } from '../../data/siteConfig';

export function UploadSection() {
  const { upload, media } = siteConfig;

  return (
    <section id="upload-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <span className="section-label" style={getTextStyle(upload.label)}>{upload.label.text}</span>
        <h2 className="section-heading script text-[--terracotta]">
          <span style={getTextStyle(upload.headingLine1)}>{upload.headingLine1.text}</span>
          <br />
          <span style={getTextStyle(upload.headingLine2)}>{upload.headingLine2.text}</span>
        </h2>
        <p className="mt-4 italic text-[--text-light] max-w-[360px] mx-auto leading-relaxed" style={getTextStyle(upload.intro)}>{upload.intro.text}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="upload-card mt-10"
      >
        <div className="upload-qr bg-[--cream] p-2 rounded-2xl border border-[--border] mb-6">
          <img src={media.uploadQrImage} alt="Upload QR" className="rounded-xl" />
        </div>
        <p className="sans text-[0.65rem] tracking-[0.25em] uppercase text-[--terracotta] font-semibold mb-4" style={getTextStyle(upload.scanLabel)}>{upload.scanLabel.text}</p>
        <div className="upload-divider sans" style={getTextStyle(upload.orLabel)}>{upload.orLabel.text}</div>
        <a
          className="upload-link sans inline-flex items-center gap-2"
          href={upload.uploadLink}
          target="_blank"
          rel="noopener noreferrer"
          style={getTextStyle(upload.uploadCta)}
        >
          <ExternalLink size={14} /> {upload.uploadCta.text}
        </a>
      </motion.div>
    </section>
  );
}

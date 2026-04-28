import type { CSSProperties } from 'react';

export interface StyledText {
  text: string;
  fontSize?: string;
  fontFamily?: string;
  color?: string;
  fontWeight?: CSSProperties['fontWeight'];
  letterSpacing?: string;
  textTransform?: CSSProperties['textTransform'];
}

export function getTextStyle(value: StyledText): CSSProperties {
  return {
    fontSize: value.fontSize,
    fontFamily: value.fontFamily,
    color: value.color,
    fontWeight: value.fontWeight,
    letterSpacing: value.letterSpacing,
    textTransform: value.textTransform,
  };
}

export const siteConfig = {
  media: {
    entryVideo: '/assets/videos/entry_video.mp4',
    backgroundVideo: '/assets/videos/background.mp4',
    ganeshImage: '/assets/images/vianyak.png',
    memoriesVideo: '/assets/videos/swiper.mp4',
    venueImage: '/assets/images/venue.webp',
    uploadQrImage: '/assets/images/one_pager.png',
    backgroundAudio: '/assets/audio/music.mp3',
  },
  entryGate: {
    cta: {
      text: 'Click to Open Invitation',
      fontSize: '0.75rem',
      fontFamily: 'Cormorant Garamond, serif',
      color: '#ffffff',
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
    },
  },
  hero: {
    mantra: {
      text: 'ॐ गणेशाय नमः',
      fontSize: '0.62rem',
      fontFamily: 'Cormorant Garamond, serif',
      color: 'var(--terracotta)',
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
    },
    groomName: {
      text: 'Dr. Ashish',
      fontSize: '3.3rem',
      fontFamily: 'Pinyon Script, cursive',
      color: 'var(--gold)',
    },
    groomFamily: {
      text: 'Son of Dr. Shri Bhagwan Gupta & Dr. Asha Gupta',
      fontSize: '1rem',
      fontFamily: 'Cormorant Garamond, serif',
      color: 'var(--text)',
    },
    groomSubFamily: {
      text: '(Grandson of Late Shri Om Prakash Gupta & Late Smt. Omwati Gupta)',
      fontSize: '0.95rem',
      fontFamily: 'Cormorant Garamond, serif',
      color: 'var(--text-light)',
    },
    brideName: {
      text: 'Dr. Ayushi',
      fontSize: '3.3rem',
      fontFamily: 'Pinyon Script, cursive',
      color: 'var(--gold)',
    },
    brideFamily: {
      text: 'Daughter of Mr. Mukesh Mishra & Mrs. Purnima Mishra',
      fontSize: '1rem',
      fontFamily: 'Cormorant Garamond, serif',
      color: 'var(--text)',
    },
    brideSubFamily: {
      text: '(Granddaughter of Late Shri Rajendra Prasad Mishra & Smt. Shakuntala Mishra)',
      fontSize: '0.95rem',
      fontFamily: 'Cormorant Garamond, serif',
      color: 'var(--text-light)',
    },
    scrollText: {
      text: 'Scroll',
      fontSize: '0.85rem',
      fontFamily: 'Cormorant Garamond, serif',
      color: 'var(--text)',
    },
  },
  countdown: {
    targetDate: 'April 18, 2026 00:00:00 GMT+0530',
    label: { text: 'The Big Day', fontSize: '0.8rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--terracotta)' },
    quote: { text: 'The start of a beautiful journey, shared with the ones we love most', fontSize: '1rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
    date: { text: 'Tuesday · 28th April 2026', fontSize: '1.1rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text)' },
    expired: { text: 'We are Married!', fontSize: '3rem', fontFamily: 'Pinyon Script, cursive', color: 'var(--terracotta)' },
    units: {
      days: { text: 'Days', fontSize: '0.8rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
      hours: { text: 'Hours', fontSize: '0.8rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
      mins: { text: 'Mins', fontSize: '0.8rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
      secs: { text: 'Secs', fontSize: '0.8rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
    },
  },
  memories: {
    label: { text: 'A Glimpse of Us', fontSize: '0.8rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--terracotta)' },
    headingLine1: { text: 'Our Beautiful', fontSize: '3rem', fontFamily: 'Pinyon Script, cursive', color: 'var(--terracotta)' },
    headingLine2: { text: 'Moments', fontSize: '3rem', fontFamily: 'Pinyon Script, cursive', color: 'var(--terracotta)' },
    caption: { text: 'A moment captured in time, forever in our hearts', fontSize: '1.05rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
  },
  venue: {
    label: { text: 'Where Love Awaits', fontSize: '0.8rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--terracotta)' },
    headingLine1: { text: 'Our Cherished', fontSize: '3rem', fontFamily: 'Pinyon Script, cursive', color: 'var(--terracotta)' },
    headingLine2: { text: 'Venue', fontSize: '3rem', fontFamily: 'Pinyon Script, cursive', color: 'var(--terracotta)' },
    venueName: { text: 'Tivoli Lotus Court', fontSize: '2.4rem', fontFamily: 'Pinyon Script, cursive', color: 'var(--terracotta)' },
    addressLine1: { text: 'Sector 117 Main Rd, near Capetown Society Road,', fontSize: '1rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
    addressLine2: { text: 'Sector 74, Noida, Uttar Pradesh', fontSize: '1rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
    directionsCta: { text: 'Get Directions', fontSize: '0.9rem', fontFamily: 'Cormorant Garamond, serif', color: '#ffffff' },
    mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.7441589333527!2d77.3879482150813!3d28.57744398243953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef9bb1731671%3A0x6b1cc41dbf0891d4!2sTivoli%20Lotus%20Court!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Tivoli+Lotus+Court+Noida',
  },
  events: {
    label: { text: 'The Celebration Unfolds', fontSize: '0.8rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--terracotta)' },
    headingLine1: { text: 'Five Sacred', fontSize: '3rem', fontFamily: 'Pinyon Script, cursive', color: 'var(--terracotta)' },
    headingLine2: { text: 'Ceremonies', fontSize: '3rem', fontFamily: 'Pinyon Script, cursive', color: 'var(--terracotta)' },
    items: [
      {
        title: { text: 'Shagun & Shades', fontSize: '2.1rem', fontFamily: 'Pinyon Script, cursive', color: 'var(--text)' },
        subtitle: { text: 'Ceremony I', fontSize: '0.85rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
        videoSrc: '/assets/videos/1.mp4',
      },
      {
        title: { text: 'Parampara & Pratishtha', fontSize: '2.1rem', fontFamily: 'Pinyon Script, cursive', color: 'var(--text)' },
        subtitle: { text: 'Ceremony II', fontSize: '0.85rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
        videoSrc: '/assets/videos/2.mp4',
      },
      {
        title: { text: 'Sitaron Wali Shaam', fontSize: '2.1rem', fontFamily: 'Pinyon Script, cursive', color: 'var(--text)' },
        subtitle: { text: 'Ceremony III · A Bollywood Musical Night', fontSize: '0.85rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
        videoSrc: '/assets/videos/3.mp4',
      },
      {
        title: { text: 'Phoolon Ki Mehfil', fontSize: '2.1rem', fontFamily: 'Pinyon Script, cursive', color: 'var(--text)' },
        subtitle: { text: 'Ceremony IV', fontSize: '0.85rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
        videoSrc: '/assets/videos/4.mp4',
      },
      {
        title: { text: 'Together Forever', fontSize: '2.1rem', fontFamily: 'Pinyon Script, cursive', color: 'var(--text)' },
        subtitle: { text: 'Ceremony V', fontSize: '0.85rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
        videoSrc: '/assets/videos/5.mp4',
      },
      {
        title: { text: 'Bheegi Palkein', fontSize: '2.1rem', fontFamily: 'Pinyon Script, cursive', color: 'var(--text)' },
        subtitle: { text: 'Ceremony VI', fontSize: '0.85rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
        videoSrc: '/assets/videos/6.mp4',
      },
    ],
  },
  rsvp: {
    label: { text: 'Join the Celebration', fontSize: '0.8rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--terracotta)' },
    headingLine1: { text: 'Celebrate', fontSize: '3rem', fontFamily: 'Pinyon Script, cursive', color: 'var(--terracotta)' },
    headingLine2: { text: 'With Us', fontSize: '3rem', fontFamily: 'Pinyon Script, cursive', color: 'var(--terracotta)' },
    intro: { text: 'A few fun questions before the big day!', fontSize: '1.05rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
    guestDetailsTitle: { text: 'Guest Details', fontSize: '1.35rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text)' },
    nameLabel: { text: 'Your Name', fontSize: '0.95rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
    namePlaceholder: 'Full name',
    phoneLabel: { text: 'Phone Number', fontSize: '0.95rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
    phonePlaceholder: '+91 00000 00000',
    joinQuestionTitle: { text: 'Will you join us?', fontSize: '1.35rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text)' },
    acceptText: { text: 'Joyfully Accept', fontSize: '0.95rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text)' },
    declineText: { text: 'Regrettably Decline', fontSize: '0.95rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text)' },
    guessTitle: { text: 'Make a Guess', fontSize: '1.35rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text)' },
    guessSubtitle: { text: 'Who will get emotional first?', fontSize: '0.95rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
    revealHint: { text: 'Reveal after the wedding', fontSize: '0.8rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
    moodTitle: { text: 'Your Wedding Mood', fontSize: '1.35rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text)' },
    moodSubtitle: { text: 'I am coming for...', fontSize: '0.95rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
    moodOptions: [
      { text: 'The Food', value: 'Food' },
      { text: 'Dance Floor', value: 'Dance' },
      { text: 'The Love', value: 'Love' },
      { text: 'All of It', value: 'All' },
    ],
    noteTitle: { text: 'Leave Us a Note', fontSize: '1.35rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text)' },
    notePlaceholder: 'Write something from the heart...',
    noteHelp: { text: 'This becomes a digital memory book.', fontSize: '0.8rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
    submitText: { text: 'Send Love', fontSize: '1rem', fontFamily: 'Cormorant Garamond, serif', color: '#ffffff' },
    submittingText: { text: 'Sending...', fontSize: '1rem', fontFamily: 'Cormorant Garamond, serif', color: '#ffffff' },
    modalTitle: { text: 'Thank You!', fontSize: '3rem', fontFamily: 'Pinyon Script, cursive', color: 'var(--terracotta)' },
    modalMessage: { text: 'We cannot wait to celebrate with you on our special day!', fontSize: '1rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
    modalClose: { text: 'Close', fontSize: '0.9rem', fontFamily: 'Cormorant Garamond, serif', color: '#ffffff' },
  },
  upload: {
    label: { text: 'Share Your Memories', fontSize: '0.8rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--terracotta)' },
    headingLine1: { text: 'Through', fontSize: '3rem', fontFamily: 'Pinyon Script, cursive', color: 'var(--terracotta)' },
    headingLine2: { text: 'Your Eyes', fontSize: '3rem', fontFamily: 'Pinyon Script, cursive', color: 'var(--terracotta)' },
    intro: { text: 'We know you clicked some amazing moments. Upload them here - your memories are our greatest treasure!', fontSize: '1.05rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
    scanLabel: { text: 'Scan to Upload', fontSize: '0.65rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--terracotta)', letterSpacing: '0.25em', textTransform: 'uppercase' },
    orLabel: { text: 'or', fontSize: '0.9rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--text-light)' },
    uploadCta: { text: 'Click to Upload', fontSize: '0.9rem', fontFamily: 'Cormorant Garamond, serif', color: '#ffffff' },
    uploadLink: 'https://drive.google.com/drive/folders/13cpO7R7qBgJzg5owYQeVfq9MJXdNOwZ9',
  },
  footer: {
    coupleName: { text: 'Ashish & Ayushi', fontSize: '3.75rem', fontFamily: 'Pinyon Script, cursive', color: 'var(--gold-light)' },
    complimentsTitle: { text: 'With Compliments From', fontSize: '2.25rem', fontFamily: 'Pinyon Script, cursive', color: '#ffffff' },
    complimentsList: [
      'Smt. Neeraja & Late Shri Madan Lal Gupta',
      'Smt. Sangeeta & Shri Vinod Gupta',
      'Smt. Rajni & Shri Rajeev Gupta',
      'Smt. Poonam & Shri Sanjeev Gupta',
      'Smt. Jyoti & Shri Anil Gupta',
    ],
    rsvpTitle: { text: 'RSVP', fontSize: '2.25rem', fontFamily: 'Pinyon Script, cursive', color: '#ffffff' },
    rsvpNames: ['Dr. Shri Bhagwan & Dr. Asha Gupta', 'Siddhant & Tanu Gupta', 'Srishti Gupta'],
    kidsTitle: { text: 'Avyukt & Advait', fontSize: '1.15rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--gold-light)' },
    kidsQuote: { text: '"Mere Chacha ki Shaadi mein Jalool Jalool aana"', fontSize: '0.95rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--gold-light)' },
    endNote: { text: 'Tuesday, 28th April 2026 · Tivoli Lotus Court, Noida', fontSize: '0.95rem', fontFamily: 'Cormorant Garamond, serif', color: 'rgba(255,255,255,0.5)' },
  },
};

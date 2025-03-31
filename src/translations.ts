export const translations = {
  en: {
    nav: {
      services: 'Services',
      expertise: 'Expertise',
      contact: 'Contact'
    },
    hero: {
      title: 'Creating Digital Solutions That Matter',
      subtitle: 'I develop innovative web applications, mobile apps, and digital platforms that solve real problems and enhance people\'s daily lives.',
      cta: 'Get in touch'
    },
    services: {
      title: 'My Services',
      web: {
        title: 'Web Applications',
        description: 'I create intuitive and user-friendly web applications that make life easier, from productivity tools to entertainment platforms.'
      },
      mobile: {
        title: 'Mobile Apps',
        description: 'I build engaging mobile applications that provide value to users through seamless experiences and innovative features.'
      },
      platforms: {
        title: 'Digital Platforms',
        description: 'I develop scalable platforms that connect people, streamline processes, and create new possibilities for users.'
      }
    },
    expertise: {
      title: 'My Expertise',
      modern: {
        title: 'Modern Technology',
        description: 'I leverage cutting-edge technologies to create fast, reliable, and user-friendly digital solutions that stand the test of time.'
      },
      quality: {
        title: 'Quality Solutions',
        description: 'From concept to deployment, I focus on delivering high-quality applications that provide real value to end users.'
      }
    },
    contact: {
      title: 'Let\'s Build Something Amazing',
      description: 'Have an idea for a project that could make a difference? I\'d love to hear about it and discuss how we can bring it to life.',
      button: 'Contact Me'
    },
    footer: {
      rights: 'All rights reserved.'
    }
  },
  nl: {
    nav: {
      services: 'Diensten',
      expertise: 'Expertise',
      contact: 'Contact'
    },
    hero: {
      title: 'Digitale Oplossingen die Ertoe Doen',
      subtitle: 'Ik ontwikkel innovatieve webapplicaties, mobiele apps en digitale platforms die echte problemen oplossen en het dagelijks leven verbeteren.',
      cta: 'Neem contact op'
    },
    services: {
      title: 'Mijn Diensten',
      web: {
        title: 'Webapplicaties',
        description: 'Ik creëer intuïtieve en gebruiksvriendelijke webapplicaties die het leven makkelijker maken, van productiviteitstools tot entertainmentplatforms.'
      },
      mobile: {
        title: 'Mobiele Apps',
        description: 'Ik bouw boeiende mobiele applicaties die waarde bieden aan gebruikers door naadloze ervaringen en innovatieve functies.'
      },
      platforms: {
        title: 'Digitale Platforms',
        description: 'Ik ontwikkel schaalbare platforms die mensen verbinden, processen stroomlijnen en nieuwe mogelijkheden creëren voor gebruikers.'
      }
    },
    expertise: {
      title: 'Mijn Expertise',
      modern: {
        title: 'Moderne Technologie',
        description: 'Ik maak gebruik van de nieuwste technologieën om snelle, betrouwbare en gebruiksvriendelijke digitale oplossingen te creëren die de tand des tijds doorstaan.'
      },
      quality: {
        title: 'Kwaliteitsoplossingen',
        description: 'Van concept tot implementatie focus ik op het leveren van hoogwaardige applicaties die echte waarde bieden aan eindgebruikers.'
      }
    },
    contact: {
      title: 'Laten we Iets Geweldigs Bouwen',
      description: 'Heb je een idee voor een project dat het verschil kan maken? Ik hoor graag van je en bespreek hoe we het tot leven kunnen brengen.',
      button: 'Neem Contact Op'
    },
    footer: {
      rights: 'Alle rechten voorbehouden.'
    }
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;
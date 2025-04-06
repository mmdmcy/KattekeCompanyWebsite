export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      expertise: 'Expertise',
      contact: 'Contact',
      legal: 'Legal'
    },
    hero: {
      title: 'Advanced AI & Software Solutions',
      subtitle: 'I specialize in artificial intelligence, machine learning, and innovative software solutions that transform ideas into intelligent, scalable applications.',
      cta: 'Get in touch'
    },
    services: {
      title: 'My Services',
      web: {
        title: 'AI & Machine Learning',
        description: 'I develop custom AI solutions and machine learning models that solve complex problems and drive innovation.'
      },
      mobile: {
        title: 'SaaS Development',
        description: 'I create scalable, cloud-based software solutions with seamless AI integration and robust architecture.'
      },
      platforms: {
        title: 'Custom Software',
        description: 'I build bespoke applications, web platforms, and mobile solutions tailored to specific needs and challenges.'
      }
    },
    expertise: {
      title: 'My Expertise',
      modern: {
        title: 'AI Technology',
        description: 'I leverage cutting-edge AI and machine learning technologies to create intelligent solutions that adapt and evolve.'
      },
      quality: {
        title: 'Quality Solutions',
        description: 'From concept to deployment, I focus on delivering sophisticated applications that provide measurable value and scalable results.'
      }
    },
    contact: {
      title: 'Let\'s Build Something Intelligent',
      description: 'Have a project that could benefit from AI and advanced software solutions? I\'d love to discuss how we can transform it into reality.',
      button: 'Contact Me'
    },
    footer: {
      rights: 'All rights reserved.',
      company: {
        title: 'Company',
        about: 'About Katteke',
        description: 'AI, machine learning, and software development.',
        social: 'Follow me on X'
      },
      legal: {
        title: 'Legal',
        terms: 'Terms of Service',
        refunds: 'Refund Policy',
        cancellation: 'Cancellation Policy',
        promotions: 'Promotional Terms'
      },
      contact: {
        title: 'Contact',
        email: 'Email',
        social: 'Social Media'
      }
    }
  },
  nl: {
    nav: {
      home: 'Home',
      services: 'Diensten',
      expertise: 'Expertise',
      contact: 'Contact',
      legal: 'Juridisch'
    },
    hero: {
      title: 'Geavanceerde AI & Software Oplossingen',
      subtitle: 'Ik ben gespecialiseerd in kunstmatige intelligentie, machine learning en innovatieve software-oplossingen die ideeën transformeren in intelligente, schaalbare applicaties.',
      cta: 'Neem contact op'
    },
    services: {
      title: 'Mijn Diensten',
      web: {
        title: 'AI & Machine Learning',
        description: 'Ik ontwikkel op maat gemaakte AI-oplossingen en machine learning modellen die complexe problemen oplossen en innovatie stimuleren.'
      },
      mobile: {
        title: 'SaaS Ontwikkeling',
        description: 'Ik creëer schaalbare, cloud-gebaseerde softwareoplossingen met naadloze AI-integratie en robuuste architectuur.'
      },
      platforms: {
        title: 'Maatwerk Software',
        description: 'Ik bouw op maat gemaakte applicaties, webplatforms en mobiele oplossingen afgestemd op specifieke behoeften en uitdagingen.'
      }
    },
    expertise: {
      title: 'Mijn Expertise',
      modern: {
        title: 'AI Technologie',
        description: 'Ik maak gebruik van de nieuwste AI- en machine learning-technologieën om intelligente oplossingen te creëren die zich aanpassen en ontwikkelen.'
      },
      quality: {
        title: 'Kwaliteitsoplossingen',
        description: 'Van concept tot implementatie focus ik op het leveren van geavanceerde applicaties die meetbare waarde en schaalbare resultaten bieden.'
      }
    },
    contact: {
      title: 'Laten we Iets Intelligents Bouwen',
      description: 'Heeft u een project dat kan profiteren van AI en geavanceerde software-oplossingen? Ik bespreek graag hoe we het kunnen omzetten in realiteit.',
      button: 'Neem Contact Op'
    },
    footer: {
      rights: 'Alle rechten voorbehouden.',
      company: {
        title: 'Bedrijf',
        about: 'Over Katteke',
        description: 'AI, machine learning en softwareontwikkeling.',
        social: 'Volg mij op X'
      },
      legal: {
        title: 'Juridisch',
        terms: 'Algemene Voorwaarden',
        refunds: 'Terugbetalingsbeleid',
        cancellation: 'Annuleringsbeleid',
        promotions: 'Actievoorwaarden'
      },
      contact: {
        title: 'Contact',
        email: 'E-mail',
        social: 'Social Media'
      }
    }
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en;

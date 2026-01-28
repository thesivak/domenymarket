export const languages = {
  cs: 'Čeština',
  en: 'English',
};

export const defaultLang = 'cs';

export const translations = {
  cs: {
    nav: {
      contact: 'Kontaktujte nás',
    },
    hero: {
      badge: 'Exkluzivní nabídka',
      title1: 'Prémiové',
      title2: '.cz domény',
      title3: 'pro váš business',
      description: 'Pečlivě kurátorovaná kolekce českých domén s historií, autoritou a potenciálem pro růst vašeho podnikání.',
      cta: 'Prohlédnout kolekci',
      secondary: 'Jak to funguje',
    },
    featured: {
      label: 'Featured',
      interest: 'Mám zájem',
    },
    stats: {
      domains: 'Domén v kolekci',
      czech: 'České .cz domény',
      transfer: 'Rychlost převodu',
      potential: 'Potenciál růstu',
    },
    collection: {
      badge: 'Kolekce',
      title: 'Domény na prodej',
      description: 'Každá doména je pečlivě vybraná pro svůj potenciál, historii a schopnost budovat značku.',
      interest: 'Mám zájem',
      premium: 'Premium',
    },
    process: {
      badge: 'Proces',
      title: 'Jednoduchý a transparentní',
      description: 'Od prvního kontaktu k převodu domény ve třech krocích.',
      step1: {
        title: 'Vyberte doménu',
        text: 'Prohlédněte si naši kolekci a najděte doménu, která rezonuje s vaší vizí a značkou.',
      },
      step2: {
        title: 'Kontaktujte nás',
        text: 'Napište nám s vaší nabídkou. Každou nabídku pečlivě zvážíme a odpovíme do 24 hodin.',
      },
      step3: {
        title: 'Bezpečný převod',
        text: 'Po dohodě zajistíme rychlý a bezpečný převod domény na váš registrátorský účet.',
      },
    },
    contact: {
      badge: 'Kontakt',
      title: 'Máte zájem?',
      description: 'Napište nám email s názvem domény a vaší nabídkou. Jsme otevřeni diskuzi a každou nabídku pečlivě zvážíme.',
      response: 'Odpovídáme do 24 hodin',
    },
    footer: {
      rights: 'Prémiové české domény',
      billing: 'Fakturační údaje',
    },
    categories: {
      'SaaS & Tech': 'SaaS & Tech',
      'Marketing & Reklama': 'Marketing & Reklama',
      'E-commerce': 'E-commerce',
      'Umění & Kultura': 'Umění & Kultura',
    },
  },
  en: {
    nav: {
      contact: 'Contact Us',
    },
    hero: {
      badge: 'Exclusive Offer',
      title1: 'Premium',
      title2: '.cz Domains',
      title3: 'for Your Business',
      description: 'Carefully curated collection of Czech domains with history, authority and growth potential for your business.',
      cta: 'Browse Collection',
      secondary: 'How It Works',
    },
    featured: {
      label: 'Featured',
      interest: 'I\'m Interested',
    },
    stats: {
      domains: 'Domains in Collection',
      czech: 'Czech .cz Domains',
      transfer: 'Transfer Speed',
      potential: 'Growth Potential',
    },
    collection: {
      badge: 'Collection',
      title: 'Domains for Sale',
      description: 'Each domain is carefully selected for its potential, history and brand-building capability.',
      interest: 'I\'m Interested',
      premium: 'Premium',
    },
    process: {
      badge: 'Process',
      title: 'Simple and Transparent',
      description: 'From first contact to domain transfer in three steps.',
      step1: {
        title: 'Choose a Domain',
        text: 'Browse our collection and find a domain that resonates with your vision and brand.',
      },
      step2: {
        title: 'Contact Us',
        text: 'Send us your offer. We carefully consider every offer and respond within 24 hours.',
      },
      step3: {
        title: 'Secure Transfer',
        text: 'After agreement, we ensure fast and secure domain transfer to your registrar account.',
      },
    },
    contact: {
      badge: 'Contact',
      title: 'Interested?',
      description: 'Send us an email with the domain name and your offer. We\'re open to discussion and carefully consider every offer.',
      response: 'We respond within 24 hours',
    },
    footer: {
      rights: 'Premium Czech Domains',
      billing: 'Billing Information',
    },
    categories: {
      'SaaS & Tech': 'SaaS & Tech',
      'Marketing & Reklama': 'Marketing & Advertising',
      'E-commerce': 'E-commerce',
      'Umění & Kultura': 'Art & Culture',
    },
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as keyof typeof translations;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof translations) {
  return translations[lang];
}

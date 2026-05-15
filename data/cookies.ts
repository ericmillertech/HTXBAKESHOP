export type CookieCategory = 'classic' | 'premium' | 'baddie-box';

export interface ColorWay {
  name: string;
  color: string;
  flavor: string;
  price: number;
}

export interface CookieMacros {
  protein: number;
  calories: number;
  netCarbs: number;
}

export interface Cookie {
  id: string;
  name: string;
  category: CookieCategory;
  htownStory: string;
  description: string;
  ingredients: string[];
  allergens: string[];
  price: number;
  badge: 'premium' | 'limited' | null;
  featured: boolean;
  emoji: string;
  colorways?: ColorWay[];
  macros?: CookieMacros;
}

export const cookies: Cookie[] = [
  {
    id: 'the-slab',
    name: 'THE SLAB',
    category: 'classic',
    htownStory: 'Every Houston legend started with something classic. This is the foundation.',
    description: 'Brown butter base, Valrhona semi-sweet chocolate discs, Maldon sea salt finish. The cookie that everything else is built on.',
    ingredients: ['Brown butter', 'Valrhona 60% discs', 'King Arthur bread + cake flour', 'Maldon salt', 'Madagascar vanilla bean paste'],
    allergens: ['wheat', 'dairy', 'eggs'],
    price: 5.50,
    badge: null,
    featured: true,
    emoji: '🍫',
  },
  {
    id: 'the-plug',
    name: 'THE PLUG',
    category: 'classic',
    htownStory: 'The connect. Half dark, half milk — because the best things in H-Town always come in pairs.',
    description: 'Half Valrhona dark, half Valrhona milk chocolate. Deep caramel undertones. The most chocolatey cookie on the menu.',
    ingredients: ['Brown butter', 'Valrhona 70% dark', 'Valrhona 40% milk', 'King Arthur flour', 'Maldon salt'],
    allergens: ['wheat', 'dairy', 'eggs'],
    price: 5.75,
    badge: null,
    featured: false,
    emoji: '⚫',
  },
  {
    id: 'the-come-up',
    name: 'THE COME UP',
    category: 'classic',
    htownStory: 'Triple the chocolate, triple the ambition. Like Houston itself — never satisfied with just enough.',
    description: 'Dark, milk, and white Valrhona chocolate in one dough. White drizzle finish. Brown butter throughout.',
    ingredients: ['Brown butter', 'Valrhona dark', 'Valrhona milk', 'Valrhona Ivoire white', 'King Arthur flour'],
    allergens: ['wheat', 'dairy', 'eggs'],
    price: 6.00,
    badge: null,
    featured: false,
    emoji: '🍫',
  },
  {
    id: 'syrup-slow',
    name: 'SYRUP SLOW',
    category: 'classic',
    htownStory: 'Slow roll. Cinnamon sugar crust, dulce de leche at the center. Churro energy, cookie format.',
    description: 'Cinnamon sugar crust, dulce de leche molten center, churro-inspired dough. Slow by design.',
    ingredients: ['Brown butter', 'Cinnamon', 'Dulce de leche', 'King Arthur flour', 'Madagascar vanilla bean paste'],
    allergens: ['wheat', 'dairy', 'eggs'],
    price: 6.00,
    badge: null,
    featured: false,
    emoji: '🥮',
  },
  {
    id: 'swangas',
    name: 'SWANGAS',
    category: 'classic',
    htownStory: '83s on the Caddy. Strawberry shortcake cookie rolling clean. Only in Houston.',
    description: 'Strawberry shortcake dough, frozen cream cheese center, lemon zest, Golden Oreo crumble. Pink glaze finish.',
    ingredients: ['Freeze-dried strawberry', 'Full-fat cream cheese', 'Golden Oreo crumble', 'Lemon zest', 'King Arthur flour'],
    allergens: ['wheat', 'dairy', 'eggs', 'soy'],
    price: 6.50,
    badge: null,
    featured: false,
    emoji: '🍓',
  },
  {
    id: 'south-main',
    name: 'SOUTH MAIN',
    category: 'classic',
    htownStory: 'Named for the corridor. Banana pudding cookie straight from the soul of South Houston.',
    description: 'Banana pudding dough, Nilla wafer crumble, vanilla custard center, caramel drizzle. Comfort in a 3.5oz ball.',
    ingredients: ['Banana', 'Nilla wafer crumble', 'Vanilla custard', 'Brown butter', 'Caramel drizzle'],
    allergens: ['wheat', 'dairy', 'eggs', 'soy'],
    price: 6.00,
    badge: null,
    featured: false,
    emoji: '🍌',
  },
  {
    id: 'the-713',
    name: 'THE 713',
    category: 'classic',
    htownStory: '713. The area code. Houston stamped on every bite of this red velvet.',
    description: 'Red velvet dough, Dutch cocoa, frozen cream cheese center. Houston\'s area code baked in.',
    ingredients: ['Dutch cocoa', 'Full-fat cream cheese', 'Brown butter', 'King Arthur flour', 'Madagascar vanilla bean paste'],
    allergens: ['wheat', 'dairy', 'eggs'],
    price: 6.00,
    badge: null,
    featured: false,
    emoji: '❤️',
  },
  {
    id: 'the-feeder',
    name: 'THE FEEDER',
    category: 'classic',
    htownStory: 'The I-10 of cookies. Everything on it. Built for the real ones who want it all.',
    description: 'Dark chocolate, Reese\'s, Oreo chunks, cayenne heat. Overloaded by design. Spice hits at the end.',
    ingredients: ['Valrhona dark', "Reese's pieces", 'Oreo crumble', 'Cayenne', 'Brown butter'],
    allergens: ['wheat', 'dairy', 'eggs', 'peanuts', 'soy'],
    price: 6.50,
    badge: null,
    featured: false,
    emoji: '🌶️',
  },
  {
    id: 'bayou-city',
    name: 'BAYOU CITY',
    category: 'classic',
    htownStory: 'Named after the bayou. Texas pecans, local honey, smoked caramel — this one tastes like the land.',
    description: 'Brown butter pecan dough, smoked honey caramel center, Texas pecans toasted in-house.',
    ingredients: ['Texas pecans', 'Local Texas honey', 'Brown butter', 'Smoked caramel', 'King Arthur flour'],
    allergens: ['wheat', 'dairy', 'eggs', 'tree nuts'],
    price: 6.50,
    badge: null,
    featured: false,
    emoji: '🌿',
  },
  {
    id: 'purple-drank',
    name: 'PURPLE DRANK',
    category: 'premium',
    htownStory: 'H-Town. You know what it is. Ube and white chocolate in the most Houston cookie ever made.',
    description: 'Natural ube halaya (purple yam), Valrhona Ivoire white chocolate chips, coconut cream center. Zero artificial color — the purple is real.',
    ingredients: ['Ube halaya', 'Valrhona Ivoire white choc', 'Coconut cream', 'Brown butter', 'King Arthur flour'],
    allergens: ['wheat', 'dairy', 'eggs'],
    price: 7.00,
    badge: 'premium',
    featured: false,
    emoji: '🟣',
  },
  {
    id: 'candy-paint',
    name: 'CANDY PAINT',
    category: 'premium',
    htownStory: "Inspired by Houston's candy painted slabs rolling down the boulevard on a Sunday.",
    description: 'Mirror glaze so shiny it reflects your face. Four colorways — each a different natural flavor. Zero artificial dye.',
    ingredients: ['Valrhona Ivoire white choc', 'Natural color powders', 'Butterfly pea flower', 'Freeze-dried strawberry', 'Saffron'],
    colorways: [
      { name: 'Purple Drank', color: '#6B2FA0', flavor: 'Grape lavender', price: 7.50 },
      { name: 'Candy Red',    color: '#B83020', flavor: 'Strawberry hibiscus', price: 7.50 },
      { name: 'Midnight Blue',color: '#1A3A6B', flavor: 'Blueberry lemon', price: 7.50 },
      { name: 'Slab Gold',    color: '#C8970C', flavor: 'Saffron honey', price: 8.50 },
    ],
    allergens: ['wheat', 'dairy', 'eggs'],
    price: 7.50,
    badge: 'premium',
    featured: true,
    emoji: '🎨',
  },
  {
    id: 'the-grillz',
    name: 'THE GRILLZ',
    category: 'premium',
    htownStory: 'Paul Wall edition. Gold on gold on gold. Shines like jewelry, hits like H-Town.',
    description: 'Gold mirror glaze tinted with real saffron. Honeycomb toffee crunch. Edible gold leaf finish. Limited run only.',
    ingredients: ['Saffron gold mirror glaze', 'Honeycomb toffee', 'Valrhona Ivoire', 'Edible gold leaf', 'Maldon salt'],
    allergens: ['wheat', 'dairy', 'eggs'],
    price: 8.50,
    badge: 'limited',
    featured: false,
    emoji: '🥇',
  },
  {
    id: 'med-center',
    name: 'MED CENTER',
    category: 'baddie-box',
    htownStory: 'Named for the largest medical complex in the world. This cookie is built, not just baked.',
    description: 'High protein vanilla bean. Clean macros. Grass-fed whey isolate, allulose-sweetened. 215 calories.',
    ingredients: ['Grass-fed whey isolate', 'Allulose', 'Madagascar vanilla bean paste', 'King Arthur flour', 'Grass-fed butter'],
    allergens: ['wheat', 'dairy', 'eggs'],
    price: 6.50,
    badge: null,
    featured: false,
    emoji: '💪',
    macros: { protein: 20, calories: 215, netCarbs: 8 },
  },
  {
    id: 'midtown-nights',
    name: 'MIDTOWN NIGHTS',
    category: 'baddie-box',
    htownStory: 'Midtown after hours. Dark espresso, dark chocolate, still hitting macros.',
    description: 'High protein dark espresso chocolate. 20g whey isolate. 220 calories. Tastes like a treat, built like fuel.',
    ingredients: ['Grass-fed whey isolate', 'Espresso powder', 'Valrhona dark cocoa', 'Allulose', 'Grass-fed butter'],
    allergens: ['wheat', 'dairy', 'eggs'],
    price: 6.50,
    badge: null,
    featured: false,
    emoji: '☕',
    macros: { protein: 20, calories: 220, netCarbs: 7 },
  },
];

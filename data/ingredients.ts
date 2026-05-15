export interface Ingredient {
  id: string;
  name: string;
  source: string;
  why: string;
  icon: string;
}

export const ingredients: Ingredient[] = [
  {
    id: 'brown-butter',
    name: 'Brown Butter',
    source: 'Made in-house, every batch',
    why: 'We brown every batch ourselves. That nutty depth you can\'t identify? That\'s it.',
    icon: '🧈',
  },
  {
    id: 'valrhona',
    name: 'Valrhona Chocolate',
    source: 'Valrhona, France',
    why: 'French couverture. The same chocolate used in Michelin-starred kitchens. Not a commodity blend.',
    icon: '🍫',
  },
  {
    id: 'king-arthur',
    name: 'King Arthur Flour',
    source: 'King Arthur Baking Company',
    why: 'Unbleached, high-protein. The structure behind every thick, gooey cookie.',
    icon: '⚗️',
  },
  {
    id: 'maldon',
    name: 'Maldon Sea Salt',
    source: 'Essex, England',
    why: 'Hand-harvested pyramid flakes. Finishing every single cookie. Never substituted.',
    icon: '✦',
  },
  {
    id: 'vanilla',
    name: 'Madagascar Vanilla Bean Paste',
    source: 'Madagascar',
    why: 'Real vanilla you can see and taste. Not extract. Never imitation. The specks are real.',
    icon: '🌿',
  },
  {
    id: 'color-powders',
    name: 'Natural Color Powders',
    source: 'Butterfly pea flower · Freeze-dried strawberry · Saffron',
    why: 'Zero artificial dye. Ever. The color is real or it doesn\'t go on the cookie.',
    icon: '🎨',
  },
  {
    id: 'cream-cheese',
    name: 'Full Fat Cream Cheese',
    source: 'Philadelphia',
    why: 'For our stuffed cookies. Nothing else works the same. Full fat only — no compromises.',
    icon: '🧀',
  },
  {
    id: 'texas-honey',
    name: 'Local Texas Honey',
    source: 'Texas',
    why: 'Sourced in Texas. Used in Bayou City. Supports what\'s local and tastes like it.',
    icon: '🍯',
  },
];

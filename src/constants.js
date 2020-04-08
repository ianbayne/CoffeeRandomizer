export const STIRRING = [
  'Stir 1 time',
  'Stir in a NSEW direction',
  'Stir 2 times in the same direction before pressing',
  'Stir once in each direction',
  "Don't stir",
  'Your choice of how to stir',
];
export const WATER_TEMPERATURE_IN_CELSIUS = [
  '75',
  '80',
  '85',
  '90',
  '95',
  'your choice',
];
export const COFFEE_TO_WATER_RATIO = [
  {coffee: '12g', water: '200g'},
  {coffee: '15g', water: '200g'},
  {coffee: '15g', water: '250g'},
  {coffee: '24g', water: '200g', diluteToShare: true},
  {coffee: '30g', water: '200g', diluteToShare: true},
  {coffee: 'your choice', water: 'your choice'},
];
export const GRIND_AND_BREW_TIME = [
  {grind: 'very fine', time: '30s'},
  {grind: 'fine', time: '60s'},
  {grind: 'medium fine', time: '90s'},
  {grind: 'medium', time: '120s'},
  {grind: 'coarse', time: '4min'},
  {grind: 'your choice', time: 'your choice'},
];
export const BLOOM_TIME_AND_INVERSION = [
  {orientation: 'standard', bloom: false},
  {orientation: 'standard', bloom: true, time: '30s', water: '30g'},
  {orientation: 'standard', bloom: true, time: '30s', water: '60g'},
  {orientation: 'inverted', bloom: false},
  {orientation: 'inverted', bloom: true, time: '30s', water: '30g'},
  {orientation: 'inverted', bloom: true, time: '30s', water: '60g'},
];

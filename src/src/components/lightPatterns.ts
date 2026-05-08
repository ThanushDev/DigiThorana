export interface RingConfig {
  color: string;
  dashArray: string;
  strokeWidth: number;
  animationClass: string;
}

export interface LightPattern {
  rings: [RingConfig, RingConfig, RingConfig];
}

const C = {
  yellow: '#FFC627',
  blue: '#005EB8',
  red: '#DA291C',
  orange: '#F2A900',
  white: '#FFFFFF'
};

export const lightPatterns: LightPattern[] = [
  { rings: [{ color: C.white, dashArray: '2 4', strokeWidth: 2, animationClass: 'light-ring-forward' }, { color: C.yellow, dashArray: '2 3', strokeWidth: 1.5, animationClass: 'light-ring-backward' }, { color: C.orange, dashArray: '1 2', strokeWidth: 1, animationClass: 'light-ring-fast' }] },
  { rings: [{ color: C.blue, dashArray: '4 2', strokeWidth: 2, animationClass: 'light-ring-fast' }, { color: C.red, dashArray: '2 2', strokeWidth: 1.5, animationClass: 'light-ring-forward' }, { color: C.white, dashArray: '1 1', strokeWidth: 1, animationClass: 'light-ring-medium' }] },
  { rings: [{ color: C.orange, dashArray: '1 4', strokeWidth: 2, animationClass: 'light-ring-backward' }, { color: C.yellow, dashArray: '4 1', strokeWidth: 1.5, animationClass: 'light-ring-slow' }, { color: C.blue, dashArray: '2 2', strokeWidth: 1, animationClass: 'light-ring-forward' }] },
  { rings: [{ color: C.red, dashArray: '5 5', strokeWidth: 2, animationClass: 'light-ring-medium' }, { color: C.white, dashArray: '2 2', strokeWidth: 1.5, animationClass: 'light-ring-fast' }, { color: C.yellow, dashArray: '1 3', strokeWidth: 1, animationClass: 'light-ring-backward' }] },
  { rings: [{ color: C.yellow, dashArray: '3 1', strokeWidth: 2, animationClass: 'light-ring-forward' }, { color: C.orange, dashArray: '1 1', strokeWidth: 1.5, animationClass: 'light-ring-medium' }, { color: C.red, dashArray: '4 2', strokeWidth: 1, animationClass: 'light-ring-slow' }] },
  { rings: [{ color: C.blue, dashArray: '2 5', strokeWidth: 2, animationClass: 'light-ring-fast' }, { color: C.white, dashArray: '3 3', strokeWidth: 1.5, animationClass: 'light-ring-backward' }, { color: C.orange, dashArray: '1 2', strokeWidth: 1, animationClass: 'light-ring-medium' }] },
  { rings: [{ color: C.white, dashArray: '1 1', strokeWidth: 2, animationClass: 'light-ring-slow' }, { color: C.red, dashArray: '4 4', strokeWidth: 1.5, animationClass: 'light-ring-forward' }, { color: C.yellow, dashArray: '2 1', strokeWidth: 1, animationClass: 'light-ring-fast' }] },
  { rings: [{ color: C.orange, dashArray: '2 3', strokeWidth: 2, animationClass: 'light-ring-medium' }, { color: C.blue, dashArray: '1 4', strokeWidth: 1.5, animationClass: 'light-ring-backward' }, { color: C.white, dashArray: '5 2', strokeWidth: 1, animationClass: 'light-ring-slow' }] },
  { rings: [{ color: C.red, dashArray: '3 2', strokeWidth: 2, animationClass: 'light-ring-forward' }, { color: C.yellow, dashArray: '2 5', strokeWidth: 1.5, animationClass: 'light-ring-fast' }, { color: C.orange, dashArray: '1 1', strokeWidth: 1, animationClass: 'light-ring-medium' }] },
  { rings: [{ color: C.blue, dashArray: '4 1', strokeWidth: 2, animationClass: 'light-ring-backward' }, { color: C.white, dashArray: '2 2', strokeWidth: 1.5, animationClass: 'light-ring-slow' }, { color: C.red, dashArray: '3 3', strokeWidth: 1, animationClass: 'light-ring-forward' }] },
  { rings: [{ color: C.yellow, dashArray: '1 2', strokeWidth: 2, animationClass: 'light-ring-medium' }, { color: C.orange, dashArray: '5 1', strokeWidth: 1.5, animationClass: 'light-ring-fast' }, { color: C.blue, dashArray: '2 4', strokeWidth: 1, animationClass: 'light-ring-backward' }] },
  { rings: [{ color: C.white, dashArray: '3 3', strokeWidth: 2, animationClass: 'light-ring-forward' }, { color: C.red, dashArray: '2 2', strokeWidth: 1.5, animationClass: 'light-ring-backward' }, { color: C.orange, dashArray: '4 1', strokeWidth: 1, animationClass: 'light-ring-medium' }] },
  { rings: [{ color: C.blue, dashArray: '1 5', strokeWidth: 2, animationClass: 'light-ring-very-fast' }, { color: C.yellow, dashArray: '3 3', strokeWidth: 1.5, animationClass: 'light-ring-forward' }, { color: C.white, dashArray: '2 4', strokeWidth: 1, animationClass: 'light-ring-slow' }] },
  { rings: [{ color: C.orange, dashArray: '6 2', strokeWidth: 2, animationClass: 'light-ring-medium' }, { color: C.red, dashArray: '1 2', strokeWidth: 1.5, animationClass: 'light-ring-fast' }, { color: C.yellow, dashArray: '4 4', strokeWidth: 1, animationClass: 'light-ring-backward' }] },
  { rings: [{ color: C.white, dashArray: '2 1', strokeWidth: 2, animationClass: 'light-ring-fast' }, { color: C.blue, dashArray: '4 3', strokeWidth: 1.5, animationClass: 'light-ring-forward' }, { color: C.red, dashArray: '1 5', strokeWidth: 1, animationClass: 'light-ring-slow' }] }
];

export const getPattern = (index: number): LightPattern => {
  return lightPatterns[(index - 1) % lightPatterns.length];
};

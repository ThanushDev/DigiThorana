// 15 unique light patterns using Buddhist flag colors:
// Yellow #FFC627, Blue #005EB8, Red #DA291C, Orange #F2A900, White #FFFFFF
// Each pattern is 3 concentric rings with different dash arrays, colors, speeds, and directions

export interface RingConfig {
  color: string;
  dashArray: string;
  strokeWidth: number;
  animationClass: string;
}

export interface LightPattern {
  rings: [RingConfig, RingConfig, RingConfig]; // outer, middle, inner
}

const C = {
  yellow: '#FFC627',
  blue: '#005EB8',
  red: '#DA291C',
  orange: '#F2A900',
  white: '#FFFFFF'
};

export const lightPatterns: LightPattern[] = [
// 1: White-Yellow-Orange (default reference style)
{
  rings: [
  {
    color: C.white,
    dashArray: '2 4',
    strokeWidth: 2,
    animationClass: 'light-ring-forward'
  },
  {
    color: C.yellow,
    dashArray: '2 3',
    strokeWidth: 1.5,
    animationClass: 'light-ring-backward'
  },
  {
    color: C.orange,
    dashArray: '1 2',
    strokeWidth: 1,
    animationClass: 'light-ring-fast'
  }]

},
// 2: Blue-Red-White - alternating
{
  rings: [
  {
    color: C.blue,
    dashArray: '3 3',
    strokeWidth: 2,
    animationClass: 'light-ring-medium'
  },
  {
    color: C.red,
    dashArray: '1 4',
    strokeWidth: 1.5,
    animationClass: 'light-ring-forward'
  },
  {
    color: C.white,
    dashArray: '2 2',
    strokeWidth: 1,
    animationClass: 'light-ring-fast'
  }]

},
// 3: Yellow-White-Red - bright flicker
{
  rings: [
  {
    color: C.yellow,
    dashArray: '4 4',
    strokeWidth: 2,
    animationClass: 'light-ring-backward'
  },
  {
    color: C.white,
    dashArray: '1 3',
    strokeWidth: 1.5,
    animationClass: 'light-ring-very-fast'
  },
  {
    color: C.red,
    dashArray: '3 6',
    strokeWidth: 1,
    animationClass: 'light-ring-slow'
  }]

},
// 4: Orange-Blue-Yellow
{
  rings: [
  {
    color: C.orange,
    dashArray: '2 6',
    strokeWidth: 2,
    animationClass: 'light-ring-long-forward'
  },
  {
    color: C.blue,
    dashArray: '5 5',
    strokeWidth: 1.5,
    animationClass: 'light-ring-backward'
  },
  {
    color: C.yellow,
    dashArray: '1 1',
    strokeWidth: 1,
    animationClass: 'light-ring-fast'
  }]

},
// 5: Red-Yellow-Blue
{
  rings: [
  {
    color: C.red,
    dashArray: '3 5',
    strokeWidth: 2,
    animationClass: 'light-ring-forward'
  },
  {
    color: C.yellow,
    dashArray: '2 2',
    strokeWidth: 1.5,
    animationClass: 'light-ring-medium'
  },
  {
    color: C.blue,
    dashArray: '4 8',
    strokeWidth: 1,
    animationClass: 'light-ring-long-backward'
  }]

},
// 6: White-Blue-Orange - icy
{
  rings: [
  {
    color: C.white,
    dashArray: '6 3',
    strokeWidth: 2,
    animationClass: 'light-ring-slow'
  },
  {
    color: C.blue,
    dashArray: '2 4',
    strokeWidth: 1.5,
    animationClass: 'light-ring-forward'
  },
  {
    color: C.orange,
    dashArray: '1 5',
    strokeWidth: 1,
    animationClass: 'light-ring-very-fast'
  }]

},
// 7: Yellow-Red-White - festive
{
  rings: [
  {
    color: C.yellow,
    dashArray: '1 2',
    strokeWidth: 2,
    animationClass: 'light-ring-fast'
  },
  {
    color: C.red,
    dashArray: '4 4',
    strokeWidth: 1.5,
    animationClass: 'light-ring-backward'
  },
  {
    color: C.white,
    dashArray: '2 8',
    strokeWidth: 1,
    animationClass: 'light-ring-long-forward'
  }]

},
// 8: Blue-Orange-Red
{
  rings: [
  {
    color: C.blue,
    dashArray: '5 2',
    strokeWidth: 2,
    animationClass: 'light-ring-medium'
  },
  {
    color: C.orange,
    dashArray: '1 3',
    strokeWidth: 1.5,
    animationClass: 'light-ring-very-fast'
  },
  {
    color: C.red,
    dashArray: '2 5',
    strokeWidth: 1,
    animationClass: 'light-ring-slow'
  }]

},
// 9: Orange-White-Yellow - sunny
{
  rings: [
  {
    color: C.orange,
    dashArray: '3 3',
    strokeWidth: 2,
    animationClass: 'light-ring-forward'
  },
  {
    color: C.white,
    dashArray: '1 4',
    strokeWidth: 1.5,
    animationClass: 'light-ring-backward'
  },
  {
    color: C.yellow,
    dashArray: '2 2',
    strokeWidth: 1,
    animationClass: 'light-ring-fast'
  }]

},
// 10: Red-White-Blue
{
  rings: [
  {
    color: C.red,
    dashArray: '2 4',
    strokeWidth: 2,
    animationClass: 'light-ring-long-backward'
  },
  {
    color: C.white,
    dashArray: '3 6',
    strokeWidth: 1.5,
    animationClass: 'light-ring-medium'
  },
  {
    color: C.blue,
    dashArray: '1 1',
    strokeWidth: 1,
    animationClass: 'light-ring-very-fast'
  }]

},
// 11: Yellow-Orange-Red - flame
{
  rings: [
  {
    color: C.yellow,
    dashArray: '4 2',
    strokeWidth: 2,
    animationClass: 'light-ring-fast'
  },
  {
    color: C.orange,
    dashArray: '2 3',
    strokeWidth: 1.5,
    animationClass: 'light-ring-forward'
  },
  {
    color: C.red,
    dashArray: '1 6',
    strokeWidth: 1,
    animationClass: 'light-ring-slow'
  }]

},
// 12: White-Red-Orange
{
  rings: [
  {
    color: C.white,
    dashArray: '3 9',
    strokeWidth: 2,
    animationClass: 'light-ring-long-forward'
  },
  {
    color: C.red,
    dashArray: '2 2',
    strokeWidth: 1.5,
    animationClass: 'light-ring-backward'
  },
  {
    color: C.orange,
    dashArray: '4 1',
    strokeWidth: 1,
    animationClass: 'light-ring-medium'
  }]

},
// 13: Blue-Yellow-White - sky
{
  rings: [
  {
    color: C.blue,
    dashArray: '1 5',
    strokeWidth: 2,
    animationClass: 'light-ring-very-fast'
  },
  {
    color: C.yellow,
    dashArray: '3 3',
    strokeWidth: 1.5,
    animationClass: 'light-ring-forward'
  },
  {
    color: C.white,
    dashArray: '2 4',
    strokeWidth: 1,
    animationClass: 'light-ring-slow'
  }]

},
// 14: Orange-Red-Yellow
{
  rings: [
  {
    color: C.orange,
    dashArray: '6 2',
    strokeWidth: 2,
    animationClass: 'light-ring-medium'
  },
  {
    color: C.red,
    dashArray: '1 2',
    strokeWidth: 1.5,
    animationClass: 'light-ring-fast'
  },
  {
    color: C.yellow,
    dashArray: '4 6',
    strokeWidth: 1,
    animationClass: 'light-ring-long-backward'
  }]

},
// 15: White-Orange-Blue
{
  rings: [
  {
    color: C.white,
    dashArray: '2 1',
    strokeWidth: 2,
    animationClass: 'light-ring-fast'
  },
  {
    color: C.orange,
    dashArray: '5 3',
    strokeWidth: 1.5,
    animationClass: 'light-ring-backward'
  },
  {
    color: C.blue,
    dashArray: '1 4',
    strokeWidth: 1,
    animationClass: 'light-ring-forward'
  }]

}];


export function getPattern(index: number): LightPattern {
  return lightPatterns[index % lightPatterns.length];
}
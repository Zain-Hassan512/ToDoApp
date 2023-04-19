import React from 'react';
import Svg, {G, Line, Path} from 'react-native-svg';
import {SVGComponentProps} from './types';
import color from '../../utils/color';

const DeleteSVG: React.FC<SVGComponentProps> = ({
  width = 14,
  height = 14,
  color = 'black',
}) => {
  return (
    <Svg
      //version="1.0"
      //xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 256.000000 256.000000"
      preserveAspectRatio="xMidYMid meet">
      <G
        transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none">
        <Path
          d="M990 2523 c-115 -57 -189 -167 -198 -295 l-5 -68 -204 0 c-222 0
-249 -5 -271 -55 -7 -14 -12 -50 -12 -80 l0 -55 -50 0 -50 0 0 -100 0 -100
100 0 100 0 0 -767 0 -768 28 -60 c31 -64 78 -112 142 -145 38 -19 58 -20 711
-20 659 0 674 0 715 21 56 27 117 88 143 144 20 43 21 60 21 383 0 186 3 535
7 775 l6 437 94 0 93 0 0 100 0 100 -45 0 c-44 0 -45 1 -45 33 -1 58 -18 112
-45 135 -25 21 -33 22 -236 22 l-209 0 0 30 c0 138 -84 274 -205 331 l-60 29
-236 0 -235 0 -54 -27z m520 -199 c41 -35 60 -74 60 -124 l0 -40 -291 0 -292
0 6 45 c9 61 31 102 70 125 29 18 51 20 224 20 l191 0 32 -26z m458 -1315 l-3
-761 -28 -24 -28 -24 -624 0 -623 0 -30 25 -29 24 -7 751 c-3 413 -4 755 -1
761 4 5 272 9 691 9 l684 0 -2 -761z"
        />
        <Path d="M792 983 l3 -588 95 0 95 0 3 588 2 587 -100 0 -100 0 2 -587z" />
        <Path d="M1182 983 l3 -588 98 -3 97 -3 0 591 0 590 -100 0 -100 0 2 -587z" />
        <Path d="M1580 980 l0 -590 95 0 95 0 0 590 0 590 -95 0 -95 0 0 -590z" />
      </G>
    </Svg>
  );
};
export default DeleteSVG;

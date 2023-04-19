import React from 'react';
import Svg, {G, Line, Path} from 'react-native-svg';
import {SVGComponentProps} from './types';

const BackSVG: React.FC<SVGComponentProps> = ({
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
      viewBox="0 0 48.000000 48.000000"
      preserveAspectRatio="xMidYMid meet">
      <G
        transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none">
        <Path
          d="M220 315 l-73 -74 73 -75 c70 -73 74 -75 92 -59 18 16 17 19 -39 75
l-57 58 57 58 c55 56 57 59 39 75 -17 16 -22 13 -92 -58z"
        />
      </G>
    </Svg>
  );
};
export default BackSVG;

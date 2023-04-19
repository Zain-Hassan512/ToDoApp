import React from 'react';
import Svg, {G, Line, LinearGradient, Path, Rect, Stop} from 'react-native-svg';
import {SVGComponentProps} from './types';

const AddSVG: React.FC<SVGComponentProps> = ({
  width = 14,
  height = 14,
  color = 'red',
}) => {
  return (
    <Svg
      //version="1.0"
      //xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 1024.000000 1024.000000"
      preserveAspectRatio="xMidYMid meet">
      <G
        transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none">
        <Path
          d="M4981 8084 c-136 -36 -280 -153 -339 -275 -64 -132 -62 -85 -62
-1171 l0 -988 -988 0 c-1086 0 -1039 2 -1171 -62 -124 -60 -239 -204 -276
-343 -19 -76 -19 -204 0 -280 49 -185 205 -340 395 -390 46 -12 212 -15 1048
-15 l992 0 0 -988 c0 -1086 -2 -1039 62 -1171 59 -121 197 -234 337 -275 83
-24 230 -21 312 7 138 47 251 141 316 262 65 124 63 80 63 1174 l0 991 993 0
c835 0 1001 3 1047 15 184 49 325 181 387 364 28 82 31 229 7 312 -41 140
-154 278 -275 337 -132 64 -85 62 -1171 62 l-988 0 0 985 c0 675 -3 1001 -11
1037 -40 191 -204 363 -394 413 -73 19 -212 18 -284 -1z"
        />
      </G>
    </Svg>
  );
};
export default AddSVG;

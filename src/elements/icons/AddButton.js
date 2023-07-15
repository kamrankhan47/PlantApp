import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgAddButton = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      stroke="#222"
      strokeWidth={2}
      d="M3 11c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13v-2Z"
    />
    <Path
      stroke="#222"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v8M16 12H8"
    />
  </Svg>
);
export default SvgAddButton;

import React, { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import SvgUri from '../../lib/react-native-svg-uri';
import svgs, { IconName } from '../../assets/svg';
import Touchable from '../Touchable';

export type IconProps = {
  // icon名字
  name: IconName;
  // 颜色
  color?: string;
  // 大小
  size?: number;
  // 点击回调
  onPress?: () => void;
  // style
  style?: StyleProp<ViewStyle>;
};

const Icon: React.FC<PropsWithChildren<IconProps>> = props => {
  const { name, color = '#666', size = 20, style = {}, onPress } = props;
  let svgXmlData = svgs[name];

  if (!svgXmlData) {
    throw new Error(`No Icon Named ${name} Was Found!`);
  }
  return (
    <Touchable onPress={onPress} style={style}>
      <SvgUri width={size} height={size} svgXmlData={svgXmlData} fill={color} />
    </Touchable>
  );
};

export default Icon;

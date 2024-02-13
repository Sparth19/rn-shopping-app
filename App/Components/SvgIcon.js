import React from 'react';
import Metrics from '../Themes/Metrics';

import Home from '../Assets/Media/Home/home.svg';
import HomeFill from '../Assets/Media/Home/homeFill.svg';
import Category from '../Assets/Media/Category/Category.svg';
import CategoryFill from '../Assets/Media/Category/CategoryFill.svg';
import MoreVertical from '../Assets/Media/Common/more_vertical.svg';
import MoreVerticalFill from '../Assets/Media/Common/more_vertical_fill.svg';
import Heart from '../Assets/Media/Favorites/Heart.svg';
import HeartFill from '../Assets/Media/Favorites/HeartFill.svg';

const IconList = {
  home: Home,
  homeFill: HomeFill,
  category: Category,
  categoryFill: CategoryFill,
  moreVertical: MoreVertical,
  moreVerticalFill: MoreVerticalFill,
  heart: Heart,
  heartFill: HeartFill,
};

const SvgIcon = props => {
  const IconView = IconList[props.name] || IconList['home'];
  return (
    <IconView
      width={Metrics.rfv(props.w) || Metrics.rfv(20)}
      height={Metrics.rfv(props.h) || Metrics.rfv(20)}
      style={props.style}
      {...props}
    />
  );
};

export default SvgIcon;

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
import FavEmpty from '../Assets/Media/Favorites/favunfill.svg';
import FavFill from '../Assets/Media/Favorites/favfill.svg';
import DummyGrey from '../Assets/Media/Common/DummyGrey.svg';
import DummyWhite from '../Assets/Media/Common/DummyWhite.svg';
import SearchWhite from '../Assets/Media/Common/Searchwhite.svg';
import DropdownWhite from '../Assets/Media/Common/DropdownWhite.svg';
import Plus from '../Assets/Media/Common/plus.svg';
import BagBlack from '../Assets/Media/Common/bagBlack.svg';
import BagWhite from '../Assets/Media/Common/bagWhite.svg';
import BackBtn from '../Assets/Media/Common/backbtn.svg';
import Minus from '../Assets/Media/Common/minus.svg';
import PlusDark from '../Assets/Media/Common/plusDark.svg';

const IconList = {
  home: Home,
  homeFill: HomeFill,
  category: Category,
  categoryFill: CategoryFill,
  moreVertical: MoreVertical,
  moreVerticalFill: MoreVerticalFill,
  heart: Heart,
  heartFill: HeartFill,
  dummyGrey: DummyGrey,
  dummyWhite: DummyWhite,
  searchWhite: SearchWhite,
  dropdownWhite: DropdownWhite,
  plus: Plus,
  bagBlack: BagBlack,
  bagWhite: BagWhite,
  favEmpty: FavEmpty,
  favFill: FavFill,
  backBtn: BackBtn,
  minus: Minus,
  plusDark: PlusDark,
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

import React from "react";
import {
  VscHeart,
  VscComment,
  VscTag,
  VscChromeClose,
  VscMail,
  VscCallIncoming,
  VscGlobe,
  VscWand,
} from "react-icons/vsc";

import "./icon.scss";

const iconsEnum = [
  "like",
  "comment",
  "tag",
  "close",
  "mail",
  "phone",
  "country",
  "birthday",
];

const Icon = ({ name, text }) => {
  return (
    <div className="Icon">
      {name === iconsEnum[0] && <VscHeart />}
      {name === iconsEnum[1] && <VscComment />}
      {name === iconsEnum[2] && <VscTag />}
      {name === iconsEnum[3] && <VscChromeClose />}
      {name === iconsEnum[4] && <VscMail />}
      {name === iconsEnum[5] && <VscCallIncoming />}
      {name === iconsEnum[6] && <VscGlobe />}
      {name === iconsEnum[7] && <VscWand />}
      {text && <p>{text}</p>}
    </div>
  );
};

export default Icon;

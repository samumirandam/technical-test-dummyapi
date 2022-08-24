import React from "react";
import { VscHeart, VscComment, VscTag } from "react-icons/vsc";

import "./icon.scss";

const iconsEnum = ["like", "comment", "tag"];

const Icon = ({ name, text }) => {
  return (
    <div className="Icon">
      {name === iconsEnum[0] && <VscHeart />}
      {name === iconsEnum[1] && <VscComment />}
      {name === iconsEnum[2] && <VscTag />}
      {text && <p>{text}</p>}
    </div>
  );
};

export default Icon;

import Image from "next/image";
import SVGfrench from "./french.svg";
import SVGnotification from "./notification.svg";
import SVGarrowDown from "./arrow-down.svg";
import SVGLogoHover from "./j-index.svg";
import SVGiconExercice from "./exercise.svg";
import SVGiconVideo from "./video.svg";
import SVGiconCheck from "./check.svg";
import SVGarrowRight from "./arrow-right.svg";
import SVGarrowLeft from "./arrow-left.svg";
import SVGiconTwitter from "./twitter.svg";
import SVGiconFacebook from "./facebook.svg";
import SVGiconInstagram from "./instagram.svg";

const IMGiconInstagram = () => {
  return <Image src={SVGiconInstagram} />;
};
const IMGiconFacebook = () => {
  return <Image src={SVGiconFacebook} />;
};
const IMGiconTwitter = () => {
  return <Image src={SVGiconTwitter} />;
};

const IMGiconCheck = () => {
  return <Image src={SVGiconCheck} />;
};

const IMGiconVideo = () => {
  return <Image src={SVGiconVideo} />;
};
const IMGiconExercice = () => {
  return <Image src={SVGiconExercice} />;
};
const IMGflagFrench = () => {
  return <Image width={20} src={SVGfrench} />;
};

const IMGnotification = () => {
  return <Image src={SVGnotification} />;
};

const IMGarrowDown = () => {
  return <Image src={SVGarrowDown} />;
};
const IMGarrowLeft = () => {
  return <Image src={SVGarrowLeft} />;
};
const IMGarrowRight = () => {
  return <Image src={SVGarrowRight} />;
};
const IMGLogoHover = () => {
  return (
    <div>
      <Image layout="responsive" objectFit="full" src={SVGLogoHover} />
    </div>
  );
};
export {
  IMGflagFrench,
  IMGnotification,
  IMGarrowDown,
  IMGarrowLeft,
  IMGarrowRight,
  IMGLogoHover,
  IMGiconVideo,
  IMGiconExercice,
  IMGiconCheck,
  IMGiconInstagram,
  IMGiconFacebook,
  IMGiconTwitter,
};

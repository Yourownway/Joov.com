import Image from "next/image";
import avatar from "./Avatar.png";
import job from "./job.svg"

const IMGavatar = () => {
  return <Image src={avatar} layout="responsive" objectFit="content" />;
};
const IMGjob = () => {
    return <Image src={job} />;
  };
export { IMGavatar,IMGjob };

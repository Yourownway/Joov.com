import Image from "next/image";
import gradient1 from "./gradient-1.png";
import gradient2 from "./gradient-2.png";
import Arrow from "./Arrow.js";
import arrow from "./arrow.svg"
const IMGgradient = () => <Image src={gradient1} alt="" title="" 
 height="100%" width="78%" layout="responsive" objectFit="fill" />;
{
  /* <Arrow className={styles.img2}/> */
}
//width={496} height={802}
const IMGbackground = () => <Image src={gradient2} layout="responsive" objectFit="fill" />;
const IMGbackgroundArrow = () => <Image src={arrow} layout="responsive" objectFit="fill"/>
export { IMGgradient, IMGbackground ,  IMGbackgroundArrow };

import Image from "next/image";
import price1 from "./price1.svg";
import price2 from "./price2.svg"

const IMGmodulePrice = () => {
  return <Image src={price1} />;
};
const IMGmoduleOptionalPrice = () => {
    return <Image src={price2} />;
  };
export { IMGmodulePrice,IMGmoduleOptionalPrice };

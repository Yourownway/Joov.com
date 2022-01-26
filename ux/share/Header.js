import { IMGlogo } from "../../assets/logo";
import { IMGflagFrench, IMGnotification } from "../../assets/icon";
import style from "../../styles/Header.module.css";
export default function Header() {
  return (
    <nav className={style.header}>
      <div className={style.nav_item_left}>
        <div className={style.logo}>
          <IMGlogo />
        </div>

        <div className={style.lineup}></div>
        <ul className={style.container_link}>
          <li>
            <a>Acheter un Modules</a>
          </li>
          <li>
            <a>Contactez Nous</a>
          </li>
        </ul>
      </div>
      <ul className={style.nav_item_right}>
        <li>
          <div className={style.nav_item_right_icon}>
          <IMGnotification />{" "}
          </div>
        </li>
        <li>
        <div className={`${style.nav_item_right_icon}  ${style.container_right_flag}`}>
          <IMGflagFrench className="rounded-full" />
          </div>
        </li>
        <li>
          <button className={style.btn}>Login</button>
        </li>
        <li>
          <button className={style.btn_blue}>Register</button>
          {/* <p className="text-3xl font-bold underline">test</p> */}
        </li>
      </ul>
    </nav>
  );
}

import React from "react";
import { IMGiconFacebook, IMGiconInstagram, IMGiconTwitter } from "../../assets/icon";
import { IMGlogo } from "../../assets/logo";
import style from "../../styles/Footer.module.css";
export default function Footer() {
  return (
    <footer className={`${style.container} test`}>
        <div className={style.container_top}>

      <div className={style.container_left }>
        <div className={style.container_left_logo}>

        <IMGlogo />
        </div>
        <p>
          Joov is a platform to help change jobs and find new jobs with the
          guidance of professional mentors.
        </p>
      </div>
      <div className={style.container_right}>
        <ul>
          <li>For Job Seeker</li>
          <li>My Docs</li>
          <li>My Modules</li>
          <li>Help & Support</li>
        </ul>

        <ul>
          <li>Company</li>
          <li>About Us</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
        </div>
      </div>
      <div className={style.container_bot}>
        <p>© 2022 Joov. All rights reserved.</p>
        <div  className={style.container_bot_right}>
          {" "}
          <p>Follow Us</p>
          <div className={style.container_bot_icons}>
          <div className={style.container_bot_icon}>
              <IMGiconInstagram/>
              </div><div className={style.container_bot_icon}>
              <IMGiconTwitter/>
              </div><div className={style.container_bot_icon}>
              <IMGiconFacebook/></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

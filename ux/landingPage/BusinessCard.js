import React from "react";
import {
  IMGmoduleOptionalPrice,
  IMGmodulePrice,
} from "../../assets/businessCard";
import { IMGiconCheck, IMGiconExercice, IMGiconVideo } from "../../assets/icon";

export default function BusinessCard({ style }) {
  return (
    <div className={`${style.container_card}`}>
      <div className={style.card_top}>
        <div className={style.card_top_left}>
          <h4>1st Modules</h4>
  
          <h3>Knowing Yourselve</h3>
        
          </div>
          <div className={style.card_top_right}>
            <IMGmodulePrice />
        </div>
      </div>

      <ul className={style.card_middle}>
        <li>
          <div className={style.card__midldle__left__icon}>
             <div className={style.card_icon_check}>

            <IMGiconCheck />
         </div>
            <p> Personality.</p>
          </div>
          <div className={style.card_middle_icon__video}>
            <IMGiconVideo />
            <IMGiconExercice />
          </div>
        </li>
        <li>
          <div className="flex">
             <div className={style.card_icon_check}>

            <IMGiconCheck />
         </div>
            <p>Drivers.</p>
          </div>
          <div className={style.card_middle_icon__video}>
            <IMGiconVideo />
            <IMGiconExercice />
          </div>
        </li>
        <li>
          <div className="flex">
             <div className={style.card_icon_check}>

            <IMGiconCheck />
         </div>
            <p>Your skills and professional background.</p>
          </div>
          <div className={style.card_middle_icon__video}>
            <IMGiconVideo />
            <IMGiconExercice />
          </div>
        </li>
      </ul>

      <div className={style.card_bot}>
        <h4>Optional</h4>
        <div className="justify-between">
          <div className={style.card_bot_left}>
         <div className={style.card_icon_check}>

            <IMGiconCheck />
         </div>
         
            <p>45 min video with a professional coach.</p>
          </div>
          <div className={style.card_bot_right}>
            <IMGmoduleOptionalPrice />
            {/* <p>69€</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

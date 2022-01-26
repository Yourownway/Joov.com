import React from 'react';
import { IMGavatar, IMGjob } from '../../assets/satisfactionCard';
import style from "../../styles/SatisfactionCard.module.css"
export default function SatisfactionCard() {
  return <div className={style.card}>
<div className={style.card_top}>
    <div className={style.card_top_avatar}> <IMGavatar/></div>
 <h3>Marchelino Parker</h3>
 <div className={style.card_top_job}>
     <IMGjob/>
     <p>UI/UX Designer</p>
 </div>
</div>
<p className={style.card_bot}>"This Platform it's really awesome,
   I can learn anything that I need to get a best job in my life" 
</p>

  </div>;
}

import React, { useState } from "react";
import { IMGbackgroundArrow, IMGgradient } from "../../assets/background";
import {
    IMGarrowDown,
    IMGarrowLeft,
    IMGarrowRight,
    IMGLogoHover,
} from "../../assets/icon";
import lp_style from "../../styles/LandingPage.module.css";
import businessCardStyle from "../../styles/BusinessCardContainer.module.css";
import BusinessCard from "./BusinessCard";
import SatisfactionCard from "./SatisfactionCard";
import useMediaQuery from "../hooks/UseMediaQuery";
import { Carousel } from "react-responsive-carousel";
import style from "react-responsive-carousel/lib/styles/carousel.min.css";
import satisfactionCardStyle from "../../styles/SatisfactionCard.module.css";

export default function LandingPageContainer() {
    const [hasNext, setHasNext] = useState(true);
    const [hasPrev, setHasPrev] = useState(true);
    let textVideoArray = [
        "To change jobs or find a new one. To give yourself the means to be ready, by following the advice of career transition experts. Career transition counseling is generally a very expensive service, the pace of which often leaves little room for flexibility. With joov, we want to make it accessible to all, progressive and intuitive without leaving you alone in front of yourself.",
        "For managers and non-managers. The exercises and the advice given during the Joov path are valid for everyone. Our Joov path is only available to French speakers first, it will be extended to English,German, Spanish and Italian speakers very soon.",
        "text3",
        "text",
    ];
    const [videoText, setVideoText] = useState(textVideoArray[0]);
    const handleClickTextVideo = (e) => {
        let list = Array.from(document.getElementsByClassName("list_video"));
        let index = list.findIndex((elem) => elem === e.target);
        setVideoText(() => textVideoArray[index]);
    };

    const phone = useMediaQuery("(max-width : 800px)");
    return (
        <main className="flex-col">
            <section className={lp_style.s_first}>
                <div className={lp_style.s_first_left}>
                    <div className={lp_style.s_left_content}>
                        <h1 className="slogan">
                            If you are considering a JobMoov, We are the
                            solution!
                        </h1>
                        <p>
                            We are open to anyone who wants to help us improve
                            the quality of our products.{" "}
                            <span>
                                If you would like to become a beta-tester of the
                                first module, register here!
                            </span>
                        </p>
                        <button className={lp_style.btn}>
                            Become a Beta Tester
                        </button>
                    </div>
                    <div className={lp_style.s_left_statistic}>
                        <h3>
                            <span>312</span> Profesional Mentor
                        </h3>
                        <div className="lineup"></div>
                        <h3>
                            <span>121,309</span> Jobs Seeker{" "}
                        </h3>
                    </div>
                </div>
                <aside className={lp_style.s_first_right}>
                    {/* <IMGgradient /> */}
                    <div className={lp_style.s_first_right_arrow}>
                        <IMGbackgroundArrow />
                    </div>
                </aside>
            </section>

            {phone ? (
                <section className={lp_style.s_phone_second}>
                    <ul>
                        <li>
                            <h2>What For?</h2>
                            <div className={lp_style.s_phone_second_main}>
                                <div className={lp_style.s_second_video}></div>
                                <p>{textVideoArray[0]}</p>
                            </div>
                        </li>
                        <li>
                            <h2>For Who ?</h2>
                            <div className={lp_style.s_phone_second_main}>
                                <div className={lp_style.s_second_video}></div>
                                <p>{textVideoArray[1]}</p>
                            </div>
                        </li>
                        <li>
                            <h2>By Who ?</h2>
                            <div className={lp_style.s_phone_second_main}>
                                <div className={lp_style.s_second_video}></div>
                                <p>{textVideoArray[2]}</p>
                            </div>
                        </li>
                        <li>
                            <h2>How ?</h2>
                            <div className={lp_style.s_phone_second_main}>
                                <div className={lp_style.s_second_video}></div>
                                <p>{textVideoArray[3]}</p>
                            </div>
                        </li>
                    </ul>
                </section>
            ) : (
                <section className={lp_style.s_second}>
                    <div className={lp_style.s_second_left}>
                        <ul className={lp_style.s_second_list}>
                            <li style={{ border: "none" }}>
                                <h2
                                    onClick={(e) => handleClickTextVideo(e)}
                                    className="list_video"
                                >
                                    What For ?
                                </h2>{" "}
                                <IMGLogoHover />
                            </li>
                            <li>
                                <h2
                                    onClick={(e) => handleClickTextVideo(e)}
                                    className="list_video"
                                >
                                    For Who ?
                                </h2>{" "}
                                <IMGLogoHover />
                            </li>
                            <li>
                                <h2
                                    onClick={(e) => handleClickTextVideo(e)}
                                    className="list_video"
                                >
                                    By Who ?
                                </h2>{" "}
                                <IMGLogoHover />
                            </li>
                            <li>
                                <h2
                                    onClick={(e) => handleClickTextVideo(e)}
                                    className="list_video"
                                >
                                    How ?{" "}
                                </h2>
                                <IMGLogoHover />
                            </li>
                        </ul>
                        <div className={lp_style.s_second_scroll}>
                            <div>
                                <IMGarrowDown />
                            </div>
                            <p>Keep Scroll Bro..</p>
                        </div>
                    </div>
                    <aside className={lp_style.s_second_right}>
                        <div className={lp_style.s_second_video}></div>
                        <p>{videoText}</p>
                    </aside>
                </section>
            )}

            <section className={lp_style.s_third}>
                <h2 className="section_title">Our Methodology</h2>
                <Carousel
                    width={"100%"}
                    centerSlidePercentage={50}
                    centerMode={true}
                    infiniteLoop={false}
                    showIndicators={false}
                    showStatus={false}
                    className={businessCardStyle.slider}
                    renderArrowNext={(clickHandler) =>
                        hasNext && (
                            <div
                                className={lp_style.s_third__first__right}
                                onClick={clickHandler}
                            >
                                <IMGarrowRight />
                            </div>
                        )
                    }
                    renderArrowPrev={(clickHandler) =>
                        hasPrev && (
                            <div
                                className={lp_style.s_third__first__left}
                                onClick={clickHandler}
                            >
                                <IMGarrowLeft />
                            </div>
                        )
                    }
                    renderThumbs={() => null}
                >
                    <BusinessCard style={businessCardStyle} />
                    <BusinessCard style={businessCardStyle} />
                    <BusinessCard style={businessCardStyle} />
                    <BusinessCard style={businessCardStyle} />
                </Carousel>
            </section>
            <section className={lp_style.s_fourth}>
                <h2 className="section_title">What's They Say About Us ?</h2>
                <Carousel
                    autoPlay
                    centerSlidePercentage={25}
                    centerMode={true}
                    showStatus={false}
                    infiniteLoop={true}
                    showIndicators={false}
                    width={"100%"}
                    className={satisfactionCardStyle.slider}
                >
                    <SatisfactionCard />
                    <SatisfactionCard />
                    <SatisfactionCard />
                    <SatisfactionCard />
                    <SatisfactionCard />
                </Carousel>
            </section>
            <section className={lp_style.s_last}>
                <h1 className="slogan">
                    Let's Register and Be The First To Try Our Service!
                </h1>
                <div className={lp_style.s_last_bot}>
                    <p>
                        We are open to anyone who wants to help us improve the
                        quality of our products.{" "}
                        <span>
                            If you would like to become a beta-tester of the
                            first module, register here!{" "}
                        </span>
                    </p>
                    <button className={lp_style.btn}>
                        Become a Beta Tester
                    </button>
                </div>
            </section>
        </main>
    );
}

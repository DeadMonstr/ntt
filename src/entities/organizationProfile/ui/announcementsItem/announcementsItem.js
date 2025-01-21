import {memo} from 'react';
import classNames from "classnames";

import cls from "./announcementsItem.module.sass";
import image from "shared/assets/images/Ellipse 118.png";
import image1 from "shared/assets/icons/languages.png";
import image2 from "shared/assets/icons/type.png";
import image3 from "shared/assets/icons/prime_dollar.png";
import image4 from "shared/assets/icons/star.png";

export const AnnouncementsItem = memo(({onChange}) => {
    return (
        <div className={cls.announcementsItem}>
            <i
                onClick={onChange}
                className={classNames(
                    "fas fa-pen",
                    cls.announcementsItem__icon
                )}
            />
            <div className={cls.announcementsItem__header}>
                <img className={cls.announcementsItem__ava} src={image} alt=""/>
                <h2 className={cls.announcementsItem__title}>
                    Filologiya va tillarni o’qitish: xitoy tili
                </h2>
            </div>
            <div className={cls.announcementsItem__infoMenu}>
                <div className={cls.info}>
                    <div className={cls.info__header}>
                        <div className={cls.info__icon}>
                            <img src={image1} alt=""/>
                        </div>
                        <p className={cls.info__subTitle}>Ta’lim tili</p>
                    </div>
                    <h3 className={cls.info__title}>O’zbek tili</h3>
                </div>
                <div className={cls.info}>
                    <div className={cls.info__header}>
                        <div className={cls.info__icon}>
                            <img src={image2} alt=""/>
                        </div>
                        <p className={cls.info__subTitle}>Ta’lim tili</p>
                    </div>
                    <h3 className={cls.info__title}>O’zbek tili</h3>
                </div>
                <div className={cls.info}>
                    <div className={cls.info__header}>
                        <div className={cls.info__icon}>
                            <img src={image3} alt=""/>
                        </div>
                        <p className={cls.info__subTitle}>Ta’lim tili</p>
                    </div>
                    <h3 className={cls.info__title}>O’zbek tili</h3>
                </div>
                <div className={cls.info}>
                    <div className={cls.info__header}>
                        <div className={cls.info__icon}>
                            <img src={image4} alt=""/>
                        </div>
                        <p className={cls.info__subTitle}>Ta’lim tili</p>
                    </div>
                    <h3 className={cls.info__title}>O’zbek tili</h3>
                </div>
            </div>
            <div className={cls.announcementsItem__text}>
                <div className={cls.header}>
                    <div className={cls.header__garant}>
                        <i
                            className={classNames(
                                "fas fa-thumbs-up",
                                cls.header__like
                            )}
                        />
                        <p className={cls.header__title}>Grant mavjud</p>
                    </div>
                    <div className={cls.header__up}>
                        <i className={"fas fa-arrow-up"}/>
                    </div>
                </div>
                <p className={cls.text}>
                    E’lonlar
                    Bakalavr
                    Lorem
                    Lorem
                    Filologiya va tillarni o’qitish: xitoy tili
                    Ta’lim tili
                    Ta’lim shakli
                    Kontrakt to’lovi
                    Talablar
                    O’zbek tili
                    Kunduzgi
                    17 000 000 so’mdan boshlab
                    Yo’nalishga mos
                    Grant mavjud
                    Yo'nalish haqida
                    Tadbirkorlik yoki biznes (inglizcha: business – „bandlik“), deb har qanday qonuniy tijorat
                    faoliyatiga aytiladi﻿. Tadbirkorlik bilan shugʻullanuvchi shaxs tadbirkor, deyiladi. Xususiy
                    tadbirkorlik kapitalistik iqtisodiyot negizidir. Sotsialistik iqtisodiyotlarda tadbirkorlik bilan
                    hukumat, jamiyat yoki ishchilar kasaba uyushmalari shugʻullanadi.

                    Imtihon bloki: Matematika, chet tili
                    Ta’lim tili va kontrakt narxlari
                    Ta'lim tili
                    Ingliz tili
                    Talablar
                    Ingliz tilini B2 darajada bilish va matematikadan imtihon
                    Kunduzgi
                    38 140 620 so'm / yillik
                    Filologiya va tillarni o’qitish: xitoy tili
                    Ta’lim tili
                    Ta’lim shakli
                    Kontrakt to’lovi
                    Talablar
                    O’zbek tili
                    Kunduzgi
                    17 000 000 so’mdan boshlab
                    Yo’nalishga mos
                    Grant mavjud
                    Batafsil
                </p>
            </div>
        </div>
    )
})

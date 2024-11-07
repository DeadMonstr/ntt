import cls from "../applicationProfile.module.sass";
import defImage from "../../../../shared/assets/images/Rectangle 89.svg";


export const ApplicationProfileInfoEducation = () => {
    return (
        <div className={`${cls.application__info} ${cls.application__box}`}>
            <h1>Ta'lim dargohi ma’lumotlari</h1>
            <div className={cls.application__info_wrapper}>
                <ul className={cls.application__info_infos}>
                    <li>Ta’lim turi<span>Litsey</span></li>
                    <li>Ta’lim dargohi joylashgan viloyat <span>Andijon viloyati</span></li>
                    <li>Ta’lim dargohi joylashgan viloyat <span>Andijon viloyati</span></li>
                </ul>
                <ul className={cls.application__info_infos}>
                    <li>Ta’lim dargohi nomi <span>Andijon qishloq xo'jaligi instituti
                qoshidagi Kuyganyor akademik litsey</span></li>
                    <li>Diplom, shahodatnoma yoki ma’lumotnoma nusxasi
                        <div className={cls.application__info_infos_images}>

                            <img src={defImage} alt=""/>
                            {/*<img src={defImage} alt=""/>*/}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};


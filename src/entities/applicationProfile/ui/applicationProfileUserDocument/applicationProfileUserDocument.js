import cls from "../applicationProfile.module.sass";

import defImage from "../../../../shared/assets/images/Rectangle 89.svg"
export const ApplicationProfileUserDocument = () => {
    return (
        <div className={`${cls.application__info} ${cls.application__box}`}>
            <h1>Pasport ma'lumotlari</h1>
            <div className={cls.application__info_wrapper}>
                <ul className={cls.application__info_infos}>
                    <li>Passport seriya raqami <span>AA 9480972</span></li>
                    <li>Tug'ilgan joyi <span>To'ldirilmagan</span></li>
                    <li>Tug'ilgan sanasi <span>22.22.2222</span></li>
                    <li>Jinsi <span>Erkak</span></li>
                    <li>Identifikatsiya pin (️JSHSHIR) <span>To'ldirilmagan</span></li>


                </ul>
                <ul className={cls.application__info_infos}>

                    <li>Passport nusxasi
                        <div className={cls.application__info_infos_images}>

                            <img src={defImage} alt=""/>
                            <img src={defImage} alt=""/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};


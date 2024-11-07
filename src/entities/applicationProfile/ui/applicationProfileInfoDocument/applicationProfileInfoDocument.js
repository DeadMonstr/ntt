import cls from "../applicationProfile.module.sass";


export const ApplicationProfileInfoDocument = () => {
    return (
        <div className={`${cls.application__info} ${cls.application__box}`}>
            <h1>Ariza ma’lumotlari</h1>
            <div className={cls.application__info_wrapper}>
                <ul className={cls.application__info_infos}>
                    <li>Yo'nalish nomi <span>Matematika</span></li>
                    <li>Daraja <span>Bakalavr</span></li>
                    <li>Ta'lim turi  <span>Sirtqi</span></li>
                    <li>Ta'lim tili  <span>O'zbek tili</span></li>
                </ul>
            </div>
        </div>
    );
};


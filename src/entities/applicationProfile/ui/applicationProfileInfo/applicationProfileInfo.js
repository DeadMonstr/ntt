import cls from "../applicationProfile.module.sass"
import defImage from "../../../../shared/assets/images/Mask group.svg"

const data = {
    name: "sardor", surname: "ikromov", father_name: "Elmutrod o'g'li" ,
    phone: 99121232 , extra_phone: 3123213232 , email: "isardor859@gmail.com"
}
export const ApplicationProfileInfo = () => {
    return (
        <div className={`${cls.application__info} ${cls.application__box}`}>
            <h1>Ariza beruvchi</h1>
            <div className={cls.application__info_wrapper}>
                <div className={cls.application__info_profile}>

                    <img src={defImage} alt=""/>
                    <div>
                        {data.name} {data.surname} <br/> {data.father_name}
                    </div>
                </div>
                <ul className={cls.application__info_infos}>
                   <li>Telefon  <span>{data.phone}</span></li>
                   <li>Qo’shimcha telefon  <span>{data.extra_phone}</span></li>
                   <li>Pochta  <span>{data.email}</span></li>
                </ul>
            </div>
        </div>
    );
};


import cls from "../applicationProfile.module.sass"
import {useNavigate} from "react-router";

export const ApplicationProfileHeader = () => {
    const navigate = useNavigate()
    return (
        <div className={`${cls.application__header} ${cls.application__box}`}>
            <div onClick={() => navigate(-1)}>r
                <i className="fas fa-arrow-left"/>
            </div>
            <div>
                <h2>Ariza topshirilgan sana: 12.07.2024</h2>
            </div>
        </div>
    );
};


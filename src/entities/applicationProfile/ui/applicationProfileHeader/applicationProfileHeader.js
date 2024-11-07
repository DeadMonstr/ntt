import cls from "../applicationProfile.module.sass"

export const ApplicationProfileHeader = () => {
    return (
        <div className={`${cls.application__header} ${cls.application__box}`}>
            <div>
                <i className="fas fa-arrow-left"/>
            </div>
            <div>
                <h2>Ariza topshirilgan sana: 12.07.2024</h2>
            </div>
        </div>
    );
};


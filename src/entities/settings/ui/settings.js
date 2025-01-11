import cls from "./settings.module.sass";

export const Settings = ({data}) =>{

    const renderData = () => {
        return data.map(item =>(
            <divc className={cls.settings__box}>
                {item.name}
                <div className={cls.settings__box_icon}>
                    <i className={"fas fa-chevron-right "}/>
                </div>
            </divc>
        ))
    }

    return (
        <div className={cls.settings}>


            {renderData()}
        </div>
    );
};


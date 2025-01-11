
import cls from "./settings.module.sass"

export const SettingsFilter = ({activeFilter , filterItem , setActiveFilter}) => {

    const renderItem = () => {
        return filterItem.map(item => (
            <li className={activeFilter === item.id ? cls.active : ""} onClick={() => setActiveFilter(item.id)}>
                {item.name}  {activeFilter === item.id && <i className={"fas fa-check"}/>}
            </li>
        ))
    }

    return (

            <div className={cls.filter}>
                <ul className={cls.filter__list}>
                    {renderItem()}
                </ul>
                <div className={cls.filter__buttons}>
                    <div className={cls.filter__add}>
                        <i className={"fa fa-plus"}/>
                    </div>

                    <div className={cls.filter__edit}>
                        <i className={"fa fa-pen"}/>
                    </div>
                </div>

            </div>

    );
};



export const Add = () => {

    return (
        <Modal>

        </Modal>
    );
}
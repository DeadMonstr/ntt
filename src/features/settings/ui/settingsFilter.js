import cls from "./settings.module.sass"
import {Modal} from "../../../shared/ui/modal";
import {useState} from "react";
import {Form} from "../../../shared/ui/form";
import {Input} from "../../../shared/ui/input";
import {Textarea} from "../../../shared/ui/textArea";
import {Button} from "../../../shared/ui/button/button";

export const SettingsFilter = ({activeFilter, filterItem, setActiveFilter}) => {

    const [activeAdd, setActiveAdd] = useState(false)

    const renderItem = () => {
        return filterItem.map(item => (
            <li className={activeFilter === item.id ? cls.active : ""} onClick={() => setActiveFilter(item.id)}>
                {item.name} {activeFilter === item.id && <i className={"fas fa-check"}/>}
            </li>
        ))
    }

    return (

        <div className={cls.filter}>
            <ul className={cls.filter__list}>
                {renderItem()}
            </ul>
            <div className={cls.filter__buttons}>
                <div onClick={() => setActiveAdd(true)} className={cls.filter__add}>
                    <i className={"fa fa-plus"}/>
                </div>

                <div className={cls.filter__edit}>
                    <i className={"fa fa-pen"}/>
                </div>
            </div>

            <Add active={activeAdd} setActive={setActiveAdd}/>
        </div>

    );
};


export const Add = ({active, setActive}) => {

    return (
        <Modal setActive={setActive} active={active}>
            <h1>Add</h1>


            <Form>
                <Input extraClass={cls.filter__input}/>
                <Textarea/>
                <Button extraClass={cls.filter__btn}>Add</Button>

            </Form>
        </Modal>
    );
}
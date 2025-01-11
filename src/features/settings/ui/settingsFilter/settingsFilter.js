import cls from "./settings.module.sass"
import {Modal} from "../../../../shared/ui/modal";
import {useState} from "react";
import {Form} from "../../../../shared/ui/form";
import {Input} from "../../../../shared/ui/input";
import {Textarea} from "../../../../shared/ui/textArea";
import {Button} from "../../../../shared/ui/button/button";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {onAddDegree, onAddDirection} from "../../../../entities/settings";

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
            </div>

            <AddDirection activeFilter={activeFilter} active={activeAdd} setActive={setActiveAdd}/>
        </div>

    );
};


export const AddDirection = ({active, setActive , activeFilter}) => {

    const {register, setValue, handleSubmit} = useForm()

    const dispatch = useDispatch()
    const onClick = (data) => {
       if (activeFilter === 1) {
           dispatch(onAddDirection(data))
       }else {
           dispatch(onAddDegree(data))
       }
        setValue("name", "")
        setValue("description", "")
        setActive(false)
    }
    return (
        <Modal setActive={setActive} active={active}>
            <h1>Add Direction</h1>


            <Form>
                <Input extraClass={cls.filter__input} name={"name"} register={register}/>
                <Textarea maxLength={140} name={"description"} register={register}/>
                <Button onClick={handleSubmit(onClick)} extraClass={cls.filter__btn}>Add</Button>

            </Form>
        </Modal>
    );
}
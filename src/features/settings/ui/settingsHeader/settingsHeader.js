import cls from "./settingsHeader.module.sass"
import {useState} from "react";
import {Modal} from "../../../../shared/ui/modal";
import {Form} from "../../../../shared/ui/form";
import {Input} from "../../../../shared/ui/input";
import {Textarea} from "../../../../shared/ui/textArea";
import {Button} from "../../../../shared/ui/button/button";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {onAddHeaderItem, onEditHeaderItem} from "../../../../entities/settings";

export const SettingsHeader = ({settingsHeader, setActive, active}) => {


    const [activeAdd, setActiveAdd] = useState(false)
    const [activeEdit, setActiveEdit] = useState(false)
    const {setValue, register, handleSubmit} = useForm()
    const [activeItem, setActiveItem] = useState(null)

    const renderTable = () => {
        return settingsHeader.map(item => (
            <li
                onClick={() => {
                    setActive(item.id)
                    setValue("name", item.name)
                    setActiveItem(item.id)

                }}


                className={active === item.id ? cls.active_list : ""}
            >
                {item.name}
            </li>
        ))
    }

    const render = renderTable()

    return (
        <div>

            <div className={cls.settings}>
                <h2>Organizations</h2>
                <div className={cls.filter__buttons}>
                    <div onClick={() => setActiveAdd(true)} className={cls.filter__add}>
                        <i className={"fa fa-plus"}/>
                    </div>

                    <div onClick={() => setActiveEdit(true)} className={cls.filter__edit}>
                        <i className={"fa fa-pen"}/>
                    </div>
                </div>
            </div>
            <ul className={cls.settings__header}>
                {render}
            </ul>


            <Add setValue={setValue} handleSubmit={handleSubmit} register={register} setActive={setActiveAdd} active={activeAdd}/>
            <Edit setValue={setValue} activeItem={activeItem} register={register} handleSubmit={handleSubmit} setActive={setActiveEdit}
                  active={activeEdit}/>
        </div>
    );
};


export const Add = ({active, setActive, handleSubmit, register , setValue}) => {


    const dispatch = useDispatch()

    const onClick = (data) => {
        const res = {
            id: Date.now(),
            name: data.name
        }
        setValue("name", "")

        dispatch(onAddHeaderItem(res))
    }

    return (
        <Modal setActive={setActive} active={active}>
            <h1>Add</h1>


            <Form>
                <Input name={"name"} register={register} extraClass={cls.filter__input}/>
                {/*<Textarea/>*/}
                <Button onClick={handleSubmit(onClick)} extraClass={cls.filter__btn}>Add</Button>

            </Form>
        </Modal>
    );
}

export const Edit = ({active, setActive, register, handleSubmit, activeItem , setValue }) => {

    const dispatch = useDispatch()
    const onClick = (data) => {
        setValue("name", "")

        dispatch(onEditHeaderItem({id: activeItem, data: data.name}))
    }

    return (
        <Modal setActive={setActive} active={active}>
            <h1>Add</h1>


            <Form>
                <Input extraClass={cls.filter__input} name={"name"} register={register}/>
                {/*<Textarea/>*/}
                <div className={cls.settings__button}>
                    <Button onClick={handleSubmit(onClick)} extraClass={cls.filter__btn}>Edit</Button>
                    <Button onClick={handleSubmit(onClick)} type={"danger"} extraClass={cls.filter__btn}>Delete</Button>
                </div>
            </Form>

        </Modal>
    );
}
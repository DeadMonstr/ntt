import cls from "./settingsHeader.module.sass"
import {useEffect, useState} from "react";
import {Modal} from "../../../../shared/ui/modal";
import {Form} from "../../../../shared/ui/form";
import {Input} from "../../../../shared/ui/input";
import {Textarea} from "../../../../shared/ui/textArea";
import {Button} from "../../../../shared/ui/button/button";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {onAddHeaderItem, onDeleteHeaderItem, onEditHeaderItem} from "../../../../entities/settings";
import {ConfirmModal} from "../../../../shared/ui/confirmModal";

export const SettingsHeader = ({settingsHeader, setActive, active}) => {


    const [activeAdd, setActiveAdd] = useState(false)
    const [activeEdit, setActiveEdit] = useState(false)

    const [activeItem, setActiveItem] = useState(null)

    const renderTable = () => {
        return settingsHeader.map(item => (
            <li
                onClick={() => {
                    setActive(item.id)
                    setActiveItem(item)

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
                    <div
                        onClick={() => setActiveAdd(true)}
                        className={cls.filter__add}
                    >
                        <i className={"fa fa-plus"}/>
                    </div>

                    <div onClick={() => setActiveEdit(true)}
                         className={cls.filter__edit}
                    >
                        <i className={"fa fa-pen"}/>
                    </div>
                </div>
            </div>
            <ul className={cls.settings__header}>
                {render}
            </ul>


            <Add

                setActive={setActiveAdd}
                active={activeAdd}
            />
            <Edit
                activeItem={activeItem}
                setActive={setActiveEdit}
                active={activeEdit}
            />
        </div>
    );
};


export const Add = ({active, setActive}) => {
    const {setValue, register, handleSubmit} = useForm()
    const dispatch = useDispatch()

    const onClick = (data) => {
        const res = {
            id: Date.now(),
            name: data.name
        }
        setValue("name", "")
        setActive(false)


        dispatch(onAddHeaderItem(res))
    }

    return (
        <Modal setActive={setActive} active={active}>
            <h1>Add</h1>


            <Form>
                <Input
                    name={"name"}
                    register={register}
                    extraClass={cls.filter__input}
                />
                {/*<Textarea/>*/}
                <Button
                    onClick={handleSubmit(onClick)}
                    extraClass={cls.filter__btn}
                >
                    Add
                </Button>

            </Form>
        </Modal>
    );
}

export const Edit = ({active, setActive, activeItem}) => {

    const {setValue, register, handleSubmit} = useForm()

    const dispatch = useDispatch()
    useEffect(() => {
        setValue("name", activeItem?.name)
    }, [active, activeItem])

    const [activeConfirm, setActiveConfirm] = useState(false)
    const onClick = (data) => {
        dispatch(onEditHeaderItem({id: activeItem.id, data: data.name}))
        setActive(false)
    }
    const onDelete = () => {
        dispatch(onDeleteHeaderItem(activeItem.id))
        setActive(false)
        setActiveConfirm(false)
    }

    return (
        <Modal setActive={setActive} active={active}>
            <h1>Edit</h1>


            <Form>
                <Input
                    extraClass={cls.filter__input}
                    name={"name"}
                    register={register}
                    value={activeItem?.name}
                />
                {/*<Textarea/>*/}
                <div className={cls.settings__button}>
                    <Button
                        onClick={handleSubmit(onClick)}
                        extraClass={cls.filter__btn}
                    >
                        Edit
                    </Button>
                    <Button
                        onClick={handleSubmit(() => setActiveConfirm(true))}
                        type={"danger"}
                        extraClass={cls.filter__btn}
                    >
                        Delete
                    </Button>
                </div>
            </Form>

            <ConfirmModal
                onClick={handleSubmit(onDelete)}
                active={activeConfirm}
                setActive={setActiveConfirm}
            />
        </Modal>
    );
}
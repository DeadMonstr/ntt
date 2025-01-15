import {memo, useCallback, useState} from 'react';
import classNames from "classnames";
import {useDropzone} from "react-dropzone";

import {OrganizationProfileReadMore} from "entities/organizationProfile";
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Input} from "shared/ui/input";
import {Textarea} from "shared/ui/textArea";

import cls from "./organizationProfileReadMoreModal.module.sass";

export const OrganizationProfileReadMoreModal = memo(() => {

    const [activeModal, setActiveModal] = useState(false)
    const [newImageFile, setNewImageFile] = useState(null)
    const {getInputProps, getRootProps} = useDropzone({
        onDrop: (acceptedFiles) => {
            console.log(acceptedFiles[0])
            setNewImageFile(acceptedFiles[0])
        }
    })

    const onToggle = useCallback(() => setActiveModal(!activeModal), [])

    return (
        <>
            <OrganizationProfileReadMore setActive={onToggle}/>
            <Modal
                active={activeModal}
                setActive={setActiveModal}
                extraClass={cls.editModal}
            >
                <h1 className={cls.editModal__title}>Ma’lumotni o’zgartirish</h1>
                <div className={cls.editModal__container}>
                    <div
                        className={classNames(cls.imageEdit, {
                            [cls.active]: newImageFile
                        })}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()}/>
                        {
                            newImageFile
                                ? <img
                                    className={cls.imageEdit__image}
                                    src={URL.createObjectURL(newImageFile)}
                                    alt=""
                                />
                                : <i className={classNames("far fa-image", cls.imageEdit__icon)}/>
                        }
                    </div>
                    <Form extraClassname={cls.editModal__form}>
                        <Input
                            placeholder={"Name"}
                            extraClass={cls.editModal__input}
                        />
                        <Textarea placeholder={"Text"}/>
                    </Form>
                </div>
            </Modal>
        </>
    );
})

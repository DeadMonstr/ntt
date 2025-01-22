import React, {useEffect, useState} from 'react';
import cls from "./organizationAccouncementsForm.module.sass";
import {Button} from "shared/ui/button/button";
import {Select} from "shared/ui/select";
import {Input} from "shared/ui/input";
import {Textarea} from "shared/ui/textArea";
import TextEditor from "entities/textEditor/TextEditor";
import {Form} from "shared/ui/form";
import {headers, useHttp} from "shared/api/base";
import {useDispatch} from "react-redux";
import {fetchOrganizationProfileDegrees} from "entities/organizationProfile";

export const OrganizationAccouncementsForm = ({setIsChange}) => {



    const [degrees,setDegrees] = useState([])
    // const [degrees,setDegrees] = useState([])




    const {request} = useHttp()
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(fetchOrganizationProfileDegrees())
        // dispatch()
    },[])







    const onSubmitTextEditor = (e) => {
        console.log(e)
    }



    return (
        <Form extraClassname={cls.create} id={"createForm"} isChange={false} >
            <Button onClick={() => setIsChange(false)}>Back</Button>
            <div className={cls.create__change}>

                <div className={cls.item}>
                    <Select extraClass={cls.create__select} title={"Darajalar"}/>
                    <Select extraClass={cls.create__select} title={"Soha"}/>
                    <Select extraClass={cls.create__select} title={"Shift"}/>
                    <Select extraClass={cls.create__select} title={"Education Langage"}/>
                    <Input title={"Price"} extraClass={cls.create__input}/>
                    <Input
                        type={"checkbox"}
                        placeholder={"Grant"}
                    />
                </div>

                <div className={cls.item}>


                    <TextEditor title={"Description"} onSubmit={onSubmitTextEditor}/>


                    <TextEditor title={"talablar"}/>
                </div>

                {/*<Textarea title={"Desc"}/>*/}
            </div>

            <Button id={"createForm"} type={"submit"}>Submit</Button>

        </Form>
    );
};


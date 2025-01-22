import React, {useState} from 'react';

import cls from "./organizationProfileInfo.module.sass"
import classNames from "classnames";
import TextEditor from "entities/textEditor/TextEditor";
import {useHttp} from "shared/api/base";
import {useParams} from "react-router";




export const OrganizationProfileInfo = () => {


    const {id} = useParams()

    const [text,setText] = useState(null)
    const [isChange,setIsChange] = useState(false)

    const onChange = () => {
        setIsChange(state => !state)
    }



    const {request} = useHttp()
    
    
    
    const onSubmit = (e) => {
        console.log(e)
        setText(e.text)
        setIsChange(false)

        request(`/organizations/organization/crud/update_desc_text/${id}`)
    }
    


    return (
        <div className={cls.info}>
            <div className={cls.header}>
                <h1>Haqida</h1>
                <div className={cls.pen} onClick={onChange}>
                    {
                        isChange ?
                            <i

                                className={classNames("fas fa-times")}
                            />
                            :
                            <i
                                className={classNames("fas fa-pen")}
                            />
                    }

                </div>
            </div>

            <div className={cls.container}>


                {
                    isChange ?
                        <TextEditor onSubmit={onSubmit}  />
                        :
                        <p dangerouslySetInnerHTML={{__html: text}}></p>
                }


            </div>
        </div>
    );
};


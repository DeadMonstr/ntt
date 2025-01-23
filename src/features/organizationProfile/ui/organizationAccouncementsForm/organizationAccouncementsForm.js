import React, {useCallback, useEffect, useState} from 'react';
import cls from "./organizationAccouncementsForm.module.sass";
import {Button} from "shared/ui/button/button";
import {Select} from "shared/ui/select";
import {Input} from "shared/ui/input";
import TextEditor from "entities/textEditor/TextEditor";
import {Form} from "shared/ui/form";
import {API_URL, headers, useHttp} from "shared/api/base";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchOrganizationProfileDegrees,
    getOrganizationProfileData,
    getOrganizationProfileDegrees
} from "entities/organizationProfile";
import {getAcademicYears, getEducationLanguages, getShifts} from "entities/oftenUsed/model/selector/oftenUsedSelector";
import {fetchAcademicYear, fetchEducationLanguage, fetchShifts} from "entities/oftenUsed/model/thunk/oftenUsedThunk";
import {fetchOrganizationProfileFields} from "entities/organizationProfile/model/thunk/organizationProfileThunk";
import {getOrganizationProfileFields} from "entities/organizationProfile/model/selector/organizationProfileSelector";
import {set} from "react-hook-form";
import {useNavigate} from "react-router";

export const OrganizationAccouncementsForm = ({setIsChange}) => {


    const academicYears = useSelector(getAcademicYears)
    const languages = useSelector(getEducationLanguages)
    const degrees = useSelector(getOrganizationProfileDegrees)
    const fields = useSelector(getOrganizationProfileFields)
    const orgData = useSelector(getOrganizationProfileData)
    const shifts = useSelector(getShifts)


    const dispatch = useDispatch()


    const [year, setYear] = useState(null)
    const [lang, setLang] = useState(null)
    const [degree, setDegree] = useState(null)
    const [field, setField] = useState(null)
    const [shift, setShift] = useState(null)
    const [price, setPrice] = useState(null)
    const [grant, setGrant] = useState(false)

    const [editorDesc, setEditorDesc] = useState({})
    const [editorDemand, setDemandDesc] = useState({})

    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")


    useEffect(() => {
        if (orgData.organization_type) {
            dispatch(fetchOrganizationProfileDegrees(orgData.organization_type))
            dispatch(fetchOrganizationProfileFields(orgData.organization_type))
            dispatch(fetchShifts())
            dispatch(fetchAcademicYear())
            dispatch(fetchEducationLanguage())
        }
    }, [orgData])


    const onSubmitDesc = useCallback((e) => {
        setEditorDesc(e)
    }, [])

    const onSubmitTalablar = useCallback((e) => {
        setDemandDesc(e)
    }, [])

    const onChangedGrant = useCallback((e) => {
        setGrant(e.target.checked)
    }, [])

    const onChangedPrice = useCallback((e) => {
        setPrice(e.target.value)
    }, [])

    const onChangedStartTime = useCallback((e) => {
        setStart(e.target.value)
    }, [])

    const onChangedEndTime = useCallback((e) => {
        setEnd(e.target.value)
    }, [])


    const {request} = useHttp()

    const navigate = useNavigate()

    const onSubmit = (e) => {

        e.preventDefault()
        const data = {
            organization: orgData.id,
            education_language: lang,
            year: year,
            desc: editorDesc.text,
            desc_json: editorDesc.editorState,
            degree,
            grant,
            price,
            requirements: editorDemand.text,
            requirements_json: editorDemand.editorState,
            shift,
            field,
            start_date: start,
            expire_date: end,
        }


        request(`${API_URL}organizations/organization_landing_page/crud/create/`, "POST", JSON.stringify(data), headers())
            .then(res => {
                navigate(-1)
            })


    }


    return (
        <>

            <Form extraClassname={cls.create} id={"createForm"} isChange={false} onSubmit={onSubmit}>
                <Button onClick={() => setIsChange(false)}>Back</Button>
                <div className={cls.create__change}>


                    <Select required onChangeOption={setDegree} options={degrees} extraClass={cls.create__select}
                            title={"Darajalar"}/>
                    <Select required onChangeOption={setField} options={fields} extraClass={cls.create__select}
                            title={"Soha"}/>
                    <Select required onChangeOption={setShift} options={shifts} extraClass={cls.create__select}
                            title={"Shift"}/>
                    <Select required onChangeOption={setLang} options={languages} extraClass={cls.create__select}
                            title={"Education Langage"}/>
                    <Select required onChangeOption={setYear} options={academicYears} extraClass={cls.create__select}
                            title={"Academic year"}/>
                    <Input required onChange={onChangedPrice} type={"number"} title={"Price"}
                           extraClass={cls.create__input}/>
                    <Input required onChange={onChangedStartTime} type={"date"} title={"Start date"}
                           extraClass={cls.create__input}/>
                    <Input required onChange={onChangedEndTime} type={"date"} title={"End date"}
                           extraClass={cls.create__input}/>
                    <Input
                        required
                        value={grant}
                        onChange={onChangedGrant}
                        type={"checkbox"}
                        placeholder={"Grant"}
                    />

                    {/*<Textarea title={"Desc"}/>*/}
                </div>



            </Form>
            <div className={cls.item}>
                <TextEditor required isSubmit={false} title={"Description"} onSubmit={onSubmitDesc}/>
                <TextEditor isSubmit={false} title={"Talablar"} onSubmit={onSubmitTalablar}/>

            </div>
            <Button id={"createForm"} type={"submit"}>Submit</Button>

        </>
    );
};


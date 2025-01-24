import React, {memo, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";

import {Table} from "shared/ui/table";
import {Select} from "shared/ui/select";

import cls from "./organizationProfileApplications.module.sass";
import {
    fetchOrganizationProfileApplications,
    fetchOrganizationProfileDegrees, fetchOrganizationProfileFields
} from "../../model/thunk/organizationProfileThunk";
import {
    getOrganizationProfileApplications, getOrganizationProfileData,
    getOrganizationProfileDegrees, getOrganizationProfileFields
} from "../../model/selector/organizationProfileSelector";
import {fetchEducationLanguage, getEducationLanguages} from "../../../oftenUsed";
import {fetchShifts} from "../../../oftenUsed/model/thunk/oftenUsedThunk";
import {getShifts} from "../../../oftenUsed/model/selector/oftenUsedSelector";

export const OrganizationProfileApplications = memo(() => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const data = useSelector(getOrganizationProfileApplications)
    const organization = useSelector(getOrganizationProfileData)
    const languages = useSelector(getEducationLanguages)
    const fields = useSelector(getOrganizationProfileFields)
    const shifts = useSelector(getShifts)
    const degree = useSelector(getOrganizationProfileDegrees)
    console.log(organization,"organization")

    const [selectedFields, setSelectedFields] = useState(null)
    const [selectedShifts, setSelectedShifts] = useState(null)
    const [selectedDegree, setSelectedDegree] = useState(null)
    const [selectedLanguages, setSelectedLanguages] = useState(null)

    useEffect(() => {
        dispatch(fetchEducationLanguage())
        dispatch(fetchShifts())
        dispatch(fetchOrganizationProfileDegrees(organization?.organization_type?.id))
        dispatch(fetchOrganizationProfileFields(organization?.organization_type?.id))
    }, [id])

    useEffect(() => {
        dispatch(fetchOrganizationProfileApplications({
            id,selectedFields, selectedDegree,selectedShifts,selectedLanguages
        }))
    }, [id,selectedFields,selectedDegree,selectedShifts,selectedLanguages])

    const renderApplicationsList = useCallback(() => {
        return data?.map(item => {
            return (
                <tr>
                    <td>Quddusbek Azzamov Aminjonovich</td>
                    <td>+998 91 123 45 67</td>
                    <td>Bakalavr</td>
                    <td>Matematika</td>
                    <td>Sirtqi</td>
                    <td>O'zbek tili</td>
                    <td>13.07.2024</td>
                </tr>
            )
        })
    }, [data])

    return (
        <div className={cls.applications}>
            <div className={cls.applications__header}>
                <h2 className={cls.applications__title}>Arizalar</h2>
                <Select onChangeOption={setSelectedDegree} options={degree} extraClass={cls.applications__select}
                        titleOption={"Bakalavriat"}/>
                <Select onChangeOption={setSelectedFields} options={fields} extraClass={cls.applications__select}
                        titleOption={"Yo’nalish"}/>
                <Select onChangeOption={setSelectedShifts} options={shifts} extraClass={cls.applications__select}
                        titleOption={"Ta’lim turi"}/>
                <Select onChangeOption={setSelectedLanguages} options={languages} extraClass={cls.applications__select}
                        titleOption={"Ta’lim tili"}/>
            </div>
            <div className={cls.applications__content}>
                <Table extraClass={cls.applications__table}>
                    <thead>
                    <tr>
                        <th>Ism sharif</th>
                        <th>Telefon raqam</th>
                        <th>Daraja</th>
                        <th>Ta’lim yo’nalishlari</th>
                        <th>Ta’lim shakli</th>
                        <th>Ta’lim tili</th>
                        <th>Topshirilgan sana</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderApplicationsList()}
                    </tbody>
                </Table>
            </div>
        </div>
    );
})

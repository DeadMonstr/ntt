import React, {memo, useCallback} from 'react';

import {Table} from "shared/ui/table";

import cls from "./organizationProfileApplications.module.sass";
import {Select} from "../../../../shared/ui/select";

export const OrganizationProfileApplications = memo(() => {

    const renderApplicationsList = useCallback(() => {
        return [1,2,3,4,5,6,7,8,9].map(item => {
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
    }, [])

    return (
        <div className={cls.applications}>
            <div className={cls.applications__header}>
                <h2 className={cls.applications__title}>Arizalar</h2>
                <Select extraClass={cls.applications__select} titleOption={"Bakalavriat"}/>
                <Select extraClass={cls.applications__select} titleOption={"Yo’nalish"}/>
                <Select extraClass={cls.applications__select} titleOption={"Ta’lim turi"}/>
                <Select extraClass={cls.applications__select} titleOption={"Ta’lim tili"}/>
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

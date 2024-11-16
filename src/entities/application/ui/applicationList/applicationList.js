



import classNames from "classnames";
import {memo, useEffect, useState} from "react";

import {Table} from "shared/ui/table";

import cls from "./applicationList.module.sass";
import {useNavigate} from "react-router";

export const ApplicationList = memo(() => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1268);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1268);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navigate = useNavigate()
    return (
        <div className={cls.applicationList}>
            <Table>
                <thead>
                <tr>
                    <th/>
                    <th>Ism sharif</th>
                    <th>Telefon raqam</th>
                    <th>Daraja</th>
                    {!isMobile ? <>
                        <th>Ta’lim yo’nalishlari</th>
                        <th>Ta’lim shakli</th>
                        <th>Ta’lim tili</th>
                        <th>Topshirilgan sana</th>
                    </> : null}

                </tr>
                </thead>
                <tbody>
                <tr
                    onClick={() => navigate("profile")}
                    className={classNames(cls.applicationList__list, {
                        [cls.debt]: true
                    })}
                >
                    <td/>
                    <td>Quddusbek Azzamov Aminjonovich</td>
                    <td>+998 911234567</td>
                    <td>Bakalavr</td>
                    {!isMobile ? <>
                        <td>Matematika</td>
                        <td>Sirtqi</td>
                        <td>O'zbek tili</td>
                        <td>13.07.2024</td>
                    </> : null}
                </tr>
                <tr
                    onClick={() => navigate("profile")}
                    className={cls.applicationList__list}
                >
                    <td/>
                    <td>Quddusbek Azzamov Aminjonovich</td>
                    <td>+998 911234567</td>
                    <td>Bakalavr</td>
                    {!isMobile ? <>

                        <td>Matematika</td>
                        <td>Sirtqi</td>
                        <td>O'zbek tili</td>
                        <td>13.07.2024</td>
                    </> : null}
                </tr>
                </tbody>
            </Table>
        </div>
    )
})

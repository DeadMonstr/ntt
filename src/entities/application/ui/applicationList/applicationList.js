



import classNames from "classnames";
import {memo, useEffect, useState} from "react";

import {Table} from "shared/ui/table";

import cls from "./applicationList.module.sass";

export const ApplicationList = memo(() => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1268);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1268);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className={cls.applicationList}>
            <Table>
                <thead>
                <tr>
                    <th/>
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
                <tr
                    className={classNames(cls.applicationList__list, {
                        [cls.debt]: true
                    })}
                >
                    <td/>
                    <td>Quddusbek Azzamov Aminjonovich</td>
                    <td>+998 91 123 45 67</td>
                    <td>Bakalavr</td>
                    <td>Matematika</td>
                    <td>Sirtqi</td>
                    <td>O'zbek tili</td>
                    <td>13.07.2024</td>
                </tr>
                <tr className={cls.applicationList__list}>
                    <td/>
                    <td>Quddusbek Azzamov Aminjonovich</td>
                    <td>+998 91 123 45 67</td>
                    <td>Bakalavr</td>
                    <td>Matematika</td>
                    <td>Sirtqi</td>
                    <td>O'zbek tili</td>
                    <td>13.07.2024</td>
                </tr>
                <tr className={cls.applicationList__list}>
                    <td/>
                    <td>Quddusbek Azzamov Aminjonovich</td>
                    <td>+998 91 123 45 67</td>
                    <td>Bakalavr</td>
                    <td>Matematika</td>
                    <td>Sirtqi</td>
                    <td>O'zbek tili</td>
                    <td>13.07.2024</td>
                </tr>
                <tr className={cls.applicationList__list}>
                    <td/>
                    <td>Quddusbek Azzamov Aminjonovich</td>
                    <td>+998 91 123 45 67</td>
                    <td>Bakalavr</td>
                    <td>Matematika</td>
                    <td>Sirtqi</td>
                    <td>O'zbek tili</td>
                    <td>13.07.2024</td>
                </tr>
                <tr className={cls.applicationList__list}>
                    <td/>
                    <td>Quddusbek Azzamov Aminjonovich</td>
                    <td>+998 91 123 45 67</td>
                    <td>Bakalavr</td>
                    <td>Matematika</td>
                    <td>Sirtqi</td>
                    <td>O'zbek tili</td>
                    <td>13.07.2024</td>
                </tr>
                <tr className={cls.applicationList__list}>
                    <td/>
                    <td>Quddusbek Azzamov Aminjonovich</td>
                    <td>+998 91 123 45 67</td>
                    <td>Bakalavr</td>
                    <td>Matematika</td>
                    <td>Sirtqi</td>
                    <td>O'zbek tili</td>
                    <td>13.07.2024</td>
                </tr>
                <tr className={cls.applicationList__list}>
                    <td/>
                    <td>Quddusbek Azzamov Aminjonovich</td>
                    <td>+998 91 123 45 67</td>
                    <td>Bakalavr</td>
                    <td>Matematika</td>
                    <td>Sirtqi</td>
                    <td>O'zbek tili</td>
                    <td>13.07.2024</td>
                </tr>
                <tr className={cls.applicationList__list}>
                    <td/>
                    <td>Quddusbek Azzamov Aminjonovich</td>
                    <td>+998 91 123 45 67</td>
                    <td>Bakalavr</td>
                    <td>Matematika</td>
                    <td>Sirtqi</td>
                    <td>O'zbek tili</td>
                    <td>13.07.2024</td>
                </tr>
                <tr className={cls.applicationList__list}>
                    <td/>
                    <td>Quddusbek Azzamov Aminjonovich</td>
                    <td>+998 91 123 45 67</td>
                    <td>Bakalavr</td>
                    <td>Matematika</td>
                    <td>Sirtqi</td>
                    <td>O'zbek tili</td>
                    <td>13.07.2024</td>
                </tr>
                <tr className={cls.applicationList__list}>
                    <td/>
                    <td>Quddusbek Azzamov Aminjonovich</td>
                    <td>+998 91 123 45 67</td>
                    <td>Bakalavr</td>
                    <td>Matematika</td>
                    <td>Sirtqi</td>
                    <td>O'zbek tili</td>
                    <td>13.07.2024</td>
                </tr>
                <tr className={cls.applicationList__list}>
                    <td/>
                    <td>Quddusbek Azzamov Aminjonovich</td>
                    <td>+998 91 123 45 67</td>
                    <td>Bakalavr</td>
                    <td>Matematika</td>
                    <td>Sirtqi</td>
                    <td>O'zbek tili</td>
                    <td>13.07.2024</td>
                </tr>
                <tr className={cls.applicationList__list}>
                    <td/>
                    <td>Quddusbek Azzamov Aminjonovich</td>
                    <td>+998 91 123 45 67</td>
                    <td>Bakalavr</td>
                    <td>Matematika</td>
                    <td>Sirtqi</td>
                    <td>O'zbek tili</td>
                    <td>13.07.2024</td>
                </tr>
                <tr className={cls.applicationList__list}>
                    <td/>
                    <td>Quddusbek Azzamov Aminjonovich</td>
                    <td>+998 91 123 45 67</td>
                    <td>Bakalavr</td>
                    <td>Matematika</td>
                    <td>Sirtqi</td>
                    <td>O'zbek tili</td>
                    <td>13.07.2024</td>
                </tr>
                <tr className={cls.applicationList__list}>
                    <td/>
                    <td>Quddusbek Azzamov Aminjonovich</td>
                    <td>+998 91 123 45 67</td>
                    <td>Bakalavr</td>
                    <td>Matematika</td>
                    <td>Sirtqi</td>
                    <td>O'zbek tili</td>
                    <td>13.07.2024</td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
})

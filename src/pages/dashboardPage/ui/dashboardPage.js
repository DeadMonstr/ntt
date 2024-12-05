import {Dashboard} from "../../../entities/dashboard";

import cls from "./dashboardPage.module.sass"
const data = [
    {title: " Yangi kelib tushganlar" , span: "Barcha yo’nalishlar bo’yichar" , number: 23 , color: "rgba(97, 136, 236, 1)"},
    {title: "Tahrirlashga  qaytarilgan" , span: "Barcha yo’nalishlar bo’yichar" , number: 16 , color: "rgba(97, 136, 236, 1)"},
    {title: "Qabul qilingan" , span: "Barcha yo’nalishlar bo’yichar" , number: 2678 , color: "rgba(97, 136, 236, 1)"},
    {title: "Rad etilgan" , span: "Barcha yo’nalishlar bo’yichar" , number: 8 , color: "rgba(97, 136, 236, 1)"},
    {title: "Barcha arizalar" , span: "Barcha yo’nalishlar bo’yichar" , number: 2702 , color: "rgba(97, 136, 236, 1)"},
    {title: "Sahifaga tashrif   buyuruvchilar" , span: null , number: 12865 , color: "rgba(109, 239, 198, 1)"},
]

export const DashboardPage = () => {
    return (
        <div className={cls.dashboard_main}>

            <Dashboard data={data}/>
        </div>
    );
};


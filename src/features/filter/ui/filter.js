import cls from "./filter.module.sass";
import {Input} from "../../../shared/ui/input";
import {Select} from "../../../shared/ui/select";
import {useState} from "react";


export const Filter = () => {
    const [settings, setSettings] = useState(true)

    return (
        <div className={cls.filter}>
            {settings ?

                <div className={cls.filter__search}>
                    <Input
                        extraClass={cls.filter__input}
                        placeholder={"Search..."}
                    />
                    <i className="fas fa-search"/>
                </div>
                :
                <div className={cls.filter__select}>
                    <Select titleOption={'Daraja'}/>
                    <Select titleOption={'Yo’nalish'}/>
                    <Select titleOption={'Ta’lim turi'}/>
                    <Select titleOption={'Ta’lim tili'}/>

                </div>
            }
            <div onClick={() => setSettings(!settings)} style={{background : settings ?  null : "rgba(53, 66, 210, 1)" }} className={cls.filter__settings}>

                {settings ?
                <i className="fas fa-sliders-h"/> :
                <i className="fas fa-undo"></i>}
            </div>
        </div>
    )
}

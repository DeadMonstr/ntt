
import {Input} from "shared/ui/input";

import cls from "./filter.module.sass";


export const Filter = () => {
    return (
        <div className={cls.filter}>
            <div className={cls.filter__search}>
                <Input
                    extraClass={cls.filter__input}
                    placeholder={"Search..."}
                />
                <i className="fas fa-search"/>
            </div>
            <div className={cls.filter__settings}>
                <i className="fas fa-sliders-h"/>
            </div>
        </div>
    )
}

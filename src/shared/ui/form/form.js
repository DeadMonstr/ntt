import {memo} from 'react';
import classNames from "classnames";

import cls from "./form.module.sass"

export const Form = memo(({id, extraClassname, onSubmit, children, isChange = true}) => {
    return (
        <form
            id={id}
            className={classNames(cls.form, extraClassname)}
            onSubmit={onSubmit}
        >
            {children}

            {
                isChange &&
                <input  value={"Tasdiqlash"} className={cls.form__submit} type="submit"/>
            }

        </form>
    );
})
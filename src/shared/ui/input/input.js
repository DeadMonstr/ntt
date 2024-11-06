import {memo} from "react";
import classNames from "classnames";

import cls from "./input.module.sass";

export const Input = memo((
    {
        type,
        defaultValue,
        value,
        register,
        required,
        style,
        name,
        extraClass,
        placeholder,
        onChange,
        disabled,
        extraValues,
        checked
    }
) => {
    return (
        <label style={style} className={cls.inputLabel} htmlFor={name}>
            {
                register ? (
                    <div className={cls.field}>
                        <input
                            id={name}
                            className={classNames(cls.input, extraClass)}
                            type={type}
                            placeholder={placeholder}
                            disabled={disabled}
                            required={required}
                            {...register(name, {
                                checked: checked,
                                defaultValue: defaultValue,
                                value: value,
                                onChange: onChange,
                                ...extraValues
                            })}
                        />
                    </div>
                ) : (
                    <div className={cls.field}>
                        <input
                            id={name}
                            className={classNames(cls.input, extraClass)}
                            type={type}
                            defaultValue={defaultValue}
                            value={value}
                            onChange={onChange}
                            placeholder={placeholder}
                            disabled={disabled}
                            checked={checked}
                            required={required}
                            {...extraValues}
                        />
                    </div>
                )
            }
        </label>
    )
})

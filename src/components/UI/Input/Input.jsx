import React, {useState} from 'react'
import classes from './Input.module.scss'
import { Patterns } from "../../../appConstants";

const Input = ({
                 text,
                 name,
                 type,
                 notValidText,
                 formState,
                 setFormState,
                 inputValue,
                 placeholder,
                 setInputValue,
               }) => {
  const [isValid, setIsValid] = useState(true);
  const newInputValue = (e) => {
    if (formState) {
      setFormState({
        ...formState,
        [name]: {
          value: e.target.value,
          isValid: Patterns[name].test(e.target.value),
        },
      });
      if (!Patterns[name].test(e.target.value) && e.target.value) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    } else if (inputValue) {
      setInputValue({ ...inputValue, [name]: e.target.value });
    }
  };

  return (
      <label className={classes[`input__block`]}>
        {text && <p className={classes[`input__name`]}>{text}</p>}
        <input
            className={classes[`input__${isValid}`]}
            type={type}
            name={name}
            placeholder={placeholder}
            value={inputValue[name]}
            onChange={(e) => newInputValue(e)}
        />
        {!isValid && (
            <p className={classes[`input__not__valid__text`]}>
              {notValidText}
            </p>
        )}
      </label>
  );
};

export default Input

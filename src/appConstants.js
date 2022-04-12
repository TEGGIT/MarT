export const Patterns = {
  FIO: new RegExp(`^(?=.*[а-я])(?=.*[А-Я])(?=.{${2},})`),
  email: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
  password: new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  ),
  number: /^((8|\+7)[-; ]?)?(\(?\d{3}\)?[-; ]?)?[\d\- ]{7,10}$/,
  date: /^(?:31([/\-.])(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec))\1|(?:29|30)([/\-.])(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2)(?:1[6-9]|[2-9]\d)?\d{2}$|^29([/\-.])(?:0?2|Feb)\3(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:16|[2468][048]|[3579][26])00)$|^(?:0?[1-9]|1\d|2[0-8])([/\-.])(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:1[6-9]|[2-9]\d)?\d{2}$/,

};

export let signinData = {
  FIO: {
    value: "",
    isValid: false,
  },

  email: {
    value: "",
    isValid: false,
  },
  password: {
    value: "",
    isValid: false,
  },
};

export let loginData = {
  email: {
    value: "",
    isValid: false,
  },
  password: {
    value: "",
    isValid: false,
  },
};
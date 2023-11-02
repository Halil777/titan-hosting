export const message = (tm, en, ru) => {
  return {
    tm: tm,
    en: en,
    ru: ru,
  };
};

export const successMessage = () => {
  return {
    tm: "Ustunlikli ",
    en: "Successfully",
    ru: "Uspeshno",
  };
};

export const errorMessage = () => {
  return {
    tm: "Yalnyslyk yuze cykdy",
    en: "Something went wrong",
    ru: "Chto-to poshlo ne tak",
  };
};

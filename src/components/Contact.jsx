import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("contact")}</h1>
      <div>{t("contactText")}</div>
    </>
  );
};

export default Contact;

import { useTranslation } from "react-i18next";
import user from "../../assets/images/user.svg";

const Login = () => {
  const { t } = useTranslation();
  return (
    <div className="flex gap-x-[10px] border border-lightBlue rounded-[12px] px-[19px] py-[8px] 2xl:px-[24px] 2xl:py-[13px] cursor-pointer hover:bg-lightBlue transition">
      <img src={user} alt="Account icon" />
      <p>{t("Account")}</p>
    </div>
  );
};

export default Login;

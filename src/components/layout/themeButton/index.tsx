import { useEffect, useState } from "react";
import { useThemeMode } from "../../../contexts/themeCtx";
import { IsThemeDark, IsThemeBright } from "../../common/svg/\bindex";
import { ThemeButtonWrapper } from "./style";

const ThemeButton = () => {
  const [isThemeToggle, setIsThemeToggle] = useState<boolean>(false);
  const { toggleTheme } = useThemeMode();
  const onClickButton = () => {
    setIsThemeToggle((pre) => !pre);
  };
  const handleToggleTheme = () => {
    toggleTheme();
  };

  return (
    <div onClick={handleToggleTheme}>
      <ThemeButtonWrapper onClick={onClickButton}>
        {isThemeToggle ? <IsThemeBright /> : <IsThemeDark />}
      </ThemeButtonWrapper>
    </div>
  );
};

export default ThemeButton;

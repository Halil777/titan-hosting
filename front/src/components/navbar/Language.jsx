import { useState } from "react";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import TranslateIcon from "@mui/icons-material/Translate";

const Language = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    handleClose();
  };

  return (
    <div>
      <Button
        variant="outlined"
        sx={{ borderRadius: "50px", textTransform: "none", color: "#fff" }}
        onClick={handleClick}
      >
        {i18n.language === "ru" ? (
          <>
            <img
              src="./images/ru.svg"
              style={{ width: "20px", marginRight: 10 }}
              alt="russian flag"
            />
            <Typography>Russian</Typography>
          </>
        ) : (
          <>
            <img
              src="./images/uk.svg"
              style={{ width: "20px", marginRight: 10 }}
              alt="russian flag"
            />
            <Typography>English</Typography>
          </>
        )}
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => changeLanguage("ru")}>
          <>
            <img
              src="./images/ru.svg"
              style={{ width: "20px", marginRight: 10 }}
              alt="russian flag"
            />
            Russian
          </>
        </MenuItem>
        <MenuItem onClick={() => changeLanguage("en")}>
          <>
            <img
              src="./images/uk.svg"
              style={{ width: "20px", marginRight: 10 }}
              alt="english flag"
            />
            English
          </>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Language;

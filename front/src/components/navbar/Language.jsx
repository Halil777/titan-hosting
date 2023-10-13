import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
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
        startIcon={<TranslateIcon />}
      >
        {i18n.language === "ru" ? "Russian" : "English"}
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
        <MenuItem onClick={() => changeLanguage("ru")}>Russian</MenuItem>
        <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
      </Menu>
    </div>
  );
};

export default Language;

import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import { useTranslation } from "react-i18next";

const ContactTypes = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { t } = useTranslation();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        startIcon={<PermPhoneMsgIcon sx={{ color: "#767369" }} />}
        variant="text"
        onClick={handleClick}
      >
        {t("contact")}
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default ContactTypes;

import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useTranslation } from "react-i18next";

const PaymentType = () => {
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
        startIcon={<AccountBalanceWalletIcon sx={{ color: "#767369" }} />}
        onClick={handleClick}
        variant="text"
      >
        {t("paymentType")}
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

export default PaymentType;

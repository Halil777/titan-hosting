import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import {
  headerContainer,
  headerItemsBlock,
  headerTitle,
  registerBtn,
} from "./style.mjs";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import Language from "./Language";
import { useTranslation } from "react-i18next";
import PaymentType from "./PaymentType";
import ContactTypes from "./ContactTypes";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openContact, setOpenContact] = useState(null);
  const { t } = useTranslation();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openContactt = Boolean(openContact);

  const handleClickContact = (event) => {
    setOpenContact(event.currentTarget);
  };

  const handleCloseContact = () => {
    setOpenContact(null);
  };

  return (
    <Box sx={headerContainer}>
      <Container>
        <Stack sx={headerItemsBlock} direction="row">
          {/* <Stack
            direction="row"
            spacing={2}
            onMouseEnter={handleClick}
            onMouseLeave={handleClose}
            sx={{ cursor: "pointer" }}
          >
            <AccountBalanceWalletIcon sx={{ color: "#767369" }} />
            <Typography sx={headerTitle}>{t("home")}</Typography>
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
          </Stack> */}
          <PaymentType />
          {/* <Stack
            direction="row"
            spacing={2}
            onMouseEnter={handleClickContact}
            onMouseLeave={handleCloseContact}
          >
            <PermPhoneMsgIcon sx={{ color: "#767369" }} />
            <Typography sx={headerTitle}>Способы оплаты</Typography>
            <Menu
              id="basic-menu"
              anchorEl={openContact}
              open={openContactt}
              onClose={handleCloseContact}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleCloseContact}>
                <Stack direction="row" spacing={2}>
                  <LocalPhoneIcon />
                  <Typography>+99361000000</Typography>
                </Stack>
              </MenuItem>
              <MenuItem onClick={handleCloseContact}>
                <Stack direction="row" spacing={2}>
                  <LocalPhoneIcon />
                  <Typography>+99361000000</Typography>
                </Stack>
              </MenuItem>
              <MenuItem onClick={handleCloseContact}>
                <Stack direction="row" spacing={2}>
                  <LocalPhoneIcon />
                  <Typography>+99361000000</Typography>
                </Stack>
              </MenuItem>
              <MenuItem onClick={handleCloseContact}>
                <Stack direction="row" spacing={2}>
                  <TelegramIcon />
                  <Typography>+99361000000</Typography>
                </Stack>
              </MenuItem>
              <MenuItem onClick={handleCloseContact}>
                <Stack direction="row" spacing={2}>
                  <EmailIcon />
                  <Typography>email@gmail.com</Typography>
                </Stack>
              </MenuItem>
            </Menu>
          </Stack> */}
          <ContactTypes />
          <Language />
          <Button sx={registerBtn} variant="outlined">
            Register
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;

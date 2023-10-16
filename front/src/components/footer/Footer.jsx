import Telegram from "@mui/icons-material/Telegram";
import {
  Box,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import Email from "@mui/icons-material/Email";
import Language from "../navbar/Language";
import { vpsserveritems } from "../navbar/vps/vpsItems.mjs";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  return (
    <div style={{ background: "blue" }}>
      <Container>
        <Grid container pb={5} pt={10}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Typography>Услуги</Typography>
            <Stack spacing={2} mt={4}>
              <Typography>VPS/VDS сервер</Typography>
              <Typography>Hi-CPU VPS/VDS</Typography>
              <Typography>VPS Storage</Typography>
              <Typography>Выделенные сервера</Typography>
              <Typography>Выделенные сервера в NL</Typography>
              <Typography>SSL сертификаты</Typography>
              <Typography>Администрирование</Typography>
            </Stack>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Typography>Информация</Typography>
            <Stack spacing={2} mt={4}>
              <Typography>Контакты</Typography>
              <Typography>Правила пользования</Typography>
              <Typography>Правила предоставления услуг</Typography>
              <Typography>Политика конфиденциальности</Typography>
            </Stack>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Box sx={{ width: 200 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Phone Number
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={phoneNumber}
                  label="Phone Number"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>+9936100000</MenuItem>
                  <MenuItem value={2}>+9936100000</MenuItem>
                  <MenuItem value={3}>+9936100000</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Stack direction="row" mt={2} alignItems="center" spacing={1}>
              <IconButton>
                <Telegram />
              </IconButton>
              <IconButton>
                <InstagramIcon />
              </IconButton>
              <IconButton>
                <Email />
              </IconButton>
            </Stack>
            <Stack mt={3}>
              <Language />
            </Stack>
          </Grid>
        </Grid>
        <Divider color="white" />
        <Typography
          sx={{
            color: "#fff",
            fontWeight: 700,
            fontSize: "22px",
            mt: 5,
            mb: -3,
          }}
        >
          VPS/VDS
        </Typography>
        <Grid container mt={4} pb={3}>
          {vpsserveritems.map((item, id) => {
            return (
              <Grid
                item
                lg={2}
                md={4}
                sm={6}
                xs={12}
                key={`server_footer_key${id}`}
                pt={2}
              >
                <Stack direction="row" spacing={2}>
                  <img src={item.pic} alt="pic" style={{ width: "20px" }} />
                  <Typography sx={{ color: "darkgray" }}>
                    {t(item.title)}
                  </Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
        <Divider color="white" />
      </Container>
    </div>
  );
};

export default Footer;

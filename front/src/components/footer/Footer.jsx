import Telegram from "@mui/icons-material/Telegram";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Email from "@mui/icons-material/Email";
import { vpsserveritems } from "../navbar/vps/vpsItems.mjs";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div style={{ background: "blue" }}>
      <Container>
        <Grid container pb={5} pt={10}>
          <Grid item lg={5} md={6} sm={6} xs={12}>
            <Typography color="white">Услуги</Typography>
            <Stack spacing={2} mt={4}>
              <Typography color="white">VPS/VDS сервер</Typography>
              <Typography color="white">Hi-CPU VPS/VDS</Typography>
              <Typography color="white">VPS Storage</Typography>
              <Typography color="white">Выделенные сервера</Typography>
              <Typography color="white">Выделенные сервера в NL</Typography>
              <Typography color="white">SSL сертификаты</Typography>
              <Typography color="white">Администрирование</Typography>
            </Stack>
          </Grid>
          <Grid item lg={5} md={6} sm={6} xs={12}>
            <Typography color="white">Информация</Typography>
            <Stack spacing={2} mt={4}>
              <Typography color="white">Контакты</Typography>
              <Typography color="white">Правила пользования</Typography>
              <Typography color="white">
                Правила предоставления услуг
              </Typography>
              <Typography color="white">Политика конфиденциальности</Typography>
            </Stack>
          </Grid>
          <Grid item lg={2} md={6} sm={6} xs={12}>
            <Stack
              direction="row"
              mt={2}
              alignItems="end"
              justifyContent="flex-end"
              spacing={1}
              sx={{ height: "100%" }}
            >
              <IconButton>
                <Telegram sx={{ color: "#fff" }} />
              </IconButton>
              <IconButton>
                <Email sx={{ color: "#fff" }} />
              </IconButton>
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
        <Box pb={5}>
          <Divider color="white" />
        </Box>
      </Container>
    </div>
  );
};

export default Footer;

import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const PopSsl = () => {
  return (
    <div style={{ paddingTop: 50, paddingBottom: 50 }}>
      <Container>
        <Stack spacing={3}>
          <Typography textAlign="center" variant="h3">
            Популярные SSL-сертификаты
          </Typography>
          <Typography textAlign="center" variant="h5" color="gray">
            Мгновенно обеспечивают защиту вашего сайта
          </Typography>
        </Stack>
        <Box
          sx={{
            background: "#121851",
            padding: 5,
            marginTop: 10,
            borderRadius: 8,
          }}
        >
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <Box
                sx={{
                  background: "#fff",
                  padding: 4,
                  borderRadius: 4,
                  transition: "0.7s",
                  "&:hover": {
                    boxShadow: "10px 10px 15px rgba(1,1,1, 0.8)",
                    cursor: "pointer",
                    mt: -3,
                  },
                }}
              >
                <Stack spacing={1}>
                  <Typography
                    sx={{ color: "#2B468D", fontSize: 18, fontWeight: 600 }}
                  >
                    AlphaSSL
                  </Typography>
                  <Typography
                    sx={{ color: "#2B468D", fontSize: 18, fontWeight: 600 }}
                  >
                    DV
                  </Typography>
                  <Typography sx={{ color: "gray" }}>
                    Уровень доверия
                  </Typography>
                  <Typography>Низкий</Typography>
                  <Divider />
                  <Typography sx={{ color: "gray" }}>Доступность</Typography>
                  <Typography>Частным лицам, компаниям</Typography>
                  <Divider />
                  <Typography sx={{ color: "gray" }}>Проверка</Typography>
                  <Typography>Домен</Typography>
                  <Divider />
                </Stack>
                <Typography sx={{ fontSize: 18, fontWeight: 600, mt: 4 }}>
                  <strong>16.00 €</strong>/ в год
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <Box
                sx={{
                  background: "#fff",
                  padding: 4,
                  borderRadius: 4,
                  transition: "0.7s",
                  "&:hover": {
                    boxShadow: "10px 10px 15px rgba(1,1,1, 0.8)",
                    cursor: "pointer",
                    mt: -3,
                  },
                }}
              >
                <Stack spacing={1}>
                  <Typography
                    sx={{ color: "#2B468D", fontSize: 18, fontWeight: 600 }}
                  >
                    AlphaSSL Wildcard
                  </Typography>
                  <Typography
                    sx={{ color: "#2B468D", fontSize: 18, fontWeight: 600 }}
                  >
                    DV / WC
                  </Typography>
                  <Typography sx={{ color: "gray" }}>
                    Уровень доверия
                  </Typography>
                  <Typography>Низкий</Typography>
                  <Divider />
                  <Typography sx={{ color: "gray" }}>Доступность</Typography>
                  <Typography>Частным лицам, компаниям</Typography>
                  <Divider />
                  <Typography sx={{ color: "gray" }}>Проверка</Typography>
                  <Typography>Домен</Typography>
                  <Divider />
                </Stack>
                <Typography sx={{ fontSize: 18, fontWeight: 600, mt: 4 }}>
                  <strong>45.00 €</strong>/ в год
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <Box
                sx={{
                  background: "#fff",
                  padding: 4,
                  borderRadius: 4,
                  transition: "0.7s",
                  "&:hover": {
                    boxShadow: "10px 10px 15px rgba(1,1,1, 0.8)",
                    cursor: "pointer",
                    mt: -3,
                  },
                }}
              >
                <Stack spacing={1}>
                  <Typography
                    sx={{ color: "#2B468D", fontSize: 18, fontWeight: 600 }}
                  >
                    OrganizationSSL
                  </Typography>
                  <Typography
                    sx={{
                      color: "#2B468D",
                      fontSize: 18,
                      fontWeight: 600,
                      wordSpacing: 3,
                    }}
                  >
                    OV MD
                  </Typography>
                  <Typography sx={{ color: "gray" }}>
                    Уровень доверия
                  </Typography>
                  <Typography>Средний</Typography>
                  <Divider />
                  <Typography sx={{ color: "gray" }}>Доступность</Typography>
                  <Typography>Компаниям</Typography>
                  <Divider />
                  <Typography sx={{ color: "gray" }}>Проверка</Typography>
                  <Typography>Домен и организация</Typography>
                  <Divider />
                </Stack>
                <Typography sx={{ fontSize: 18, fontWeight: 600, mt: 4 }}>
                  <strong>50.00 €</strong>/ в год
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default PopSsl;

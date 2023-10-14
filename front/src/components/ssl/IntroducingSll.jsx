import { Button, Container, Grid, Stack, Typography } from "@mui/material";

const IntroducingSll = () => {
  return (
    <div style={{ background: "#192F75" }}>
      <Container>
        <Grid container pt={10} pb={10}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack spacing={3}>
              <Typography variant="h3" color="white">
                SSL-сертификаты для сайта
              </Typography>
              <Typography color="white">
                Создаёт зашифрованное соединение, гарантируя посетителям <br />
                безопасность и конфиденциальность.
              </Typography>
              <Typography color="white">
                Стоимость сертификатов от 16.00 евро в год!
              </Typography>
              <Button
                variant="contained"
                sx={{
                  width: "250px",
                  background: "#84D584",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "18px",
                  textTransform: "capitalize",
                  height: "50px",
                }}
              >
                выбрать сертификат
              </Button>
            </Stack>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="./perfectImg/man-ssl.svg"
              className="moving-image-ssl"
              alt="ssl man"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default IntroducingSll;

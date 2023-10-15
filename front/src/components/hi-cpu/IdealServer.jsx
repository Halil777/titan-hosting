import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { cpuItems } from "./cpuItems.mjs";

const IdealServer = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        paddingTop: "80px",
        paddingBottom: "50px",
        background: "#EDF2FF",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          fontWeight={600}
          color="#284284"
          textAlign="center"
        >
          {t("idealServer")}
        </Typography>
        <Typography variant="h5" color="gray" textAlign="center" mt={2}>
          {t("idealServerSubtitle")}
        </Typography>
        <Grid container spacing={3} mt={1}>
          {cpuItems.map((item, i) => (
            <Grid
              mt={3}
              item
              key={`cpu_items_key${i}`}
              lg={4}
              md={4}
              sm={6}
              xs={12}
            >
              <Box
                sx={{
                  background: "#fff",
                  padding: 3,
                  borderRadius: 6,
                  height: 450,
                  transition: "0.7s",

                  "&:hover": {
                    boxShadow: "2px 3px 5px rgba(0,0,0, 0.7)",
                  },
                }}
              >
                <Stack justifyContent="center" alignItems="center">
                  <img
                    src={item.pic}
                    style={{ width: "50%", height: "200px" }}
                    alt="cpu items pictures"
                  />
                  <Typography
                    textAlign="center"
                    sx={{ fontSize: "18px", fontWeight: 700 }}
                  >
                    {t(item.title)}
                  </Typography>
                  <Typography mt={1} textAlign="center" color="gray">
                    {t(item.subTitle)}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default IdealServer;

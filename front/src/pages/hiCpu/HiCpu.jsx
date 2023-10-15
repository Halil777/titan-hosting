import { Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import IdealServer from "../../components/hi-cpu/IdealServer";
import AdditionalService from "../../components/hi-cpu/AdditionalService";
import MoreDefinition from "../../components/hi-cpu/MoreDefinition";

const HiCpu = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
          background: "#1B3379",
        }}
      >
        <Container>
          <Grid container spacing={10} alignItems="center">
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Typography variant="h4" color="orange">
                {t("hiCpuTitle")}
              </Typography>
              <Typography
                color="white"
                sx={{ fontSize: 18, lineHeight: 2 }}
                mt={3}
              >
                {t("hiCpuSubTitle")}
              </Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <img
                src="./hi_cpu/hi-cpu.svg"
                style={{ width: "100%" }}
                alt="hi-cpu"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <IdealServer />
      <AdditionalService />
      <MoreDefinition />
    </>
  );
};

export default HiCpu;

import { Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const TipeSsl = () => {
  const { t } = useTranslation();

  return (
    <div style={{ paddingTop: 50, paddingBottom: 50, background: "#121851" }}>
      <Container>
        <Typography
          textAlign="center"
          color="white"
          fontWeight={700}
          variant="h3"
          mb={10}
          mt={10}
        >
          {t("typesSslTitle")}
        </Typography>
        <Grid container>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <img
              src="./ssl/ssl-illustration.svg"
              alt="illustration"
              className="scaling-image"
            />
          </Grid>
          <Grid item lg={1} md={6} sm={12} xs={12}></Grid>
          <Grid item lg={8} md={6} sm={12} xs={12}>
            <span style={{ fontSize: "18px", color: "orange" }}>
              DV (Domain Validated)
            </span>
            <span
              style={{
                fontSize: "18px",
                color: "white",
                marginLeft: "20px",
              }}
            >
              — {t("typeSsl1")}
            </span>
            <br />
            <br />
            <span style={{ fontSize: "18px", color: "orange" }}>
              OV (Organization Validated)
            </span>
            <span
              style={{ fontSize: "18px", color: "white", marginLeft: "20px" }}
            >
              — {t("typeSsl2")}
            </span>
            <br />
            <br />
            <span style={{ fontSize: "18px", color: "orange" }}>
              EV (Extended Validation)
            </span>
            <span
              style={{
                fontSize: "18px",
                color: "white",
                marginLeft: "20px",
              }}
            >
              — {t("typeSsl3")}
            </span>
            <br />
            <br />
            <span style={{ fontSize: "18px", color: "orange" }}>
              MD сертификаты (Multi Domain)
            </span>
            <span
              style={{
                fontSize: "18px",
                color: "white",
                marginLeft: "20px",
              }}
            >
              — {t("typeSsl4")}
            </span>
            <br />
            <br />
            <span style={{ fontSize: "18px", color: "orange" }}>
              Wildcard (WC)
            </span>
            <span
              style={{
                fontSize: "18px",
                color: "white",
                marginLeft: "20px",
              }}
            >
              — {t("typeSsl5")}
            </span>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TipeSsl;

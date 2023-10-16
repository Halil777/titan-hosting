import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const CostSsl = () => {
  const { t } = useTranslation();
  return (
    <div style={{ paddingTop: 50, paddingBottom: 50, background: "#121851" }}>
      <Container>
        <Typography
          textAlign="center"
          color="orange"
          fontWeight={700}
          variant="h3"
        >
          {t("costSslTitle")}
        </Typography>
        <Typography
          textAlign="center"
          color="white"
          fontWeight={700}
          variant="h5"
          mt={2}
        >
          {t("costSslSubtitle")}
        </Typography>
        <Grid container spacing={4} mt={7}>
          <Grid item lg={3} md={6} sm={6} xs={12}>
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
                  {t("trustLevel")}
                </Typography>
                <Typography>{t("short")}</Typography>
                <Divider />
                <Typography sx={{ color: "gray" }}>
                  {t("availability")}
                </Typography>
                <Typography>{t("individualCompanies")}</Typography>
                <Divider />
                <Typography sx={{ color: "gray" }}>{t("test")}</Typography>
                <Typography>{t("domain")}</Typography>
                <Divider />
              </Stack>
              <Typography
                textAlign="center"
                sx={{ fontSize: 18, fontWeight: 600, mt: 4 }}
              >
                <strong>16.00 €</strong>/ {t("inYear")}
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
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
                  {t("trustLevel")}
                </Typography>
                <Typography>{t("short")}</Typography>
                <Divider />
                <Typography sx={{ color: "gray" }}>
                  {t("availability")}
                </Typography>
                <Typography>{t("individualCompanies")}</Typography>
                <Divider />
                <Typography sx={{ color: "gray" }}>{t("test")}</Typography>
                <Typography>{t("domain")}</Typography>
                <Divider />
              </Stack>
              <Typography
                textAlign="center"
                sx={{ fontSize: 18, fontWeight: 600, mt: 4 }}
              >
                <strong>45.00 €</strong>/ {t("inYear")}
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
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
                  DomainSSL
                </Typography>
                <Typography
                  sx={{
                    color: "#2B468D",
                    fontSize: 18,
                    fontWeight: 600,
                    wordSpacing: 3,
                  }}
                >
                  DV MD
                </Typography>
                <Typography sx={{ color: "gray" }}>
                  {t("trustLevel")}
                </Typography>
                <Typography>{t("short")}</Typography>
                <Divider />
                <Typography sx={{ color: "gray" }}>
                  {t("availability")}
                </Typography>
                <Typography>{t("individualCompanies")}</Typography>
                <Divider />
                <Typography sx={{ color: "gray" }}>{t("test")}</Typography>
                <Typography>{t("domain")}</Typography>
                <Divider />
              </Stack>
              <Typography
                textAlign="center"
                sx={{ fontSize: 18, fontWeight: 600, mt: 4 }}
              >
                <strong>35.00 €</strong>/ {t("inYear")}
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
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
                  DomainSSL WildCard
                </Typography>
                <Typography
                  sx={{
                    color: "#2B468D",
                    fontSize: 18,
                    fontWeight: 600,
                    wordSpacing: 3,
                  }}
                >
                  DV WC
                </Typography>
                <Typography sx={{ color: "gray" }}>
                  {t("trustLevel")}
                </Typography>
                <Typography>{t("short")}</Typography>
                <Divider />
                <Typography sx={{ color: "gray" }}>
                  {t("availability")}
                </Typography>
                <Typography>{t("individualCompanies")}</Typography>
                <Divider />
                <Typography sx={{ color: "gray" }}>{t("test")}</Typography>
                <Typography>{t("domain")}</Typography>
                <Divider />
              </Stack>
              <Typography
                textAlign="center"
                sx={{ fontSize: 18, fontWeight: 600, mt: 4 }}
              >
                <strong>120.00 €</strong>/ {t("inYear")}
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
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
                  {t("trustLevel")}
                </Typography>
                <Typography>{t("average")}</Typography>
                <Divider />
                <Typography sx={{ color: "gray" }}>
                  {t("availability")}
                </Typography>
                <Typography>{t("companies")}</Typography>
                <Divider />
                <Typography sx={{ color: "gray" }}>{t("test")}</Typography>
                <Typography>{t("domainAndOrganization")}</Typography>
                <Divider />
              </Stack>
              <Typography
                textAlign="center"
                sx={{ fontSize: 18, fontWeight: 600, mt: 4 }}
              >
                <strong>50.00 €</strong>/ {t("inYear")}
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
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
                  OrganizationSSL WildCard
                </Typography>
                <Typography
                  sx={{
                    color: "#2B468D",
                    fontSize: 18,
                    fontWeight: 600,
                    wordSpacing: 3,
                  }}
                >
                  OV WC
                </Typography>
                <Typography sx={{ color: "gray" }}>
                  {t("trustLevel")}
                </Typography>
                <Typography>{t("average")}</Typography>
                <Divider />
                <Typography sx={{ color: "gray" }}>
                  {t("availability")}
                </Typography>
                <Typography>{t("companies")}</Typography>
                <Divider />
                <Typography sx={{ color: "gray" }}>{t("test")}</Typography>
                <Typography>{t("domainAndOrganization")}</Typography>
                <Divider />
              </Stack>
              <Typography
                textAlign="center"
                sx={{ fontSize: 18, fontWeight: 600, mt: 4 }}
              >
                <strong>130.00 €</strong>/ {t("inYear")}
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
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
                  EV SSL
                </Typography>
                <Typography
                  sx={{
                    color: "#2B468D",
                    fontSize: 18,
                    fontWeight: 600,
                    wordSpacing: 3,
                  }}
                >
                  EV MD
                </Typography>
                <Typography sx={{ color: "gray" }}>
                  {t("trustLevel")}
                </Typography>
                <Typography>{t("high")}</Typography>
                <Divider />
                <Typography sx={{ color: "gray" }}>
                  {t("availability")}
                </Typography>
                <Typography>{t("companies")}</Typography>
                <Divider />
                <Typography sx={{ color: "gray" }}>{t("test")}</Typography>
                <Typography>{t("extendedCheck")}</Typography>
                <Divider />
              </Stack>
              <Typography
                textAlign="center"
                sx={{ fontSize: 18, fontWeight: 600, mt: 4 }}
              >
                <strong>130.00 €</strong>/ {t("inYear")}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CostSsl;

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import IdealServer from "../../components/hi-cpu/IdealServer";
import { additionalAccordionItems } from "../../components/hi-cpu/additionalServiceItems.mjs";
import { useTranslation } from "react-i18next";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const VdsStorage = () => {
  const { t } = useTranslation();

  const [openStates, setOpenStates] = useState(
    Array(additionalAccordionItems.length).fill(false)
  );

  const handleAccordionChange = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };

  return (
    <>
      <Helmet>
        <title>TitanHosting | VPS Storage</title>
      </Helmet>
      <div
        style={{
          marginTop: "130px",
          marginBottom: "50px",
          background: "#94DE77",
          borderRadius: "50px",
          paddingTop: "70px",
          paddingBottom: "70px",
        }}
      >
        <Container>
          <Grid container spacing={23} alignItems="center">
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                {t("vpsTitle")}
              </Typography>
              <Typography variant="h6" color="gray" mt={3}>
                {t("vpsSubtitle")}
              </Typography>

              <Stack alignItems="center" direction="row" spacing={2} mt={3}>
                <CheckIcon sx={{ color: "#7D6D3D" }} />
                <Typography
                  sx={{ fontSize: 18, fontWeight: 600, color: "#192306" }}
                >
                  {t("vpsSubtitle1")}
                </Typography>
              </Stack>
              <Stack alignItems="center" direction="row" spacing={2} mt={1}>
                <CheckIcon sx={{ color: "#7D6D3D" }} />
                <Typography
                  sx={{ fontSize: 18, fontWeight: 600, color: "#192306" }}
                >
                  {t("vpsSubtitle2")}
                </Typography>
              </Stack>
              <Stack alignItems="center" direction="row" spacing={2} mt={1}>
                <CheckIcon sx={{ color: "#7D6D3D" }} />
                <Typography
                  sx={{ fontSize: 18, fontWeight: 600, color: "#192306" }}
                >
                  {t("vpsSubtitle3")}
                </Typography>
              </Stack>
              <Stack alignItems="center" direction="row" spacing={2} mt={1}>
                <CheckIcon sx={{ color: "#7D6D3D" }} />
                <Typography
                  sx={{ fontSize: 18, fontWeight: 600, color: "#192306" }}
                >
                  {t("vpsSubtitle4")}
                </Typography>
              </Stack>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <img
                style={{ width: "80%" }}
                src="./hi_cpu/vds-storage.svg"
                alt="vds-storage"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <IdealServer />
      <Container>
        <Stack pt={9} spacing={4} mb={15}>
          {additionalAccordionItems.map((item, index) => (
            <Accordion
              key={`additional_accordionItems_key${index}`}
              expanded={openStates[index]}
              onChange={() => handleAccordionChange(index)}
              aria-controls={`panel-content-${index}`}
            >
              <AccordionSummary
                sx={{
                  height: "70px",
                  background: openStates[index] ? "#1A3378" : "#EDF2FF",
                  color: openStates[index] ? "#fff" : "",
                }}
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: openStates[index] ? "#fff" : "" }}
                  />
                }
                aria-controls={`panel-content-${index}`}
                id={`panel-header-${index}`}
              >
                <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
                  {t(item.title)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                id={`panel-content-${index}`}
                sx={{ background: "#EDF2FF" }}
              >
                <Typography
                  sx={{
                    fontSize: 17,
                    color: "gray",
                    letterSpacing: 1,
                    lineHeight: 1.7,
                    pl: 5,
                  }}
                >
                  {t(item.subTitle)}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default VdsStorage;

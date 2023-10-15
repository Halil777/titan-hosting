import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MoreDefinition = () => {
  const { t } = useTranslation();

  return (
    <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <Container>
        <Box sx={{ p: 5, border: "3px solid gray", borderRadius: 6 }}>
          <Stack spacing={3}>
            <Typography color="gray">{t("moreDefinitionText1")}</Typography>
            <Typography color="gray">{t("moreDefinitionText2")}</Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
              {t("moreDefinitionText3")}
            </Typography>
            <Typography color="gray">{t("moreDefinitionText4")}</Typography>
          </Stack>
          <Accordion
            elevation={0}
            className="section-expandable"
            // onChange={() => setIsAccordionOpen(!isAccordionOpen)}
            sx={{
              background: "transparent",
              border: "none",

              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              sx={{
                height: "70px",
                // background: isAccordionOpen ? "#1A3378" : "#EDF2FF",
                // color: isAccordionOpen ? "#fff" : "",
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontSize: 18, fontWeight: 500 }}></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: 17,
                  color: "gray",
                  letterSpacing: 1,
                  lineHeight: 1.7,
                  pl: 5,
                }}
              ></Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </div>
  );
};

export default MoreDefinition;

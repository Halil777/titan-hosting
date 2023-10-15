import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  additionalAccordionItems,
  additionalServiceItems,
} from "./additionalServiceItems.mjs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const AdditionalService = () => {
  const { t } = useTranslation();
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  return (
    <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <Container>
        <Typography textAlign="center" variant="h3" fontWeight={600}>
          {t("additionalService")}
        </Typography>
        <Grid container spacing={5} mt={5} mb={5}>
          {additionalServiceItems.map((item, i) => (
            <Grid item lg={4} key={`additional_items_key${i}`}>
              <Box
                sx={{
                  background: "#fff",
                  boxShadow: "2px 3px 5px rgba(0,0,0,0.8)",
                  padding: 5,
                  borderRadius: 6,
                  height: 200,
                  cursor: "pointer",
                }}
              >
                <Typography variant="h5" sx={{ opacity: 0.9 }} pb={3}>
                  {t(item)}
                </Typography>
                <Divider />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Stack pt={9} spacing={4}>
          {additionalAccordionItems.map((item, index) => (
            <Accordion
              onChange={() => setIsAccordionOpen(!isAccordionOpen)}
              key={`additional_accordionItems_key${index}`}
              sx={{ background: "#EDF2FF" }}
            >
              <AccordionSummary
                sx={{
                  height: "70px",
                  background: isAccordionOpen ? "#1A3378" : "#EDF2FF",
                  color: isAccordionOpen ? "#fff" : "",
                }}
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: isAccordionOpen ? "#fff" : "" }}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
                  {t(item.title)}
                </Typography>
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
                >
                  {t(item.subTitle)}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Container>
    </div>
  );
};

export default AdditionalService;

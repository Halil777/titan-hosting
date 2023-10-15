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

const VdsStorage = () => {
  const { t } = useTranslation();
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <>
      <div
        style={{
          marginTop: "70px",
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
                Серверы VPS/VDS с большим диском
              </Typography>
              <Typography variant="h6" color="gray" mt={3}>
                Вам не подходит тариф с фиксированным объемом диска? Тогда VPS
                STORAGE – для вас! Здесь вы сами выбираете, сколько вам нужно
                места, и в зависимости от этого регулируете стоимость оплаты.
              </Typography>

              <Stack alignItems="center" direction="row" spacing={2} mt={3}>
                <CheckIcon sx={{ color: "#7D6D3D" }} />
                <Typography
                  sx={{ fontSize: 18, fontWeight: 600, color: "#192306" }}
                >
                  Для запуска интернет магазина
                </Typography>
              </Stack>
              <Stack alignItems="center" direction="row" spacing={2} mt={1}>
                <CheckIcon sx={{ color: "#7D6D3D" }} />
                <Typography
                  sx={{ fontSize: 18, fontWeight: 600, color: "#192306" }}
                >
                  Создание и хранение бэкапов
                </Typography>
              </Stack>
              <Stack alignItems="center" direction="row" spacing={2} mt={1}>
                <CheckIcon sx={{ color: "#7D6D3D" }} />
                <Typography
                  sx={{ fontSize: 18, fontWeight: 600, color: "#192306" }}
                >
                  Создание медиа проектов
                </Typography>
              </Stack>
              <Stack alignItems="center" direction="row" spacing={2} mt={1}>
                <CheckIcon sx={{ color: "#7D6D3D" }} />
                <Typography
                  sx={{ fontSize: 18, fontWeight: 600, color: "#192306" }}
                >
                  Цена за 1 ГБ всего 0.03 €
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
    </>
  );
};

export default VdsStorage;

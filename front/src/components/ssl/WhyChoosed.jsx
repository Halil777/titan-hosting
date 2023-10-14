import { Container, Grid, Typography } from "@mui/material";
import { whyItems } from "./whyItems.mjs";

const WhyChoosed = () => {
  return (
    <div style={{ paddingTop: 50, paddingBottom: 50 }}>
      <Container>
        <Typography textAlign="center" fontWeight={700} variant="h3">
          Почему выбирают
        </Typography>
        <Typography
          textAlign="center"
          color="#2B468D"
          fontWeight={700}
          variant="h3"
        >
          SSL сертификаты от GlobalSign?
        </Typography>
        <Typography
          textAlign="center"
          color="gray"
          fontWeight={500}
          variant="h6"
          pt={2}
        >
          За 20 лет работы компания выпустила более 25 миллионов сертификатов
        </Typography>
        <Grid container mt={7}>
          {whyItems.map((item, i) => (
            <Grid
              item
              lg={3}
              md={6}
              sm={6}
              xs={12}
              key={`why_items_map_key${i}`}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                p: 2,
                gap: 3,
              }}
            >
              <img
                src={item.pic}
                alt="pictures"
                style={{
                  width: "50%",
                }}
              />
              <Typography variant="h6" textAlign={"center"}>
                {item.title}
              </Typography>
              <Typography color="gray" mt={-2} textAlign={"center"}>
                {item.subTitle}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default WhyChoosed;

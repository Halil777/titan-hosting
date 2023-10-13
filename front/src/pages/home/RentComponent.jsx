import { Box, Container, Typography } from "@mui/material";

const RentComponent = () => {
  return (
    <div style={{ marginTop: "70px", marginBottom: "50px" }}>
      <Container>
        <Box
          sx={{
            width: "100%",
            border: "2px solid #EDF2FF",
            padding: "50px",
            borderRadius: "15px",
            boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
          }}
        >
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Аренда идеального сервера
          </Typography>
          <Typography
            sx={{ color: "grey", mt: 10, mb: 4, textAlign: "center" }}
          >
            Для самых крутых игр, самых прибыльных магазинов, самой секретной
            корреспонденции, самых оригинальных сайтов, самого интересного
            контента, самых красивых фотографий – и просто для самых успешных
            проектов! Потому что для таких проектов нужен именно идеальный
            хостинг.
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            Просто выберите тариф, страну
            <strong>
              (Нидерланды, Россия, США, Литва, Молдова, Гонконг, Украина,
              Германия, Канада, Чехия, Словакия, Великобритания, Израиль,
              Турция, Польша, Болгария, Румыния, Италия, Финляндия, Венгрия,
              Португалия, Швеция, Швейцария, Казахстан, Сербия, Ирландия,
              Франция, Испания, Греция, Литва, Эстония, Дания, Австрия, Бельгия)
            </strong>
            – и ваш сервер будет готов в течение 15 минут!
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default RentComponent;

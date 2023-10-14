import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const TipeSsl = () => {
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
          Типы SSL-сертификатов
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
              — базовый тип сертификата, который выдается через валидацию
              доменного имени. Одним из самых популярных DV сертификатов
              является AlphaSSL.
            </span>
            <br />
            <br />
            <span style={{ fontSize: "18px", color: "orange" }}>
              OV (Organization Validated)
            </span>
            <span
              style={{ fontSize: "18px", color: "white", marginLeft: "20px" }}
            >
              — этот тип сертификатов проводитболее детальную проверк. УЦ
              проверяет не только домен, но и подтверждает, что сайт принадлежит
              определенной органзации. Проверка включает в себяподтверждение
              контактной информации и адреса организации. Прииспользовании
              OV-сертификата клиенты могут видеть дополнительнуюинформацию о
              владельце сертификата. Это создает дополнительное доверие
              упользователей. Примером такого сертификата является
              OrganizationSSL.
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
              — cертификаты с самым высоким уровнем защиты. При получении
              EV-сертификата УЦ проводит строгую проверку организации. Такой тип
              сертификатов обычно используется банками, финансовыми
              организациями и электронной коммерцией, где безопасность идоверие
              пользоватлей является критически важным фактором для бизнеса. Унас
              вы можете приобрести такой тип сертификат – GlobalSign EV SSL.
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
              — эта функция позволяет добавить к имеющемуся домену ещё один или
              несколько. В итоге один сертификат будет распространяться на
              несколько имён. Например, в нём могут содержаться google.com и
              youtube.com одновременно. Так можно сэкономить время и деньги и
              показать, что этими доменными именами владеет одна компания. Мы
              предлагаем SSL-сертификаты DomainSSL для защиты поддоменов и
              OrganizationSSL от GlobalSign для дополнительных доменов.
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
              — Данная опция позволяет добавить к доменному имени значение со *.
              Звёздочка здесь — это любые значения перед основным доменом. Таким
              образом, можно выпустить сертификат вида *.yandex.ru, чтобы он
              работал и с mail.yandex.ru, weather.yandex.ru, 1.yandex.ru и так
              далее. Сертификат работает только на тот уровень, на котором стоит
              *, то есть доменное имя типа 1.2.3.yandex.ru защищено не будет,
              потому что оно на 2 уровня ниже, чем *.yandex.ru. AlphaSSL
              Wildcard является одним из выгодных примеров такого вида
              сертификатов.
            </span>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TipeSsl;

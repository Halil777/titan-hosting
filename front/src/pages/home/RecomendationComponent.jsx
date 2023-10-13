import { Grid, Stack, Typography } from "@mui/material";
import { recItems } from "./recomendationItems";

const RecomendationComponent = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <Grid container>
        {recItems.map((item, i) => {
          return (
            <Grid
              item
              lg={3}
              md={4}
              xs={12}
              sm={6}
              key={`recomendationItems_key${i}`}
            >
              <Stack spacing={2} alignItems="center">
                <img
                  src={item.pic}
                  style={{
                    width: item.size,
                    paddingTop: item.paddingTop,
                    marginBottom: item.pb,
                  }}
                  alt="speedomter"
                />
                <Typography>{item.title}</Typography>
                <Typography sx={{ textAlign: "center", width: "70%" }}>
                  {item.subTitle}
                </Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default RecomendationComponent;

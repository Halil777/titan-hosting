import { Helmet } from "react-helmet-async";
import CostSsl from "../../components/ssl/CostSsl";
import IntroducingSll from "../../components/ssl/IntroducingSll";
import PopSsl from "../../components/ssl/PopSsl";
import TipeSsl from "../../components/ssl/TipeSsl";
import WhyChoosed from "../../components/ssl/WhyChoosed";

const SslPage = () => {
  return (
    <>
      <Helmet>
        <title>TitanHosting | SSL</title>
      </Helmet>
      <div style={{ marginTop: "60px" }}>
        <IntroducingSll />
        <PopSsl />
        <WhyChoosed />
        <CostSsl />
        <TipeSsl />
      </div>
    </>
  );
};

export default SslPage;

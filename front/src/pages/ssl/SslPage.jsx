import CostSsl from "../../components/ssl/CostSsl";
import IntroducingSll from "../../components/ssl/IntroducingSll";
import PopSsl from "../../components/ssl/PopSsl";
import TipeSsl from "../../components/ssl/TipeSsl";
import WhyChoosed from "../../components/ssl/WhyChoosed";

const SslPage = () => {
  return (
    <div>
      <IntroducingSll />
      <PopSsl />
      <WhyChoosed />
      <CostSsl />
      <TipeSsl />
    </div>
  );
};

export default SslPage;

import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/hero";
import HowItWorks from "../components/howItWorks";
import Read_To_Get_Started from "../components/read_To_Get_Started-Section";
import WhoCanPublish from "../components/whoCanPublish";

export default function PublishingPlatform() {
  return (
    <div className=" bg-white">
      <Header />
      <Hero />
      <WhoCanPublish />
      <HowItWorks />
      <Read_To_Get_Started />
      <Footer />
    </div>
  );
}

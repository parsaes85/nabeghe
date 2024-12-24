import Footer from "@/components/modules/Footer";
import Navbar from "@/components/modules/Navbar";
import Header from "@/components/templates/Index/Header";
import WhyUs from "@/components/templates/Index/WhyUs";
import LatestCourses from "@/components/templates/Index/LatestCourses";
import Comments from "@/components/templates/Index/Comments";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <WhyUs />
      <LatestCourses />
      <Comments />
      <Footer />
    </>
  );
}

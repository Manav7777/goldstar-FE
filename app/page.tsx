import Footer from "@/components/Footer/Footer";
import HomePage from "@/components/Home/HomePage";
import NavBar from "@/components/Navbar/NavBar";
import ServicesCard from "@/components/services/ServicesCard";

export default function MainScreen() {
  return (
    <div className="">
      <NavBar />
      <HomePage />
      <ServicesCard/>
      <Footer/>
    </div>
  );
}

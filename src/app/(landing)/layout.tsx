import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

interface ILandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout: React.FC<ILandingLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;

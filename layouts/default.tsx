import Navbar from "@components/NavBar";
import Footer from "@components/Footer";

const DefaultLayout = (props: any) => {
  return (
    <div className="absolute min-h-[400px] h-[100vh] w-full flex flex-col">
      <div className="relative">
        <Navbar />
      </div>
      <div className="relative w-full">{props.children}</div>
      <div className="relative w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;

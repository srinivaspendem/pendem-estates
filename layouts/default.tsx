import Navbar from "@components/NavBar";
import Footer from "@components/Footer";

const DefaultLayout = (props: any) => {
  return (
    <div className="absolute min-h-[400px] h-screen w-full flex flex-col">
      <div className="relative ">
        <Navbar />
      </div>
      <main className="relative w-full overflow-hidden">{props.children}</main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;

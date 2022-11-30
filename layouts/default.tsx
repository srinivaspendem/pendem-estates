import Navbar from "@components/NavBar";

const DefaultLayout = (props: any) => {
  return (
    <div className="absolute min-h-[400px] h-screen w-full overflow-hidden flex flex-col bg-[#DCDCDC]">
      <Navbar />
      <div className="relative w-full flex-grow h-full overflow-hidden container mx-auto">
        {props.children}
      </div>
    </div>
  );
};

export default DefaultLayout;

import useDashboardTitle from "@/hooks/use-page-title";

const HomePage = () => {
  useDashboardTitle("Home Page");

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-[22px] font-bold leading-normal text-gray-1000 lg:text-3xl">
        Home Page
      </h1>
    </div>
  );
};

export default HomePage;

import Banner from "@/components/shared/Banner";
import Blogcart from "@/components/shared/Blogcart";
import Hero from "@/components/shared/Hero";

const Home = async () => {
  return (
    <div className="py-12 gap-5">
      <Hero />
      <Banner />
      <div className="my-12">
        <h2 className="text-xl font-bold mb-8">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Blogcart />
          <Blogcart />
        </div>
      </div>
    </div>
  );
};
export default Home;

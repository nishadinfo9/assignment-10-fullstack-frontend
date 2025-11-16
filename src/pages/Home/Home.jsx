import React from "react";
import Container from "../../components/Container/Container";
import SlideBar from "../../components/SideBar/SlideBar";
import Collapse from "../../utils/Collapse";
import Galary from "../../utils/Galary";
import ModernGallery from "../../utils/ModernGalary";

const Home = () => {
  return (
    <Container>
      <SlideBar />
      <div className="p-6  min-h-screen text-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-white">Habit Tracker</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* {data &&
            data?.data.map((habit) => <Card key={habit._id} habit={habit} />)} */}
        </div>
      </div>
      <section className="my-30 flex flex-col items-center justify-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-center my-20">
          Phone Addiction
        </h2>

        <div className="grid grid-cols-3 gap-20">
          <Galary src="/galary/image1.jpg" />
          <Galary src="/galary/image2.jpg" />
          <Galary src="/galary/image3.jpg" />
          <Galary src="/galary/habits.jpg" />
          <Galary src="/galary/image4.jpg" />
          <Galary src="/galary/image5.png" />
        </div>
      </section>

      {/* FAQ Section  */}
      <div className="w-3xl mx-auto p-10 border-3 border-gray-500 flex flex-col items-center justify-center m-10 rounded-md">
        <h2 className="text-5xl font-bold pb-10 text-gray-300 ">FAQ</h2>
        <Collapse
          question={"Why do habits matter?"}
          answer={
            "Habits shape who you become. Small daily actions stack over time, creating long-term change — even more than big goals."
          }
        />
        <Collapse
          question={"How can habits change my life?"}
          answer={
            "Simple habits reduce stress, build focus, and create steady progress. Tiny improvements compound into big results."
          }
        />
        <Collapse
          question={"What if I fail to stay consistent?"}
          answer={
            "Everyone slips. What matters is restarting. Consistency beats perfection, and tracking helps you get back on track fast."
          }
        />
      </div>

      <ModernGallery />
    </Container>
  );
};

export default Home;

import React from "react";
import Container from "../../components/Container/Container";
import SlideBar from "../../components/SideBar/SlideBar";

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
    </Container>
  );
};

export default Home;

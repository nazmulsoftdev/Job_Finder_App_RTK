import React from "react";
import Job from "../components/Job/Job";

function HomePage() {
  return (
    <div>
      <div className="lg:pl-[14rem]  mt-[5.8125rem]">
        <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
          <Job />
        </main>
      </div>
    </div>
  );
}

export default HomePage;

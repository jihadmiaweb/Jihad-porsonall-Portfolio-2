import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const RootLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
      setTimeout(() => {
        setInitialLoading(false);
      }, 700);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) {
    return <Loading isComplete={loadingComplete} />;
  }

  return (
    <>
      {isLoading && <Loading isComplete={false} />}
      <div className="bg-linear-to-r from-[#0a0a0fec] to-gray-800 min-h-screen text-accent relative">
        {/* LightRays part removed */}

        <div className="relative z-10">
          <header className="sticky backdrop-blur-xl top-0 z-500">
            <Navbar />
          </header>
          <main className="min-h-[calc(100vh-65px)] max-w-7xl mx-auto my-6 sm:my-8 md:my-10 lg:my-12 px-5 sm:px-8 xl:px-0 text-sm md:text-base overflow-hidden">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RootLayout;

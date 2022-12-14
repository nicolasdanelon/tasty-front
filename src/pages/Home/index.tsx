import { h } from "preact";
import { useEffect } from "preact/hooks";
import Carousel from "../../components/Carousel";
import Hero from "../../components/Hero";
import LoginButton from "../../components/LoginButton";
import { NavLink } from "react-router-dom";
import React from "react";
import useTastyTokenContract from "../../helpers/useTastyTokenContract";

const Home = () => {
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10 pb-10">
        <Hero />
        <Carousel />
      </div>
      <div class="container my-24 px-6 mx-auto">
        <section class="mb-32">
          <div class="flex flex-wrap">
            <div class="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0">
              <div class="flex lg:py-12">
                <img
                  src="/footer-people.png"
                  className="w-full rounded-lg shadow-lg"
                  id="cta-img-nml-50"
                  style="z-index: -x10"
                  alt=""
                />
              </div>
            </div>

            <div class="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
              <div class="bg-violet-500 h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
                <div class="lg:pl-12">
                  <h2 class="text-3xl font-bold mb-6">
                    No te pierdas los mejores lugares
                  </h2>
                  <p class="mb-6 pb-2 lg:pb-0">
                    Conecta tu wallet descentralizada, reserva tu mesa en el
                    mejor lugar y conectate con otros comenzales si queres
                    ofertar su reserva. Gana NFTs para volver
                  </p>
                  <div>
                    <div class="my-2">
                      <LoginButton classCSS="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-100" />
                    </div>
                    <div>
                      <NavLink
                        to="restaurants"
                        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-100"
                      >
                        Ver restaurantes
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

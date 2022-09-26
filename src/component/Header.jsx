import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import "../App.css";

export default function Header({ setCurrGenre, setCurrCountry }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [width, setWidth] = useState(0);
  const btnRef = useRef();
  useEffect(() => {
    const body = document.querySelector("body");
    setWidth(body.clientWidth);
    window.addEventListener("resize", () => {
      setWidth(body.clientWidth);
    });
  }, []);
  console.log(width);
  return (
    <div className="py-6 ">
      <div className="bg-white flex px-4 pb-6 justify-around lg:justify-between  lg:px-10 xl:px-32 ">
        <h2 className="text-white font-bold  text-2xl sm:text-3xl lg:text-5xl">
          <span className="bg-black py-1.5 px-2.5 mr-2">S</span>
          <span className="bg-black py-1.5 px-2.5 mr-2">B</span>
          <span className="bg-black py-1.5 px-2">C</span>
          SBC
        </h2>

        {width < 1024 ? (
          <>
            <Button ref={btnRef} onClick={onOpen} bg="bg-white">
              <ul
                onClick={() => {
                  const btnA = document.querySelector(".menu-btn-a");
                  const btnB = document.querySelector(".menu-btn-b");
                  const btn = document.querySelector(".menu-btn");

                  btnB.classList.add("toggle-b");
                  btnA.classList.add("toggle-a");
                  btn.style.backgroundColor = "transparent";

                  function openMenu() {
                    btnB.classList.remove("toggle-b");
                    btnA.classList.remove("toggle-a");
                    btn.style.backgroundColor = "#555";
                  }
                  setTimeout(openMenu, 3000);
                }}
              >
                <li className="menu-btn-b"></li>
                <li className="menu-btn"></li>
                <li className="menu-btn-a"></li>
              </ul>
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />

                <DrawerBody className="flex  justify-center items-center  ">
                  <div className="flex flex-col items-center gap-10 h-4/6 justify-between">
                    <ul className="flex flex-col gap-10 mt-5">
                      <li
                        onClick={() => setCurrGenre("general")}
                        className="hover:decoration-red-900 hover:underline hover:decoration-2"
                      >
                        Home
                      </li>

                      <li
                        onClick={() => setCurrGenre("business")}
                        className="hover:decoration-red-900 hover:underline hover:decoration-2"
                      >
                        Business
                      </li>

                      <li
                        onClick={() => setCurrGenre("technology")}
                        className="hover:decoration-red-900 hover:underline hover:decoration-2"
                      >
                        Technology
                      </li>

                      <li
                        onClick={() => setCurrGenre("health")}
                        className="hover:decoration-red-900 hover:underline hover:decoration-2"
                      >
                        Health
                      </li>

                      <li
                        onClick={() => setCurrGenre("science")}
                        className="hover:decoration-red-900 hover:underline hover:decoration-2"
                      >
                        Science
                      </li>

                      <li
                        onClick={() => setCurrGenre("sports")}
                        className="hover:decoration-red-900 hover:underline hover:decoration-2"
                      >
                        Sports
                      </li>

                      <li
                        onClick={() => setCurrGenre("entertainment")}
                        className="hover:decoration-red-900 hover:underline hover:decoration-2"
                      >
                        Entertainment
                      </li>
                    </ul>
                    <div>
                      <p className="text-xs mb-4">Choose a country</p>
                      <select
                        className="border-2 rounded-sm text-gray-600 focus:outline-none focus:border-red-900"
                        onChange={(e) => {
                          const country = e.target.value;

                          setCurrCountry(country);
                        }}
                      >
                        <option value="gb">England</option>
                        <option value="us">USA</option>
                        <option value="ca">Canada</option>
                        <option value="de">Germany</option>
                        <option value="fr">France</option>
                        <option value="se">Sweden</option>
                      </select>
                    </div>
                  </div>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <div className="flex flex-col">
            <div className="flex justify-end items-center gap-6">
              <p
                className="text-xs lg:inline-block 
            text-gray-400 "
              >
                Choose a country
              </p>
              <select
                className=" lg:inline-block border-2 rounded-sm text-gray-600 focus:outline-none focus:border-red-900"
                onChange={(e) => {
                  const country = e.target.value;

                  setCurrCountry(country);
                }}
              >
                <option value="gb">England</option>
                <option value="us">USA</option>
                <option value="ca">Canada</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
                <option value="se">Sweden</option>
              </select>
            </div>
            <ul className="lg:flex gap-10 mt-5">
              <li
                onClick={() => setCurrGenre("general")}
                className="hover:decoration-red-900 hover:underline hover:decoration-2"
              >
                Home
              </li>

              <li
                onClick={() => setCurrGenre("business")}
                className="hover:decoration-red-900 hover:underline hover:decoration-2"
              >
                Business
              </li>

              <li
                onClick={() => setCurrGenre("technology")}
                className="hover:decoration-red-900 hover:underline hover:decoration-2"
              >
                Technology
              </li>

              <li
                onClick={() => setCurrGenre("health")}
                className="hover:decoration-red-900 hover:underline hover:decoration-2"
              >
                Health
              </li>

              <li
                onClick={() => setCurrGenre("science")}
                className="hover:decoration-red-900 hover:underline hover:decoration-2"
              >
                Science
              </li>

              <li
                onClick={() => setCurrGenre("sports")}
                className="hover:decoration-red-900 hover:underline hover:decoration-2"
              >
                Sports
              </li>

              <li
                onClick={() => setCurrGenre("entertainment")}
                className="hover:decoration-red-900 hover:underline hover:decoration-2"
              >
                Entertainment
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="h-20 bg-red-900"></div>
    </div>
  );
}

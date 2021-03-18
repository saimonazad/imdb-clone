import React, { useState, useEffect } from "react";
import "./Header.css";

import CardHeader from "./CardHeader";
import useInterval from "./useInterval";

const headerListMovies = [
  {
    id: 1,
    title: "'Zack Snyder's Justice League'",
    time: "2:19",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_QL75_UX280_CR0,0,280,414_.jpg",
    url: "#",
    featuredImage:
      "https://m.media-amazon.com/images/M/MV5BMzc5Zjc2YTMtM2IwZC00OTAyLThjZTktNGU3MjVjNTY5YThlXkEyXkFqcGdeQXNuZXNodQ@@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
  },
  {
    id: 2,
    title: "The Falcon and the Winter Soldier",
    time: "1:19",
    image:
      "https://m.media-amazon.com/images/M/MV5BODNiODVmYjItM2MyMC00ZWQyLTgyMGYtNzJjMmVmZTY2OTJjXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
    url: "#",
    featuredImage:
      "https://m.media-amazon.com/images/M/MV5BOGQ4NmEwZDMtNWNjNy00Mjc4LThmZTMtYmIxYjU3ZmEyMWY5XkEyXkFqcGdeQW1hcmNtYW5u._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
  },
  {
    id: 3,
    title: "The Rise of Henry Cavill",
    time: "4:03",
    image:
      "https://m.media-amazon.com/images/M/MV5BOWY2OGY3MjktMDA1Ny00NDJkLTllMTEtMWVhNjg1MWQ2YmQ3XkEyXkFqcGdeQXVyNDYzNjU3ODM@._V1_QL75_UX280_CR0,0,280,414_.jpg",
    url: "#",
    featuredImage:
      "https://m.media-amazon.com/images/M/MV5BNjhjZWU5OTgtYzg5ZC00MjUyLTk3ZTItMjUzYmEzYWMyYjU5XkEyXkFqcGdeQXNoYW5nZWxs._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
  },
  {
    id: 4,
    title: "In the Heights",
    time: "2:24",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDkzYmM5M2EtMjQxMS00ZDNiLTkwOWQtOTExZDdiMDIxNmQxXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
    url: "#",
    featuredImage:
      "https://m.media-amazon.com/images/M/MV5BOGZhNjcxM2ItODRlZC00ODhkLWJlMjgtYzcyMWMxYzI0NTkyXkEyXkFqcGdeQXNuZXNodQ@@._V1_QL75_UX1000_CR0,6,1000,563_.jpg",
  },
  {
    id: 5,
    title: "From 'Suicide Squad' to 'Ma Rainey's Black Bottom'",
    time: "2:40",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTBlZGY1OTAtN2RjMC00ZThiLWFiZmUtN2VkOGMxNmMyYjQwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX280_CR0,0,280,414_.jpg",
    url: "#",
    featuredImage:
      "https://m.media-amazon.com/images/M/MV5BNjVlYTIzMGQtYTcyZS00NTI3LTg3YTktOTFjZjY1ZGZkZDJhXkEyXkFqcGdeQW1pYnJ5YW50._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
  },
  {
    id: 6,
    title: "'Cruella'",
    time: "1:01",
    image:
      "https://m.media-amazon.com/images/M/MV5BZWQ1YjNiMTItZjkwZS00NDMyLThiOWEtNzBkMzAzMWU2ZDUwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX280_CR0,0,280,414_.jpg",
    url: "#",
    featuredImage:
      "https://m.media-amazon.com/images/M/MV5BZGRhMDVhYWQtZjExNi00ZDEzLWI4ZDItNGIzYWE1Y2Q4MDNiXkEyXkFqcGdeQWpnYW1i._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
  },
];

const useConstructor = (callBack = () => {}) => {
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  if (hasBeenCalled) return;
  callBack();
  setHasBeenCalled(true);
};

const Header = () => {
  const [activeSlideIndex, setactiveSlideIndex] = useState(0);
  const [nextMovies, setnextMovies] = useState([]);
  const [autoCarousel, setautoCarousel] = useState(true);

  let autoRotateCount = 0;

  function handleIntervalCarousel() {
    if (autoRotateCount > headerListMovies.length - 2) {
      autoRotateCount = 0;
      autoRotateCount++;
    } else {
      autoRotateCount++;
    }
    setactiveSlideIndex(autoRotateCount);
  }
  const stopIntervalCarousel = useInterval(handleIntervalCarousel, 5000);

  const movies = () => {
    let newLists = [];
    headerListMovies
      .slice(activeSlideIndex + 1, activeSlideIndex + 4)
      .map((item) => {
        newLists.push(item);
      });
    if (newLists.length >= 2 && newLists.length < 4) {
      newLists.push(headerListMovies[0]);
    } else if (newLists.length < 3) {
      newLists.push(headerListMovies[0]);
      newLists.push(headerListMovies[1]);
      newLists.push(headerListMovies[2]);
    }
    setnextMovies(newLists);
  };
  useConstructor(() => {
    movies();
  });

  useEffect(() => {
    if (activeSlideIndex == headerListMovies.length) {
      setactiveSlideIndex(0);
      movies();
    } else {
      movies();
    }
  }, [activeSlideIndex]);

  const onClickHandler = (type) => {
    const numberOfSlides = headerListMovies.length;
    let currentSlideIndex = activeSlideIndex;
    switch (type) {
      case "prev":
        if (currentSlideIndex > 0) {
          currentSlideIndex--;
        } else {
          currentSlideIndex = numberOfSlides - 1;
          console.log(currentSlideIndex);
        }
        break;
      case "next":
        if (currentSlideIndex >= 0 && currentSlideIndex < numberOfSlides - 1) {
          currentSlideIndex++;
        } else {
          currentSlideIndex = 0;
        }
    }
    if (autoCarousel == true) {
      stopIntervalCarousel();
      setautoCarousel(false);
    }
    setactiveSlideIndex(currentSlideIndex);
  };

  return (
    <header className="bg-black">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex ">
          <div className="flex-auto w-8/12">
            <div className="relative">
              <div
                className="test bg-no-repeat bg-cover h-full w-full"
                style={{
                  minHeight: "500px",
                  backgroundImage: `linear-gradient(\n      rgba(0, 0, 0, 0) 0%,\n      rgba(0, 0, 0, 0) 60%,\n      rgba(0, 0, 0, 0.2) 70%,\n      rgba(0, 0, 0, 0.7) 80%,\n      rgba(0, 0, 0, 0.9) 90%,\n      rgba(0, 0, 0, 1) 100%\n    ),\n    url(${headerListMovies[activeSlideIndex].featuredImage})`,
                }}
              ></div>
              <div className="absolute bottom-0">
                <div className="flex">
                  <div className="flex-auto ml-3 shadow-2xl">
                    <img
                      alt="#204 - Henry Cavill"
                      loading="lazy"
                      src={`${headerListMovies[activeSlideIndex].image}`}
                      width="140"
                    />
                  </div>
                  <div className="flex-auto self-end">
                    <div className="flex">
                      <div className="flex-auto w-24 text-white px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-auto self-center">
                        <div className="flex">
                          <h1 className="text-4xl text-white inline px-4 leading-9">
                            {headerListMovies[activeSlideIndex].title}
                          </h1>
                          <span className="text-white px-4 self-end">
                            {headerListMovies[activeSlideIndex].time}
                          </span>
                        </div>
                        <p className="text-white px-4">Watch The Trailer!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => onClickHandler("prev")}
                className="absolute top-1/3 left-0 text-white w-14 h-14 p-3 bg-black border bg-opacity-50 border-white rounded cursor-pointer hover:text-yellow-400 font-bold border"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div
                onClick={() => onClickHandler("next")}
                className=" absolute top-1/3 right-0 text-white w-14 h-14 p-3 bg-black border bg-opacity-50 border-white rounded cursor-pointer hover:text-yellow-400 font-bold border"
              >
                <svg
                  className="align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex-auto w-4/12">
            <CardHeader movies={nextMovies} currentIndex={activeSlideIndex} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Container, Indicator, Title } from "@mantine/core";
import Slider from "react-slick";

const Overlay = () => {
  return (
    <div
      className="absolute top-0 right-0 bottom-0 left-0 opacity-60"
      style={{ backgroundColor: "rgba(0,0,0,.5)" }}
    ></div>
  );
};

export const Interested = () => {
  var settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const image =
    "https://demos.pixelgrade.com/listable/wp-content/uploads/sites/17/2015/11/home-cards-stay-450x539.jpg";
  return (
    <Container className="space-y-8">
      <Title className="!font-semibold text-primary text-2xl text-center text-slate-800">
        Bạn quan tâm đến điều gì?
      </Title>
      <p className="text-slate-400 !mt-0 text-center text-sm">
        Explore some of the best tips from around the city from our partners and
        friends
      </p>

      <Slider {...settings}>
        <div>
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
            className="relative aspect-w-7 aspect-h-8 mx-2 cursor-pointer"
          >
            <img
              className="mx-auto w-full h-full object-cover"
              src="https://demos.pixelgrade.com/listable/wp-content/uploads/sites/17/2015/11/home-cards-stay-450x539.jpg"
            />
            <Overlay />
            <div className="text-white flex flex-col justify-center gap-8">
              <div className="w-32 h-32 mx-auto p-8 border-white rounded-full border-solid relative">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 26 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    transform="translate(-11 -12)"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <circle
                      stroke="currentColor"
                      stroke-width="2"
                      cx="24"
                      cy="24"
                      r="24"
                    ></circle>
                    <g fill="currentColor">
                      <path d="M28 36h-7v-5h-3v5h-7V12h17v24zm-6-1h5V13H12v22h5v-5h5v5z"></path>
                      <path d="M18.5 27.5h-5v-5h5v5zm-4-1h3v-3h-3v3zM25.5 27.5h-5v-5h5v5zm-4-1h3v-3h-3v3zM34.5 27.5h-5v-5h5v5zm-4-1h3v-3h-3v3zM34.5 33.5h-5v-5h5v5zm-4-1h3v-3h-3v3zM18.5 20.5h-5v-5h5v5zm-4-1h3v-3h-3v3zM25.5 20.5h-5v-5h5v5zm-4-1h3v-3h-3v3z"></path>
                      <path d="M37 36H27V20h10v16zm-9-1h8V21h-8v14z"></path>
                    </g>
                  </g>
                </svg>
                <span className="absolute w-8 h-8 bg-white rounded-full top-0 right-2 text-black flex justify-center items-center shadow font-semibold">
                  11
                </span>
              </div>

              <Title className="text-center text-2xl font-semibold">Stay</Title>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
            className="relative aspect-w-7 aspect-h-8 mx-2 cursor-pointer"
          >
            <img
              className="mx-auto w-full h-full object-cover"
              src="https://demos.pixelgrade.com/listable/wp-content/uploads/sites/17/2015/11/home-cards-eat-450x436.jpg"
            />
            <Overlay />
            <div className="text-white flex flex-col justify-center gap-8">
              <div className="w-32 h-32 mx-auto p-8 border-white rounded-full border-solid relative">
                <svg viewBox="0 0 24 26" xmlns="http://www.w3.org/2000/svg">
                  <g
                    transform="translate(-12 -11)"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <circle
                      stroke="currentColor"
                      stroke-width="2"
                      cx="24"
                      cy="24"
                      r="24"
                    ></circle>
                    <g fill="currentColor">
                      <path d="M18.372 36.737h-.036c-1.278 0-2.32-1.04-2.32-2.32V24.244c0-.836-.37-1.644-1.04-2.278-1.237-1.163-1.946-2.882-1.946-4.715 0-3.367 2.39-6.106 5.325-6.106 2.938 0 5.325 2.74 5.325 6.106 0 1.833-.71 3.552-1.946 4.715-.672.634-1.043 1.442-1.043 2.278v10.17c0 1.282-1.04 2.322-2.318 2.322zm-.02-24.55c-2.363 0-4.285 2.273-4.285 5.065 0 1.547.59 2.99 1.617 3.96.884.83 1.37 1.907 1.37 3.033v10.17c0 .707.575 1.282 1.28 1.282h.036c.706 0 1.28-.575 1.28-1.28V24.244c0-1.126.487-2.202 1.37-3.034 1.03-.968 1.62-2.41 1.62-3.958.002-2.794-1.922-5.066-4.287-5.066zM29.983 36.737h-.036c-1.28 0-2.32-1.04-2.32-2.32V24.244c0-.836-.37-1.644-1.04-2.278-1.237-1.163-1.946-2.882-1.946-4.715 0-1.406 0-3.155 1.094-4.374.21-.23.49-.357.797-.357.582 0 1.056.46 1.077 1.033l.448 3.343c.01.072.127.053.133-.002l.46-4.1c.015-.487.364-.91.843-1.017.04-.007.075-.013.113-.013h.728c.04 0 .077.004.113.013.478.106.828.53.843 1.016l.46 4.1c.01.075.125.056.132.003l.45-3.343c.02-.572.495-1.032 1.075-1.032.307 0 .588.127.796.358 1.093 1.22 1.093 2.968 1.093 4.374 0 1.833-.71 3.552-1.945 4.715-.67.634-1.042 1.444-1.042 2.278v10.17c-.002 1.282-1.042 2.322-2.323 2.322zm-3.865-23.512l.386.347c-.766.854-.826 2.118-.826 3.68 0 1.547.59 2.99 1.617 3.96.883.83 1.37 1.907 1.37 3.033v10.17c0 .707.575 1.282 1.28 1.282h.036c.706 0 1.282-.575 1.282-1.28V24.244c0-1.126.486-2.202 1.37-3.034 1.028-.968 1.617-2.41 1.617-3.958 0-1.562-.062-2.826-.828-3.68 0 .023-.062.067-.066.09l-.452 3.372c-.072.545-.542.956-1.092.956-.57 0-1.042-.42-1.105-.978l-.46-4.126c-.003-.02-.005-.038-.005-.06l.004-.02h-.533c-.008.023-.03.063-.03.08l-.462 4.126c-.062.557-.533.978-1.095.978-.56 0-1.03-.41-1.1-.956l-.453-3.373c-.003-.02-.003-.044-.003-.067l-.452-.368z"></path>
                      <path d="M18.397 21.105c-1.72 0-3.118-1.67-3.118-3.723 0-2.054 1.397-3.724 3.117-3.724.216 0 .39.174.39.39 0 .215-.174.39-.39.39-1.29 0-2.338 1.32-2.338 2.944 0 1.623 1.046 2.944 2.337 2.944.216 0 .39.174.39.39 0 .215-.174.39-.39.39z"></path>
                    </g>
                  </g>
                </svg>
                <span className="absolute w-8 h-8 bg-white rounded-full top-0 right-2 text-black flex justify-center items-center shadow font-semibold">
                  33
                </span>
              </div>

              <Title className="text-center text-2xl font-semibold">
                Eat & Drink
              </Title>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
            className="relative aspect-w-7 aspect-h-8 mx-2 cursor-pointer"
          >
            <img
              className="mx-auto w-full h-full object-cover"
              src="https://demos.pixelgrade.com/listable/wp-content/uploads/sites/17/2015/11/home-cards-visit-450x436.jpg"
            />
            <Overlay />
            <div className="text-white flex flex-col justify-center gap-8">
              <div className="w-32 h-32 mx-auto p-8 border-white rounded-full border-solid relative">
                <svg viewBox="0 0 27 24" xmlns="http://www.w3.org/2000/svg">
                  <g
                    transform="translate(-10 -11)"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <circle
                      stroke="currentColor"
                      stroke-width="2"
                      cx="24"
                      cy="24"
                      r="24"
                    ></circle>
                    <path
                      d="M36.25 34.59H10.584c-.323 0-.584-.263-.584-.585 0-.322.26-.583.584-.583H36.25c.322 0 .584.26.584.583 0 .322-.262.584-.584.584zm-17.5-5.835c.322 0 .583.26.583.584 0 .32-.26.582-.583.582h-4.666c-.323 0-.584-.26-.584-.583 0-.324.26-.585.584-.585h.583v-7.583h-.583c-.323 0-.584-.26-.584-.583 0-.324.26-.585.584-.585h4.666c.322 0 .583.26.583.584 0 .32-.26.582-.583.582h-.583v7.583h.583zM17 21.172h-1.166v7.583H17v-7.583zm8.75 7.583c.322 0 .583.26.583.584 0 .32-.26.582-.583.582h-4.666c-.323 0-.584-.26-.584-.583 0-.324.26-.585.584-.585h.583v-7.583h-.583c-.323 0-.584-.26-.584-.583 0-.324.26-.585.584-.585h4.666c.322 0 .583.26.583.584 0 .32-.26.582-.583.582h-.583v7.583h.583zM24 21.172h-1.166v7.583H24v-7.583zm11.084 10.5c0 .322-.26.583-.584.583H12.333c-.322 0-.583-.26-.583-.583 0-.322.26-.583.583-.583H34.5c.323 0 .584.26.584.582zm-2.334-2.917c.322 0 .583.26.583.584 0 .32-.26.582-.583.582h-4.666c-.323 0-.584-.26-.584-.583 0-.324.26-.585.584-.585h.583v-7.583h-.583c-.323 0-.584-.26-.584-.583 0-.324.26-.585.584-.585h4.666c.322 0 .583.26.583.584 0 .32-.26.582-.583.582h-.583v7.583h.583zM31 21.172h-1.166v7.583H31v-7.583zm-19.833-3.5L23.417 11l12.25 6.672v1.167h-24.5V17.67zm21.898 0l-9.648-4.99-9.686 4.99h19.335z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
                <span className="absolute w-8 h-8 bg-white rounded-full top-0 right-2 text-black flex justify-center items-center shadow font-semibold">
                  7
                </span>
              </div>

              <Title className="text-center text-2xl font-semibold">
                Visit
              </Title>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
            className="relative aspect-w-7 aspect-h-8 mx-2 cursor-pointer"
          >
            <img
              className="mx-auto w-full h-full object-cover"
              src="https://demos.pixelgrade.com/listable/wp-content/uploads/sites/17/2015/11/home-cards-shop-450x436.jpg"
            />
            <Overlay />
            <div className="text-white flex flex-col justify-center gap-8">
              <div className="w-32 h-32 mx-auto p-8 border-white rounded-full border-solid relative">
                <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                  <g
                    transform="translate(-14 -12)"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <circle
                      stroke="currentColor"
                      stroke-width="2"
                      cx="24"
                      cy="24"
                      r="24"
                    ></circle>
                    <path
                      d="M33.333 19.065h-4V17.03c0-2.602-2.18-5.03-4.766-5.03C21.98 12 20 14.428 20 17.03v2.035h-4l-2 14.912h22l-2.667-14.912zm-12-2.033c0-1.998 1.248-3.462 3.234-3.462 1.985 0 3.433 1.464 3.433 3.462v2.033h-6.667v-2.033zm-4 3.388H20v.68c-.36.233-.6.64-.6 1.104 0 .722.58 1.308 1.292 1.308.714 0 1.292-.586 1.292-1.308 0-.486-.262-.91-.65-1.135v-.65H28v.91c-.206.23-.333.537-.333.874 0 .722.578 1.308 1.292 1.308.712 0 1.29-.586 1.29-1.308 0-.59-.386-1.09-.916-1.252v-.532H32l2 12.2H16l1.334-12.2z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
                <span className="absolute w-8 h-8 bg-white rounded-full top-0 right-2 text-black flex justify-center items-center shadow font-semibold">
                  14
                </span>
              </div>

              <Title className="text-center text-2xl font-semibold">Shop</Title>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
            className="relative aspect-w-7 aspect-h-8 mx-2 cursor-pointer"
          >
            <img
              className="mx-auto w-full h-full object-cover"
              src="https://demos.pixelgrade.com/listable/wp-content/uploads/sites/17/2015/11/home-cards-stay-450x539.jpg"
            />
            <Overlay />
            <div className="text-white flex flex-col justify-center gap-8">
              <div className="w-32 h-32 mx-auto p-8 border-white rounded-full border-solid relative">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 26 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    transform="translate(-11 -12)"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <circle
                      stroke="currentColor"
                      stroke-width="2"
                      cx="24"
                      cy="24"
                      r="24"
                    ></circle>
                    <g fill="currentColor">
                      <path d="M28 36h-7v-5h-3v5h-7V12h17v24zm-6-1h5V13H12v22h5v-5h5v5z"></path>
                      <path d="M18.5 27.5h-5v-5h5v5zm-4-1h3v-3h-3v3zM25.5 27.5h-5v-5h5v5zm-4-1h3v-3h-3v3zM34.5 27.5h-5v-5h5v5zm-4-1h3v-3h-3v3zM34.5 33.5h-5v-5h5v5zm-4-1h3v-3h-3v3zM18.5 20.5h-5v-5h5v5zm-4-1h3v-3h-3v3zM25.5 20.5h-5v-5h5v5zm-4-1h3v-3h-3v3z"></path>
                      <path d="M37 36H27V20h10v16zm-9-1h8V21h-8v14z"></path>
                    </g>
                  </g>
                </svg>
                <span className="absolute w-8 h-8 bg-white rounded-full top-0 right-2 text-black flex justify-center items-center shadow font-semibold">
                  11
                </span>
              </div>

              <Title className="text-center text-2xl font-semibold">Stay</Title>
            </div>
          </div>
        </div>
      </Slider>
    </Container>
  );
};

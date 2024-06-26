import VideoModal from "./Modal";
import { useState } from "react";
import Zamira from "../images/zamira.webp";
import youtube from "../images/youtube.svg";
import Malika from "../images/malika.webp";
import Iroda from "../images/iroda.webp";
import Sumbula from "../images/sunbula.webp";
import SwiperTeam from "./Carousel";
import { SwiperSlide } from "swiper/react";

const YoutubeModal = () => {
  const defaultValues = { open: false, link: "" };
  const [modal, setModal] = useState(defaultValues);

  const handleOpen = (link) => () => {
    setModal({
      open: true,
      link,
    });
  };


  return (
    <>
      <div
        id="yt-vid"
        className="max-sm:hidden mx-auto max-w-2xl  pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8 overflow-hidden"
      >
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="mx-auto imageContainer">
            <img
              src={Zamira}
              width={306}
              height={306}
              alt="imgOne"
              className="rounded-2xl"
            />
            <div>
              <button
                className="hidden text-white font-semibold absolute z-10"
                style={{
                  top: "45%",
                  right: "45%",
                }}
                onClick={handleOpen(
                  "https://youtube.com/embed/8hgvsfU7tsc?rel=0&showinfo=0&autoplay=1"
                )}
              >
                <img src={youtube} alt="instagram" width={36} height={36} />
              </button>
            </div>
          </div>

          <div className="mx-auto imageContainer">
            <img
              src={Malika}
              width={306}
              height={306}
              alt="instaTwo"
              className="rounded-2xl"
            />
            <div>
              <button
                className="hidden text-white font-semibold absolute z-10"
                style={{
                  top: "45%",
                  right: "45%",
                }}
                onClick={handleOpen(
                  "https://youtube.com/embed/2aQ5GM1n9Qk?rel=0&showinfo=0&autoplay=1"
                )}
              >
                <img src={youtube} alt="instagram" width={36} height={36} />
              </button>
            </div>
          </div>

          <div className="mx-auto imageContainer">
            <img
              src={Iroda}
              width={306}
              height={306}
              alt="instaThree"
              className="rounded-2xl"
            />
            <div>
              <button
                className="hidden text-white font-semibold absolute z-10"
                style={{
                  top: "45%",
                  right: "45%",
                }}
                onClick={handleOpen(
                  "https://www.youtube.com/embed/GinnkDF7w1A?rel=0&showinfo=0&autoplay=1"
                )}
              >
                <img src={youtube} alt="instagram" width={36} height={36} />
              </button>
            </div>
          </div>

          <div className="mx-auto imageContainer">
            <img
              src={Sumbula}
              width={306}
              height={306}
              alt="instaFour"
              className="rounded-2xl"
            />
            <div>
              <button
                className="hidden text-white font-semibold absolute z-10"
                style={{
                  top: "45%",
                  right: "45%",
                }}
                onClick={handleOpen(
                  "https://youtube.com/embed/UpciodTd59I?rel=0&showinfo=0&autoplay=1"
                )}
              >
                <img src={youtube} alt="instagram" width={36} height={36} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden max-sm:block relative -bottom-40">
        <SwiperTeam>
          <SwiperSlide>
            <div className="mx-auto imageContainer">
              <img
                src={Zamira}
                width={306}
                height={306}
                alt="instaOne"
                className="rounded-2xl"
              />
              <div>
                <button
                  className="hidden text-white font-semibold absolute z-10"
                  style={{
                    top: "45%",
                    right: "45%",
                  }}
                  onClick={handleOpen(
                    "https://youtube.com/embed/8hgvsfU7tsc?rel=0&showinfo=0&autoplay=1"
                  )}
                >
                  <img src={youtube} alt="instagram" width={36} height={36} />
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mx-auto imageContainer">
              <img
                src={Malika}
                width={306}
                height={306}
                alt="instaTwo"
                className="rounded-2xl"
              />
              <div>
                <button
                  className="hidden text-white font-semibold absolute z-10"
                  style={{
                    top: "45%",
                    right: "45%",
                  }}
                  onClick={handleOpen(
                    "https://youtube.com/embed/2aQ5GM1n9Qk?rel=0&showinfo=0&autoplay=1"
                  )}
                >
                  <img src={youtube} alt="instagram" width={36} height={36} />
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mx-auto imageContainer">
              <img
                src={Iroda}
                width={306}
                height={306}
                alt="instaThree"
                className="rounded-2xl"
              />
              <div>
                <button
                  className="hidden text-white font-semibold absolute z-10"
                  style={{
                    top: "45%",
                    right: "45%",
                  }}
                  onClick={handleOpen(
                    "https://www.youtube.com/embed/GinnkDF7w1A?rel=0&showinfo=0&autoplay=1"
                  )}
                >
                  <img src={youtube} alt="instagram" width={36} height={36} />
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mx-auto imageContainer">
              <img
                src={Sumbula}
                width={306}
                height={306}
                alt="instaFour"
                className="rounded-2xl"
              />
              <div>
                <button
                  className="hidden text-white font-semibold absolute z-10"
                  style={{
                    top: "45%",
                    right: "45%",
                  }}
                  onClick={handleOpen(
                    "https://youtube.com/embed/UpciodTd59I?rel=0&showinfo=0&autoplay=1"
                  )}
                >
                  <img src={youtube} alt="instagram" width={36} height={36} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        </SwiperTeam>
      </div>
      <VideoModal
        video={modal.link}
        isVisible={modal.open}
        onClose={() => setModal(defaultValues)}
      />
    </>
  );
};

export default YoutubeModal;

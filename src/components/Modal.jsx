export default function VideoModal({ isVisible, onClose, video }) {
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  if (!isVisible) return null;

  return (
    <div
      className="w-full h-full fixed z-50 bg-black bg-opacity-50 top-0 left-0 flex flex-col justify-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="flex flex-col justify-center items-center  w-3/5 h-[500px] m-auto rounded-[20px] relative max-sm:m-auto max-sm:w-[95%] max-sm:h-[300px]">
        <button
          className="flex fixed top-8 right-5 bg-white rounded-full w-10 items-center aspect-square justify-center font-semibold text-2xl hover:bg-black hover:text-white"
          onClick={() => onClose()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <iframe
          src={video}
          width="100%"
          height="100%"
          allowFullScreen
          allow="autoplay"
          className="rounded-3xl"
        ></iframe>
      </div>
    </div>
  );
}

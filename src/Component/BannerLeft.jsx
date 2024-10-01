import woman from "../assets/caricari.jpg";
const BannerLeft = () => {
  return (
    <div className="flex justify-center">
      <img src={woman} alt="woman" className="w-full max-w-screen-lg h-auto" />
    </div>
  );
};

export default BannerLeft;

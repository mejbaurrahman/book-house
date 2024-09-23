import bannerPhoto from "../../assets/images/banner2.png";
export default function Banner() {
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerPhoto}
          className="lg:w-1/2 md:w-1/2 w-4/5 rounded-lg shadow-2xl"
        />
        <div className="lg:p-2 md:p-2 p-5">
          <h1 className="text-5xl font-bold">Unlock a World of Stories</h1>
          <p className="py-6">
            Find Your Next Favorite Book at{" "}
            <span className="text-3xl  font-extralight">Boi Ghor</span>
          </p>
          <button className="btn btn-ghost btn-outline">Buy Book</button>
        </div>
      </div>
    </div>
  );
}

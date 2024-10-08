import owner from "../../assets/images/owner.jpg";
const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-12 ">
        <div className="w-40 h-52">
          <img
            src={owner} // Replace with your image link
            alt="Owner"
            className="rounded-full w-full h-full shadow-xl"
          />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mt-4">John Doe</h2>{" "}
        <h2 className="text-xl font-bold text-gray-600">Owner</h2>{" "}
        {/* Replace with your name */}
        <p className="text-center text-gray-600 mt-2 max-w-md">
          I am the proud owner of Boi Ghor, a platform dedicated to bringing the
          best literature and books to avid readers. With a passion for books
          and technology, I created this site to help people find their next
          great read.
        </p>
      </div>
    </div>
  );
};

export default About;

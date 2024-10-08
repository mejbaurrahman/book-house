/* eslint-disable react/prop-types */
export default function SectionHeading({ heading }) {
  return (
    <div className="flex justify-center items-center my-7">
      <h1 className="uppercase font-light text-black text-5xl">{heading}</h1>
    </div>
  );
}

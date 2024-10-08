export default function HowItWorks() {
  return (
    <section className=" py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-black text-white rounded-full mx-auto flex items-center justify-center text-2xl font-bold">
                1
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              Browse Books
            </h3>
            <p className="text-gray-600 mt-2 text-center">
              Explore our extensive collection of books using the Book Available
              section. Showed by genre, author, title and rating.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-black text-white rounded-full mx-auto flex items-center justify-center text-2xl font-bold">
                2
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              View Details
            </h3>
            <p className="text-gray-600 mt-2 text-center">
              Click on Book Details to get more information about your chosen
              book, including price and description.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-black text-white rounded-full mx-auto flex items-center justify-center text-2xl font-bold">
                3
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              Add to Cart
            </h3>
            <p className="text-gray-600 mt-2 text-center">
              Add your favorite books to the cart and proceed to checkout or
              save them for later in the wish list.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

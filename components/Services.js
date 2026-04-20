export default function Services() {
  return (
    <section  className="py-20 px-6 max-w-7xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Take A Look At <span className="text-red-500">Services</span>
      </h2>

      <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-14">

        {[1,2,3].map((i) => (
          <div key={i} className="text-center">
            <img
              src="https://images.unsplash.com/photo-1581090700227-4c4f50b9f24c"
              className="rounded-xl w-full h-60 object-cover"
            />

            <h3 className="mt-5 text-lg font-semibold">Professional</h3>

            <p className="text-gray-400 text-sm mt-2">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
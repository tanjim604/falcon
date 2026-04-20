export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get To Know <span className="text-red-500">Who We Are ?</span>
      </h2>

      <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="grid md:grid-cols-2 gap-12 mt-14 items-center">

        <div>
          <p className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            We provide high-quality security services.
          </p>

          <button className="mt-6 bg-red-600 px-6 py-3 rounded-full hover:bg-red-500 transition">
            Get In Touch
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
          className="rounded-2xl w-full object-cover"
        />

      </div>
    </section>
  );
}
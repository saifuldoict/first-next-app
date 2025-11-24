const testimonials = [
  {
    name: "Jane Doe",
    role: "Product Manager",
    message: "This product has transformed the way our team works. Highly recommended!",
    avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "John Smith",
    role: "Developer",
    message: "Exceptional service and support. The team really cares about their customers.",
    avatar: "data:image/jpeg;base64,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",
  },
  {
    name: "Alice Johnson",
    role: "Designer",
    message: "A beautifully designed product that's simple and intuitive to use.",
    avatar: "https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Real feedback from people who have experienced our product.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <p className="text-gray-700 mb-4">&quot;{testimonial.message}&quot;</p>
            <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

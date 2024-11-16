import { useEffect } from "react";
import AOS from "aos"; // AOS kutubxonasini import qilamiz
import "aos/dist/aos.css"; // AOS stilini import qilamiz
import { Button, Carousel } from "@material-tailwind/react";

const testimonials = [
  {
    name: "Lisa Clairton",
    location: "New York, USA",
    feedback: "We selected Interno interior because of rigorous design background & education.",
    img: "/IMAGE(3).png",
  },
  {
    name: "David Knight",
    location: "Sydney, Australia",
    feedback: "The team exceeded our expectations and emerged as leaders of our project's.",
    img: "/IMAGE(4).png",
  },
  {
    name: "Lisa Clairton",
    location: "Paris, France",
    feedback: "They balanced the architectural vision and the project realities beautifully.",
    img: "/IMAGE(5).png",
  },
];

const projects = [
  {
    title: "Winery Dry Creek Building",
    category: "Art Modern",
    img: "/jj.png",
  },
  {
    title: "Creative Workplace Design",
    category: "Minimalist",
    img: "/ll.png",
  },
  {
    title: "Bedroom Interior Pot Work",
    category: "Art Modern",
    img: "/yy.png",
  },
  {
    title: "Light Ambience Sepia Design",
    category: "Minimalist",
    img: "/IMAGE(15).png",
  },
];

export default function Box() {
  useEffect(() => {
    // Initialize AOS (animate on scroll)
    AOS.init();
  }, []);

  return (
    <div>
      <div
        data-aos="fade-right"
        className="flex justify-evenly items-center -mb-16"
      >
        <div className="yoz" data-aos="fade-up">
          <h1 className="font-normal text-5xl mb-9">We Tackle The Most Challenging Designs</h1>
          <p className="font-normal text-2xl">
            The world needs innovators and problem solvers who turn challenges into greater opportunities. We have
          </p>
        </div>
        <img src="/gg1.png" alt="" data-aos="zoom-in" />
      </div>

      <div className="card">
        <div className="bg-gray-50 py-16 px-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What the People Thinks About Interno
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
                data-aos="flip-left"
              >
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-4"
                  data-aos="fade-up"
                />
                <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
                <p className="text-gray-600 mt-4">{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="raismlar mb-56" data-aos="fade-up">
        <div className="flex justify-center items-center gap-4">
          <img src="/u.png" alt="Rasm 1" className="w-32 h-32 object-contain border rounded-lg" data-aos="zoom-in" />
          <img src="/v.png" alt="Rasm 2" className="w-32 h-32 object-contain border rounded-lg" data-aos="zoom-in" />
          <img src="/b.png" alt="Rasm 3" className="w-32 h-32 object-contain border rounded-lg" data-aos="zoom-in" />
          <img src="/n.png" alt="Rasm 4" className="w-32 h-32 object-contain border rounded-lg" data-aos="zoom-in" />
        </div>
      </div>

      <div className="py-16 px-6 bg-gray-50" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Recent Projects
        </h2>
        <p className="text-center text-gray-500 mb-12">
          With tools to make every part of your process more human and a support team excited to help you, getting started with us has never been easier.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden relative group"
              data-aos="flip-right"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover"
                data-aos="fade-up"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-500">{project.category}</p>
              </div>
              <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md group-hover:bg-gray-200">
                <span className="text-gray-800">➔</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

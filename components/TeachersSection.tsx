import TeachersCarousel from "./TeachersCarousel";

const teachers = [
  {
    name: "Mrs. Jel Ann May Rule",
    grade: "Kindergarten",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/blank_picture.png",
  },
  {
    name: "Ms. Jonalyn Ebrado Granza",
    grade: "1st Grade",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/blank_picture.png",
  },
  {
    name: "Ms. Chesa Rabaya",
    grade: "2nd Grade",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/blank_picture.png",
  },
  {
    name: "Ms. Gezamaris Tanghal",
    grade: "4rd Grade",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/blank_picture.png",
  },

  {
    name: "Ms. Jaenevie Otos",
    grade: "5rd Grade",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/blank_picture.png",
  },
  {
    name: "Ms. Gladys Bebis Arienza",
    grade: "6rd Grade",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/blank_picture.png",
  },
];

const TeachersSection = () => {
  return (
    <section
      id="teachers"
      className="py-24 bg-gradient-to-tl from-pink-50 to-red-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-blue-600 sm:text-5xl">
          Meet Our Teachers
        </h2>
        <TeachersCarousel teachers={teachers} />
      </div>
    </section>
  );
};

export default TeachersSection;

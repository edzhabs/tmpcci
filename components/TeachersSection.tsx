import TeachersCarousel from './TeachersCarousel'

const teachers = [
  { name: "Ms. Johnson", grade: "Kindergarten", info: "Specializes in early childhood education with 10 years of experience.", image: "/placeholder.svg?height=300&width=300&text=Ms.+Johnson" },
  { name: "Mr. Smith", grade: "1st Grade", info: "Passionate about fostering a love for reading and writing in young minds.", image: "/placeholder.svg?height=300&width=300&text=Mr.+Smith" },
  { name: "Mrs. Davis", grade: "2nd Grade", info: "Experienced in teaching STEM subjects to elementary students.", image: "/placeholder.svg?height=300&width=300&text=Mrs.+Davis" },
  { name: "Mr. Wilson", grade: "3rd Grade", info: "Focuses on interactive and project-based learning approaches.", image: "/placeholder.svg?height=300&width=300&text=Mr.+Wilson" },
]

const TeachersSection = () => {
  return (
    <section id="teachers" className="py-24 bg-gradient-to-tl from-pink-50 to-red-50">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-blue-600 sm:text-5xl">Meet Our Teachers</h2>
        <TeachersCarousel teachers={teachers} />
      </div>
    </section>
  )
}

export default TeachersSection


import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  rails,
  redux,
  upwork,
  dataScience,
  dotnet,
  nftText,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Ruby on Rails",
    icon: rails,
  },
  {
    name: "Data Science",
    icon: dataScience,
  },
  {
    name: "ASP.NET / VB.NET",
    icon: dotnet,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "NFT Text Inc.",
    icon: nftText,
    iconBg: "#383E56",
    date: "Aug 2021 - Jan 2024",
    points: [
      "Developing and maintaining web applications using React.js, Node.js, Rails, Django/Flask and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Vincit",
    icon: 'https://www.vincit.com/hubfs/vincit-hubspot-theme-2023/Logo-Vincit.svg',
    iconBg: "#E6DEDD",
    date: "Sep 2018 - Aug 2021",
    points: [
      "Contributed to an Agile development environment, utilizing the Rails framework and React.js for full stack development to deliver multiple features.",
      "Utilized Ruby on Rails as the backend technology and HTML, JavaScript, and jQuery for the frontend in a Shopify project.",
      "Successfully upgraded a project's .NET version from 6 to 8, ensuring compatibility and improved performance.",
      "Upgraded React/ASP.NET on Rails based on well-researched quality information platform to the latest version, improve user experience and code quality.",
      "Used GitHub as version control system for check-in and check-out along with Amazon Web Services (AWS) for improved efficiency of storage and fast access."
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Devsinc",
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAq1BMVEX///8WvLILOlTt+fgAurFfy8UIuq8AuawAt60At6///v8WvLEAN1ILOlOn4dwAMU4AKETO7uv2/PvO19mtucClsrrBys/k6euaqrEhRV8AKUlkd4by9vc/XXIAHUI+XG0qTWMAJUd+jZi8xMtWbn5zg48SQFgAL1DV3uCElJ8cQ1mKnKRgdoVpzsd608yQ2NG45uLj9vQ+w7rX8e9KxLyF18+Y2taw4uDC6ebVaRfXAAADxklEQVR4nO3cbXOaQBiFYVfWZSmoMa+tMW1N0zR9MRo00f//ywrWdMxUE4XjPA/0XB86zbe9B9gVWG00iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiISKfByenZ+YX0KA7o/Yf+0VE/uaxr4+CqnzRz3Y/n0mM5jKtuc6XdP5EezCGc9dvPhc3k0zvp4eAdf07+Bjbbwxqep3dHzTXda+nx4H15UZjcSI8Hr/6FJy/P0q/S48Eb3K7NNM3+qfR4DuC6u7Za3A6kh3MAg2/Jc2J7eCY9moO4667O02T4XXosB3JxM+wmSbf/o55HcOnk5+Wv61PN12DQet3oftyZ9ALpYZYQuDeELorCKJ49zh+OpQdbSGDNbpz36f2kggdz58JM7CIzWjQa1bpP2qcwj7TedKp1tu5ZuDyQcaUa9y7MI306kR737ooUGmN960F65LsqVphfj3Ppoe+oYGHGj4JKzKrFC40zlThTSxQa5xbSw99BmUJjwwpcjKUKs3WjIx3wpnKF2XyjfmUsWxh57ddi2cLsYpzqXjQAhUbzHT6i0NiWdMSrAIXKJ1RAoYlVf7hBFBqn+TyFFJpI8ZKBKbRGumM7TKGJ9E42oEKXSodsBSo0em/5UYVmJl2yDazQ96RTtoAVunvplC1ghcYpfaeBK4yU3gvjCu1IumUzXKGJpFs2wxXGSmdT4DEMn6RjNgIWKl30gYWxUbleII+hnUrXbIIs1Pl0GFkYjaVrNoGepSo/mkILVU6myEKXatyjgSyMTe0LrcYFEVqo8hYRWWhqfwz/g0KVH0xZuI/6rxam9iu+ztfd0E9tKp+2QQsfpWs2gRaqfIkIvcdX+TgROpeq3JKBLNT5HhhYqHMqhT7z1vmiG1joVV6GyLdrSvfUAAtVrvfIQp2rIbIwVbpVGLcXQ+fbQ2ShzpkUV6h1nwKuMFI6z+D2Jqq8vV9C7S9V+fp3CVOodlNbA1SodI/CH5BCnS/wVxCFiqeZBugbJYrPUUih6nMUUBh7pXdNz8oWxjof5a8pW2hVvo1ZV/Kbztao/9mBcoVO81K/UqYwdqn+wFKFvqX9GswVL7Re5VbEfxQudEbxtyrXFSyMwlEVztBcoV9RMj6tyAFsFCt0YZV+Cmv/wjB6qlDf3oXOz6p0/HJ7FFrrzaPeJ07bvFkYx3mcy382cdyr2OFbCnzovQ//cNl/vI+yv7N/QmvdMj9NZ6NxZ1GBD2gbHc/n886a7M/5ZLJY9DLT6fQhCKp43IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiOrnN6bKQAEXRZKIAAAAAElFTkSuQmCC',
    iconBg: "#383E56",
    date: "May 2016 - Aug 2018",
    points: [
      "Worked on several aspects of the application to improve code quality and coverage improvement and security updates",
      "Collaborated with product and engineering team members to define and develop new product concepts, leveraging expertise in Ruby on Rails and associated technologies.",
      "Developed automated scripts in Ruby and JavaScript, C#, Ruby for scheduled tasks, enhancing efficiency and reliability.",
      "Worked on the authentication module using the ASP.NET, Rails, NodeJS, Django/Flask framework and refactored C# code to improve the performance of the existing application.",
    ],
  },
  {
    title: "Full Stack Freelancer",
    company_name: "Upwork & Fiverr",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "Jan 2013 - 2016",
    points: [
      "Developing and maintaining web applications using React.js, node.js, python and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Abid proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Abid does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Abid optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NFT Text Inc.",
    description: "At NewText, we push the boundaries of innovation, offering cutting-edge solutions to our valued clients. Our diverse backgrounds and collective knowledge empower us to revolutionize the industry and stay ahead of the curve. Our shared passion for excellence drives us to continually seek new heights..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Rails",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nftText,
    source_code_link: "https://newtextco.com/",
  },
  {
    name: "Vincit",
    description: "Its a service based company that help the customers to develop sustainable business solutions. They make digital solutions accessible and ensure data privacy and security. They aim to integrate sustainability into all the customer work they do – and develop tools and expertise around sustainability.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Rails",
        color: "green-text-gradient",
      },
      {
        name: ".NET",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
      {
        name: "Ant Design",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://www.vincit.com/hubfs/Share-image.png#keepProtocol',
    source_code_link: "https://www.vincit.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Rails",
        color: "blue-text-gradient",
      },
      {
        name: "Rspec",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "ASP.NET",
        color: "blue-text-gradient",
      },
      {
        name: "VB.NET",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

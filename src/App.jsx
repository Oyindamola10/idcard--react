import IdCard from "./components/IdCard";

const App = () => {
  const workers = [
    {
      fname: "Profsain Hussaini",
      position: "Full-stack Web Developer",
      image: "https://media.istockphoto.com/id/1344323528/photo/shot-of-a-young-businessman-working-on-a-computer-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=tW9U9LFTqazi_SeOoywvvhYJNyENr9nIEZqtin2LoNk=",
      phoneNo: +23461234157,
      email : "profsain@gmil.com",
      location: "Houston"

    },
    {
      fname: "Purity John",
      position: "Digit Marketer",
      image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      phoneNo: +23461234157,
      email : "purity@gmail.com",
      location: "Houston"
    },
    {
      fname: "Glory Moses",
      job: "Software Engineer",
      image:"https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=",
      phoneNo: +23461234157,
      email : "glory@gmail.com",
      location: "Houston"
      
    },
    {
      fname: "John Doe",
      position: "Full-stack Web Developer",
      image:"https://sb.kaleidousercontent.com/67418/1672x1018/6463a5af0d/screenshot-2022-05-24-at-15-22-28.png",
      phoneNo: +23461234157,
      email : "johndoe@gmail.com",
      location: "Houston"
    },
    {
      fname: "Babatunde Yusuf",
      position: "Product Designer",
      image:"https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.webp?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=",
      phoneNo: +23461234157,
      email :"yusuf@faGlassMartiniAlt.com",
      location: "Houston"
    },
    {
      fname: "Oyindamola Oyekunle",
      position: "Frontend Developer",
      image:"https://media.istockphoto.com/id/1311634222/photo/portrait-of-successful-black-male-modern-day-student-holding-smartphone.jpg?s=170667a&w=0&k=20&c=0rIGeDke8eBNyAZVrov837vH412Le4aXvLXk3UX9C84=",
      phoneNo: +23461234157,
      email : "oyindamola@gmail.com",
      location: "Houston"
    },
  ];

  return (
    <>
      <h1>Awesome React.js</h1>
      <div>
          {workers.map(({fname,image, position,location,phoneNo,email}, index) =>(
            <IdCard
            key={index}
            name={fname}
            position={position}
            image={image}
            email = {email}
            phoneNo={phoneNo}
            location={location}
            />
          ))}
          
           
          
      </div>
    </>
  );
}

export default App
import robotImg from '../assets/courses/robotics.png';
import iotImg from '../assets/courses/future.png';
import electronicsImg from '../assets/courses/electronics.png';
import motorImg from '../assets/electronics/elec_electromechanical_1766757831431.png';

export const workshopsData = [
    {
        id: 1,
        title: "Robo-Soccer Championship",
        date: "March 15-16, 2026",
        location: "City Convention Center",
        image: robotImg,
        category: "Competition",
        desc: "Build your own striker and goalie robots and compete in the ultimate hardware league.",
        highlights: ["Chassis Design", "Motor Driver Logic", "Wireless Control", "Tournament Entry"]
    },
    {
        id: 2,
        title: "IoT & Smart Cities",
        date: "April 05, 2026",
        location: "Tech Hub Auditorium",
        image: iotImg,
        category: "Bootcamp",
        desc: "A hands-on deep dive into connecting devices to the cloud and building automated systems.",
        highlights: ["ESP32 Wi-Fi", "Blynk App", "Cloud Dashboards", "Home Automation"]
    },
    {
        id: 3,
        title: "Drone Assembly Field Day",
        date: "May 20, 2026",
        location: "University Sports Ground",
        image: motorImg,
        category: "Outdoor",
        desc: "Learn flight dynamics, assemble a quadcopter frame, and master piloting skills in one day.",
        highlights: ["Aerodynamics", "Flight Controllers", "Propellor Balancing", "Safe Flying"]
    },
    {
        id: 4,
        title: "STEM for Educators",
        date: "June 10, 2026",
        location: "CircuitCrate HQ",
        image: electronicsImg,
        category: "Training",
        desc: "Empowering teachers with the tools and curriculum to bring robotics into the classroom.",
        highlights: ["Curriculum Planning", "Kit Management", "Debugging Basics", "Student Engagement"]
    }
];

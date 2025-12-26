import electronicsImg from '../assets/courses/electronics.png';
import roboticsImg from '../assets/courses/robotics.png';
import programmingImg from '../assets/courses/programming.png';
import futureImg from '../assets/courses/future.png';

export const coursesData = [
    // Beginner
    {
        id: 1,
        title: "Foundations of Electronics",
        category: "Beginner",
        image: electronicsImg,
        level: 1,
        lessons: 10,
        desc: "Voltages, Currents, and basic components explained simply.",
        color: "#38bdf8",
        syllabus: [
            "What is Electricity?",
            "Resistors & Ohm's Law",
            "Capacitors & Storage",
            "Diodes & LEDs",
            "Transistors as Switches",
            "Building your first circuit"
        ],
        outcomes: ["Understand circuitry basics", "Read schematic diagrams", "Use a Multimeter"]
    },
    {
        id: 2,
        title: "Arduino Masterclass",
        category: "Beginner",
        image: programmingImg,
        level: 1,
        lessons: 15,
        desc: "From blinking LEDs to writing complex C++ logic.",
        color: "#ff0055",
        syllabus: [
            "Installing Arduino IDE",
            "Digital Output (Blink)",
            "Digital Input (Buttons)",
            "Analog Signals (Potentiometers)",
            "PWM & Fading",
            "Serial Communication"
        ],
        outcomes: ["Code in C++", "Control hardware with software", "Debug code errors"]
    },
    {
        id: 3,
        title: "Soldering Skills 101",
        category: "Beginner",
        image: electronicsImg,
        level: 1,
        lessons: 5,
        desc: "Learn to solder wires and THT components safely.",
        color: "#fbbf24",
        syllabus: [
            "Safety First",
            "Tinning the Tip",
            "Through-Hole Soldering",
            "Wire splicing",
            "Desoldering basics"
        ],
        outcomes: ["Solder safely", "Repair broken electronics", "Create permanent circuits"]
    },
    {
        id: 4,
        title: "Sensors & Data",
        category: "Beginner",
        image: electronicsImg,
        level: 1,
        lessons: 8,
        desc: "Read real-world data like Temp, Light, and Distance.",
        color: "#a855f7",
        syllabus: [
            "Types of Sensors (Analog vs Digital)",
            "LDRs & Thermistors",
            "Ultrasonic Distance",
            "PIR Motion Sensors",
            "Calibrating data"
        ],
        outcomes: ["Interface widely used sensors", "Process sensor data", "Build alarm systems"]
    },
    {
        id: 5,
        title: "3D Printing Basics",
        category: "Beginner",
        image: roboticsImg,
        level: 1,
        lessons: 12,
        desc: "Design and print your first custom robot parts.",
        color: "#22c55e",
        syllabus: [
            "How 3D Printers work",
            "Slicing Software (Cura)",
            "Bed Leveling",
            "Printing your first model",
            "Troubleshooting prints"
        ],
        outcomes: ["Operate a 3D printer", "Design basic parts", "Maintain the machine"]
    },
    {
        id: 6,
        title: "Python for Hardware",
        category: "Beginner",
        image: programmingImg,
        level: 1,
        lessons: 10,
        desc: "Control hardware using MicroPython on Raspberry Pi Pico.",
        color: "#38bdf8",
        syllabus: [
            "Intro to MicroPython/CircuitPython",
            "Variables & Loops",
            "Controlling GPIO",
            "Reading Sensors",
            "Libraries & Modules"
        ],
        outcomes: ["Code in Python", "Use Raspberry Pi Pico", "Rapid prototyping"]
    },

    // Intermediate
    {
        id: 7,
        title: "Robotics: Level 1",
        category: "Intermediate",
        image: roboticsImg,
        level: 2,
        lessons: 20,
        desc: "Build a chassis-based mobile robot with motor drivers.",
        color: "#ffaa00",
        syllabus: [
            "Chassis assembly",
            "DC Motors & Gearboxes",
            "L298N Motor Driver",
            "Power Management",
            "Basic Movement Code"
        ],
        outcomes: ["Build a moving robot", "Understand motor drivers", "Manage battery power"]
    },
    {
        id: 8,
        title: "ESP32 IoT Explorer",
        category: "Intermediate",
        image: futureImg,
        level: 2,
        lessons: 18,
        desc: "Connect your projects to the Wi-Fi and Cloud.",
        color: "#06b6d4",
        syllabus: [
            "Wi-Fi Connection",
            "Web Servers on ESP32",
            "HTTP Requests",
            "MQTT Protocol",
            "Cloud Dashboards (Blynk)"
        ],
        outcomes: ["Create IoT devices", "Control from anywhere", "Visualize data online"]
    },
    {
        id: 9,
        title: "Home Automation",
        category: "Intermediate",
        image: futureImg,
        level: 2,
        lessons: 14,
        desc: "Control home appliances with relays and phone apps.",
        color: "#f472b6",
        syllabus: [
            "Relay Modules Safety",
            "AC vs DC switching",
            "Voice Control integration",
            "Scheduling & Timers",
            "Smart Plugs"
        ],
        outcomes: ["Automate your room", "Work safely with Relays", "Integrate Voice Assistants"]
    },
    {
        id: 10,
        title: "PCB Design (KiCad)",
        category: "Intermediate",
        image: electronicsImg,
        level: 2,
        lessons: 25,
        desc: "Design professional Printed Circuit Boards from scratch.",
        color: "#a855f7",
        syllabus: [
            "Schematic Capture",
            "Footprints & Associations",
            "PCB Layout & Routing",
            "Design Rules Check (DRC)",
            "Generating Gerber Files"
        ],
        outcomes: ["Design custom PCBs", "Order from manufacturers", "Professional documentation"]
    },
    {
        id: 11,
        title: "Wireless Comms",
        category: "Intermediate",
        image: futureImg,
        level: 2,
        lessons: 10,
        desc: "Master Bluetooth, RF 433MHz, and LoRa modules.",
        color: "#6366f1",
        syllabus: [
            "Serial Bluetooth (HC-05)",
            "RF 433MHz Transmitters",
            "NRF24L01 Modules",
            "LoRa Basics",
            "Antenna selection"
        ],
        outcomes: ["Wireless communication", "Remote control systems", "Long-range data"]
    },
    {
        id: 12,
        title: "Wearable Tech",
        category: "Intermediate",
        image: electronicsImg,
        level: 2,
        lessons: 8,
        desc: "Build glowing fashion and health-tracking wearables.",
        color: "#ec4899",
        syllabus: [
            "Sewable Electronics",
            "Conductive Thread",
            "NeoPixel Arrays",
            "Pulse Sensors",
            "Battery safety for wearables"
        ],
        outcomes: ["Create smart clothing", "Integrate LEDs", "Build health monitors"]
    },
    {
        id: 13,
        title: "Retro Game Console",
        category: "Intermediate",
        image: programmingImg,
        level: 2,
        lessons: 16,
        desc: "Build and code your own handheld gaming device.",
        color: "#8b5cf6",
        syllabus: [
            "OLED Displays",
            "Button Matrices",
            "Game Loop Logic",
            "Sprite Animation",
            "Sound generation"
        ],
        outcomes: ["Game development basics", "Hardware integration", "Interactive UI"]
    },

    // Advanced
    {
        id: 14,
        title: "Robotics: Level 2",
        category: "Advanced",
        image: roboticsImg,
        level: 3,
        lessons: 22,
        desc: "Advanced Kinematics, PID Control, and robot arms.",
        color: "#ef4444",
        syllabus: [
            "Inverse Kinematics",
            "PID Control Theory",
            "Servo coordination",
            "Path planning",
            "Obstacle avoidance algorithms"
        ],
        outcomes: ["Build complex robots", "Implement control theory", "Autonomous navigation"]
    },
    {
        id: 15,
        title: "AI on Edge (TinyML)",
        category: "Advanced",
        image: futureImg,
        level: 3,
        lessons: 15,
        desc: "Run Machine Learning models on microcontrollers.",
        color: "#10b981",
        syllabus: [
            "What is TinyML?",
            "Collecting Data sets",
            "Training Models (Edge Impulse)",
            "Deploying to Arduino/ESP32",
            "Voice Keyword Spotting"
        ],
        outcomes: ["Deploy AI models", "Voice recognition", "Gesture recognition"]
    },
    {
        id: 16,
        title: "Drone Basics",
        category: "Advanced",
        image: roboticsImg,
        level: 3,
        lessons: 20,
        desc: "Flight controllers, ESCs, and building a Quadcopter.",
        color: "#f59e0b",
        syllabus: [
            "Aerodynamics basics",
            "Flight Controllers (Betaflight)",
            "BLDC Motors & ESCs",
            "Frame assembly",
            "First flight safety"
        ],
        outcomes: ["Build a drone", "Configure flight software", "Fly safely"]
    },
    {
        id: 17,
        title: "Smart Agriculture",
        category: "Advanced",
        image: futureImg,
        level: 3,
        lessons: 12,
        desc: "Automated irrigation and soil health monitoring systems.",
        color: "#84cc16",
        syllabus: [
            "Soil Moisture Sensors",
            "Water Pumps & Relays",
            "Solar charging for field units",
            "Data logging to SD card",
            "Crop health analysis"
        ],
        outcomes: ["Build AgTech solutions", "Solar power implementation", "Environmental monitoring"]
    },
    {
        id: 18,
        title: "Product Prototyping",
        category: "Advanced",
        image: roboticsImg,
        level: 3,
        lessons: 10,
        desc: "From idea to MVP: Enclosures, UX, and production.",
        color: "#64748b",
        syllabus: [
            "Design Thinking",
            "CAD for Enclosures",
            "UX/UI for physical products",
            "Sourcing components",
            "Documentation"
        ],
        outcomes: ["Create market-ready prototypes", "Design enclosures", "Plan functionality"]
    },
    {
        id: 19,
        title: "Solar Power Projects",
        category: "Advanced",
        image: electronicsImg,
        level: 3,
        lessons: 8,
        desc: "Energy harvesting and off-grid power management.",
        color: "#eab308",
        syllabus: [
            "Solar Panel specifications",
            "Charge Controllers (MPPT vs PWM)",
            "Battery Chemistry (Li-Ion vs Lead Acid)",
            "Load balancing",
            "Safety Circuits"
        ],
        outcomes: ["Build off-grid systems", "Manage renewable energy", "Battery safety"]
    },
    {
        id: 20,
        title: "FPGA Introduction",
        category: "Advanced",
        image: programmingImg,
        level: 3,
        lessons: 14,
        desc: "Design digital hardware circuits using Verilog.",
        color: "#f43f5e",
        syllabus: [
            "What is an FPGA?",
            "Verilog basics",
            "Logic Gates in Hardware",
            "Clock dividers",
            "State Machines"
        ],
        outcomes: ["Design digital logic", "Understand hardware description", "High-speed processing"]
    }
];

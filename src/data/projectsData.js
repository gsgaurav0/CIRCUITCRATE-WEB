import basicsImg from '../assets/projects/basics.png';
import componentsImg from '../assets/projects/components.png';
import codeImg from '../assets/projects/code.png';
// Using placeholders for now, will update when generated
const hardwareImg = basicsImg;
const advancedImg = componentsImg;

export const projectsData = [
    // 1. Start from Basics
    {
        id: "led-logic",
        category: "Start from Basics",
        title: "LED Circuit Logic",
        image: basicsImg,
        difficulty: "Beginner",
        time: "15 mins",
        desc: "Master voltage and current by building basic light circuits.",
        tools: ["9V Battery", "LEDs (Red/Blue)", "330Ω Resistors", "Breadboard", "Jumper Wires"],
        steps: [
            "Place the LED on the breadboard (Long leg is +).",
            "Connect a 330Ω resistor to the negative leg (short leg).",
            "Connect a jumper wire from the resistor to the negative rail.",
            "Connect a jumper wire from the positive leg to the positive rail.",
            "Attach the 9V battery snap to the rails. Watch it glow!"
        ]
    },
    {
        id: "series-parallel",
        category: "Start from Basics",
        title: "Series & Parallel Circuits",
        image: basicsImg,
        difficulty: "Beginner",
        time: "20 mins",
        desc: "Understand how components share or split power.",
        tools: ["9V Battery", "4 LEDs", "Resistors", "Breadboard", "Wires"],
        steps: [
            "Build a Series Circuit: Connect positive of LED 1 to negative of LED 2.",
            "Notice they are dimmer (voltage splits).",
            "Build a Parallel Circuit: Connect both LEDs positives to the same rail.",
            "Notice they remain bright (current splits).",
            "Experiment with removing one LED in each setup."
        ]
    },
    {
        id: "switch-logic",
        category: "Start from Basics",
        title: "Switch Logic Gates",
        image: basicsImg,
        difficulty: "Beginner",
        time: "30 mins",
        desc: "Build physical AND/OR gates using mechanical switches.",
        tools: ["Battery Pack", "2 Push Buttons", "LED", "Resistor", "Wires"],
        steps: [
            "AND Gate: Connect two buttons in a single line (Series). Both must be pressed to light the LED.",
            "OR Gate: Connect two buttons side-by-side (Parallel). Either one lights the LED.",
            "NOT Gate: Learn how a switch can bypass current (short logic).",
            "Test truth tables manually."
        ]
    },

    // 2. Understand Components
    {
        id: "smart-night-light",
        category: "Understand Components",
        title: "Smart Night Light",
        image: componentsImg,
        difficulty: "Intermediate",
        time: "45 mins",
        desc: "Automate lights using LDR sensors and transistors.",
        tools: ["LDR (Light Sensor)", "NPN Transistor (BC547)", "Resistors (10kΩ, 330Ω)", "LED", "Battery"],
        steps: [
            "Place the BC547 Transistor on the board.",
            "Connect the LDR to the Base pin and Positive rail.",
            "Connect a 10kΩ resistor from Base to Negative (Voltage Divider).",
            "Connect the LED to the Emitter pin.",
            "Cover the LDR with your hand—the LED turns on automatically!"
        ]
    },
    {
        id: "capacitor-fade",
        category: "Understand Components",
        title: "Capacitor Fade Effect",
        image: componentsImg,
        difficulty: "Beginner",
        time: "20 mins",
        desc: "Visualize charge and discharge cycles with LEDs.",
        tools: ["Capacitor (1000uF)", "LED", "Resistor", "Push Button", "Battery"],
        steps: [
            "Connect the capacitor in parallel with the LED.",
            "Press the button to charge the capacitor instantly.",
            "Release the button.",
            "Watch the LED slowly fade out as the capacitor discharges its stored energy.",
            "Try different capacitor sizes (100uF vs 1000uF)."
        ]
    },
    {
        id: "dc-motor-control",
        category: "Understand Components",
        title: "DC Motor Basics",
        image: componentsImg,
        difficulty: "Intermediate",
        time: "30 mins",
        desc: "Learn motor driver basics and diode protection.",
        tools: ["DC Motor", "Diode (1N4007)", "Transistor", "Button", "Battery"],
        steps: [
            "Motors generate 'kickback' voltage when stopped.",
            "Place a Diode across the motor terminals (Flyback protection).",
            "Use a Transistor as a switch to control high current.",
            "Control the motor speed by pulsing the button."
        ]
    },

    // 3. Write Simple Code
    {
        id: "arduino-blink",
        category: "Write Simple Code",
        title: "Arduino Blink",
        image: codeImg,
        difficulty: "Beginner",
        time: "15 mins",
        desc: "The 'Hello World' of hardware programming.",
        tools: ["Arduino Uno", "USB Cable", "LED (Built-in)"],
        steps: [
            "Install Arduino IDE.",
            "Write 'void setup() { pinMode(13, OUTPUT); }'.",
            "Write 'void loop() { digitalWrite(13, HIGH); delay(1000); digitalWrite(13, LOW); delay(1000); }'.",
            "Upload and watch the onboard LED blink!"
        ]
    },
    {
        id: "traffic-light",
        category: "Write Simple Code",
        title: "Traffic Light Sim",
        image: codeImg,
        difficulty: "Beginner",
        time: "40 mins",
        desc: "Program timing logic for a realistic traffic system.",
        tools: ["Arduino", "Red, Yellow, Green LEDs", "Resistors"],
        steps: [
            "Wire 3 LEDs to pins 10, 11, 12.",
            "Code the sequence: Red ON (5s) -> Red OFF, Green ON (5s).",
            "Add the Yellow transition logic.",
            "Experiment with changing delay times."
        ]
    },
    {
        id: "serial-chat",
        category: "Write Simple Code",
        title: "Serial Chat",
        image: codeImg,
        difficulty: "Intermediate",
        time: "20 mins",
        desc: "Send messages between your computer and the microcontroller.",
        tools: ["Arduino", "PC"],
        steps: [
            "Use 'Serial.begin(9600);' in setup.",
            "In loop, check 'if (Serial.available())'.",
            "Read data and print 'Hello User'.",
            "Open Serial Monitor and type commands to talk to your board."
        ]
    },

    // 4. Build Real Hardware
    {
        id: "distance-alarm",
        category: "Build Real Hardware",
        title: "Distance Alarm",
        image: hardwareImg,
        difficulty: "Intermediate",
        time: "1 hour",
        desc: "Create a security alarm using ultrasonic sensors.",
        tools: ["Arduino", "HC-SR04 Sensor", "Buzzer", "Wires"],
        steps: [
            "Connect Trig and Echo pins of HC-SR04 to Arduino.",
            "Calculate distance: Distance = (Time x Speed of Sound) / 2.",
            "If distance < 10cm, turn on the Buzzer.",
            "Test it by walking in front of the sensor."
        ]
    },
    {
        id: "digital-thermometer",
        category: "Build Real Hardware",
        title: "Digital Thermometer",
        image: hardwareImg,
        difficulty: "Intermediate",
        time: "45 mins",
        desc: "Display real-time temperature on an LCD screen.",
        tools: ["Arduino", "LM35 or DHT11 Sensor", "16x2 LCD Display"],
        steps: [
            "Wire the LCD display (VCC, GND, SDA, SCL).",
            "Read analog value from LM35 sensor.",
            "Convert voltage to Celsius: Temp = (Voltage * 100).",
            "Print 'Temp: 25C' on the LCD screen."
        ]
    },
    {
        id: "robotic-arm",
        category: "Build Real Hardware",
        title: "Servo Robotic Arm",
        image: hardwareImg,
        difficulty: "Advanced",
        time: "1.5 hours",
        desc: "Control precise movement using PWM signals.",
        tools: ["Arduino", "Servo Motor (SG90)", "Potentiometer"],
        steps: [
            "Connect Servo signal wire to PWM pin 9.",
            "Connect Potentiometer wiper to Analog A0.",
            "Map analog value (0-1023) to angle (0-180).",
            "Rotate the pot to move the arm precisely."
        ]
    },

    // 5. Improve Through Projects
    {
        id: "line-follower",
        category: "Improve Through Projects",
        title: "Line Follower Robot",
        image: advancedImg,
        difficulty: "Advanced",
        time: "3 hours",
        desc: "An autonomous robot that traces path lines.",
        tools: ["Chassis", "2 DC Motors + Wheels", "L298N Driver", "IR Sensors"],
        steps: [
            "Assemble the robot chassis.",
            "Mount IR sensors facing the ground.",
            "Logic: If Left Sensor sees Black -> Turn Left. If Right sees Black -> Turn Right.",
            "Tune the speed for smooth tracking."
        ]
    },
    {
        id: "bluetooth-car",
        category: "Improve Through Projects",
        title: "Bluetooth RC Car",
        image: advancedImg,
        difficulty: "Advanced",
        time: "2 hours",
        desc: "Drive a robot wirelessly using a smartphone app.",
        tools: ["Robot Chassis", "HC-05 Bluetooth Module", "Arduino"],
        steps: [
            "Connect HC-05 RX/TX to Arduino (use voltage divider for RX).",
            "Install a Bluetooth Terminal app on your phone.",
            "Send characters 'F', 'B', 'L', 'R' to control motors.",
            "Drive your bot remotely!"
        ]
    },
    {
        id: "iot-weather",
        category: "Improve Through Projects",
        title: "IoT Weather Station",
        image: advancedImg,
        difficulty: "Expert",
        time: "4 hours",
        desc: "Log climate data to the cloud using ESP32.",
        tools: ["ESP32 Board", "DHT11 (Temp/Humidity)", "Blynk/ThingSpeak Cloud"],
        steps: [
            "Set up ESP32 in Arduino IDE.",
            "Connect to Wi-Fi network.",
            "Read Temp/Humidity data.",
            "Send HTTP POST request to ThingSpeak API.",
            "View your live weather dashboard online."
        ]
    }
];

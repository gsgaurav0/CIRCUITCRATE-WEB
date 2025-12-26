// Import generated category images (assuming file naming convention from previous steps)
// In a real scenario, we might have specific images for each, but for 50 items, category images are efficient.

// Map filenames to imports (User will need to rename the files to match these if they vary)
// passives.png, semis.png, ics.png, sensors.png, electro.png, connectors.png, power.png, displays.png

import passivesImg from '../assets/electronics/elec_passive_components_1766757755339.png';
import semisImg from '../assets/electronics/elec_semiconductors_1766757776160.png';
import icsImg from '../assets/electronics/elec_integrated_circuits_1766757793164.png';
import sensorsImg from '../assets/electronics/elec_sensors_modules_1766757814165.png';
import electroImg from '../assets/electronics/elec_electromechanical_1766757831431.png';
import connectorsImg from '../assets/electronics/elec_connectors_cables_1766757849530.png';
import powerImg from '../assets/electronics/elec_power_sources_1766757866457.png';
import displaysImg from '../assets/electronics/elec_displays_leds_1766757883296.png';

export const electronicsData = [
    // --- PASSIVE COMPONENTS ---
    {
        id: 'resistor',
        name: 'Resistor',
        category: 'Passives',
        image: passivesImg,
        desc: 'Limits the flow of electric current in a circuit.',
        howItWorks: 'Resistors use conductive material with low conductivity (like Carbon) to resist electron flow, converting excess energy into heat. Used to protect components like LEDs.'
    },
    {
        id: 'capacitor-ceramic',
        name: 'Ceramic Capacitor',
        category: 'Passives',
        image: passivesImg,
        desc: 'Stores a small amount of electrical energy electrostatically.',
        howItWorks: 'Consists of two conductive plates separated by a ceramic insulator. Used for filtering noise (decoupling) in high-frequency circuits.'
    },
    {
        id: 'capacitor-electrolytic',
        name: 'Electrolytic Capacitor',
        category: 'Passives',
        image: passivesImg,
        desc: 'Polarized capacitor for storing larger amounts of energy.',
        howItWorks: 'Uses an electrolyte solution to achieve high capacitance. Essential for smoothing power supply outputs. Must be connected with correct polarity.'
    },
    {
        id: 'inductor',
        name: 'Inductor',
        category: 'Passives',
        image: passivesImg,
        desc: 'Stores energy in a magnetic field when current flows.',
        howItWorks: 'A coil of wire that resists changes in current. Used in filters, transformers, and buck/boost converters.'
    },
    {
        id: 'potentiometer',
        name: 'Potentiometer',
        category: 'Passives',
        image: passivesImg,
        desc: 'Variable resistor with a rotating knob.',
        howItWorks: 'A wiper moves along a resistive track, changing the resistance between the center pin and the ends. Used for volume knobs or sensor inputs.'
    },
    {
        id: 'thermistor',
        name: 'Thermistor (NTC)',
        category: 'Passives',
        image: passivesImg,
        desc: 'Resistor that changes resistance with temperature.',
        howItWorks: 'Negative Temperature Coefficient (NTC) means resistance drops as heat increases. Used for temperature sensing.'
    },
    {
        id: 'ldr',
        name: 'LDR (Photoresistor)',
        category: 'Passives',
        image: passivesImg,
        desc: 'Resistor that changes resistance based on light intensity.',
        howItWorks: 'Made of Cadmium Sulfide. As photons hit the surface, electrons are released, lowering resistance. Used in automatic night lights.'
    },

    // --- SEMICONDUCTORS ---
    {
        id: 'diode-rectifier',
        name: 'Rectifier Diode (1N4007)',
        category: 'Semiconductors',
        image: semisImg,
        desc: 'Allows current to flow in only one direction.',
        howItWorks: 'A P-N junction that blocks reverse current. Essential for converting AC to DC and protecting circuits from reverse polarity.'
    },
    {
        id: 'diode-zener',
        name: 'Zener Diode',
        category: 'Semiconductors',
        image: semisImg,
        desc: 'Allows current to flow backwards when a specific voltage is reached.',
        howItWorks: 'Designed to break down at a specific "Zener Voltage". Used for voltage regulation.'
    },
    {
        id: 'transistor-npn',
        name: 'NPN Transistor (BC547)',
        category: 'Semiconductors',
        image: semisImg,
        desc: 'Basic amplifier and switch.',
        howItWorks: 'A small current at the Base allows a large current to flow from Collector to Emitter. "Normal" switching logic.'
    },
    {
        id: 'transistor-pnp',
        name: 'PNP Transistor (BC557)',
        category: 'Semiconductors',
        image: semisImg,
        desc: 'Complementary to NPN, switches on low signal.',
        howItWorks: 'Current flows when the Base is pulled Low (connected to ground). Used in high-side switching.'
    },
    {
        id: 'mosfet-n',
        name: 'N-Channel MOSFET (IRFZ44N)',
        category: 'Semiconductors',
        image: semisImg,
        desc: 'High-power voltage-controlled switch.',
        howItWorks: 'Voltage at the Gate creates an electric field that allows current to flow. Very efficient for switching high loads like motors.'
    },
    {
        id: 'triac',
        name: 'TRIAC',
        category: 'Semiconductors',
        image: semisImg,
        desc: 'Switch for Alternating Current (AC).',
        howItWorks: 'Can conduct current in both directions when triggered. Used in light dimmers and motor speed controllers.'
    },

    // --- INTEGRATED CIRCUITS ---
    {
        id: 'ic-555',
        name: '555 Timer IC',
        category: 'ICs',
        image: icsImg,
        desc: 'The most famous chip, used for pulses and delays.',
        howItWorks: 'Contains comparators and a flip-flop. Can act as a one-shot timer (Monostable) or an oscillator (Astable) to blink LEDs.'
    },
    {
        id: 'opamp',
        name: 'Op-Amp (LM358)',
        category: 'ICs',
        image: icsImg,
        desc: 'Amplifies voltage differences.',
        howItWorks: 'Takes two inputs and amplifies the difference between them. Used for audio amps, math operations, and sensor signal conditioning.'
    },
    {
        id: 'logic-and',
        name: '74HC08 (AND Gate)',
        category: 'ICs',
        image: icsImg,
        desc: 'Digital logic chip.',
        howItWorks: 'Output is HIGH only if ALL inputs are HIGH.'
    },
    {
        id: 'logic-shift',
        name: '74HC595 Shift Register',
        category: 'ICs',
        image: icsImg,
        desc: 'Expands output pins.',
        howItWorks: 'Takes serial data (one bit at a time) and outputs it in parallel (8 pins at once). Great for controlling many LEDs with few wires.'
    },
    {
        id: 'motor-driver',
        name: 'L293D Motor Driver',
        category: 'ICs',
        image: icsImg,
        desc: 'Controls two DC motors forward and backward.',
        howItWorks: 'Contains H-Bridges that allow current to flow in either direction through the motors.'
    },
    {
        id: 'voltage-reg-7805',
        name: '7805 Voltage Regulator',
        category: 'ICs',
        image: icsImg,
        desc: 'Outputs a steady 5V.',
        howItWorks: 'Linear regulator that burns off excess voltage as heat to provide a stable 5V source for logic circuits.'
    },

    // --- SENSORS & MODULES ---
    {
        id: 'sensor-ultrasonic',
        name: 'HC-SR04 Ultrasonic',
        category: 'Sensors',
        image: sensorsImg,
        desc: 'Measures distance using sound waves.',
        howItWorks: 'Sends a "Ping" (Trigger) and measures how long it takes to bounce back (Echo). Distance = Time x SpeedOfSound / 2.'
    },
    {
        id: 'sensor-dht11',
        name: 'DHT11 Temp/Humid',
        category: 'Sensors',
        image: sensorsImg,
        desc: 'Digital temperature and humidity sensor.',
        howItWorks: 'Uses a capacitive humidity sensor and a thermistor to measure surrounding air.'
    },
    {
        id: 'sensor-pir',
        name: 'PIR Motion Sensor',
        category: 'Sensors',
        image: sensorsImg,
        desc: 'Detects human movement.',
        howItWorks: 'Passive Infrared sensor detects changes in heat (IR radiation) emitted by moving bodies.'
    },
    {
        id: 'sensor-ir',
        name: 'IR Proximity Sensor',
        category: 'Sensors',
        image: sensorsImg,
        desc: 'Detects objects nearby.',
        howItWorks: 'Emits IR light and checks if it reflects back. Used in line-following robots.'
    },
    {
        id: 'sensor-mpu6050',
        name: 'MPU6050 Gyro/Accel',
        category: 'Sensors',
        image: sensorsImg,
        desc: 'Measures orientation and movement.',
        howItWorks: 'Micro-Electro-Mechanical System (MEMS) inside detects gravity and rotation changes.'
    },
    {
        id: 'sensor-sound',
        name: 'Sound Sensor',
        category: 'Sensors',
        image: sensorsImg,
        desc: 'Detects noise levels.',
        howItWorks: 'A microphone converts sound waves into voltage, which is amplified and read by the microcontroller.'
    },

    // --- ELECTROMECHANICAL ---
    {
        id: 'motor-dc',
        name: 'DC Gear Motor',
        category: 'Electromechanical',
        image: electroImg,
        desc: 'Standard motor for wheels.',
        howItWorks: 'Uses magnetic fields to spin a shaft. Gears reduce speed but increase torque (pulling power).'
    },
    {
        id: 'motor-servo',
        name: 'Servo Motor (SG90)',
        category: 'Electromechanical',
        image: electroImg,
        desc: 'Rotates to a precise angle (0-180°).',
        howItWorks: 'Contains a motor, gears, and a potentiometer. Reads a PWM signal to hold a specific position.'
    },
    {
        id: 'motor-stepper',
        name: 'Stepper Motor',
        category: 'Electromechanical',
        image: electroImg,
        desc: 'Moves in precise discrete steps.',
        howItWorks: 'Has multiple internal coils energized in sequence. Used in 3D printers for high precision.'
    },
    {
        id: 'relay',
        name: 'Relay Module',
        category: 'Electromechanical',
        image: electroImg,
        desc: 'Electrically operated switch.',
        howItWorks: 'A small current creates a magnetic field that physically pulls a metal switch contact closed. Allows low voltage to control high voltage.'
    },
    {
        id: 'switch-tactile',
        name: 'Push Button (Tactile)',
        category: 'Electromechanical',
        image: electroImg,
        desc: 'Momentary switch.',
        howItWorks: 'Completes the circuit only while pressed. Default for most inputs.'
    },

    // --- CONNECTORS ---
    {
        id: 'conn-jumper-male',
        name: 'Jumper Wires (M-M)',
        category: 'Connectors',
        image: connectorsImg,
        desc: 'Standard wires for breadboards.',
        howItWorks: 'Simple conductive wires with pins to connect points on a breadboard.'
    },
    {
        id: 'conn-breadboard',
        name: 'Breadboard',
        category: 'Connectors',
        image: connectorsImg,
        desc: 'Prototyping board.',
        howItWorks: 'Has internal metal clips connecting rows. Allows building circuits without soldering.'
    },
    {
        id: 'conn-header',
        name: 'Pin Headers',
        category: 'Connectors',
        image: connectorsImg,
        desc: 'Metal pins for modules.',
        howItWorks: 'Soldered onto boards to allow jumper wires to connect easily.'
    },
    {
        id: 'conn-usb',
        name: 'USB Cable (Type-B)',
        category: 'Connectors',
        image: connectorsImg,
        desc: 'Standard Arduino cable.',
        howItWorks: 'Carries both Power (5V) and Data (Serial) to the microcontroller.'
    },
    {
        id: 'conn-screw',
        name: 'Screw Terminal',
        category: 'Connectors',
        image: connectorsImg,
        desc: 'Secure wire connection.',
        howItWorks: 'Uses a screw to clamp down on a stripped wire for a strong mechanical connection.'
    },

    // --- POWER ---
    {
        id: 'power-9v',
        name: '9V Battery',
        category: 'Power',
        image: powerImg,
        desc: 'High voltage, low capacity.',
        howItWorks: 'Standard battery for portable projects.'
    },
    {
        id: 'power-liion',
        name: '18650 Li-Ion Cell',
        category: 'Power',
        image: powerImg,
        desc: 'High capacity, rechargeable.',
        howItWorks: '3.7V nominal voltage. High energy density used in modern robots and cars.'
    },
    {
        id: 'power-solar',
        name: 'Solar Panel (6V)',
        category: 'Power',
        image: powerImg,
        desc: 'Converts light to electricity.',
        howItWorks: 'Photovoltaic cells excite electrons when hit by sunlight, creating current.'
    },
    {
        id: 'power-jack',
        name: 'DC Barrel Jack',
        category: 'Power',
        image: powerImg,
        desc: 'Power input socket.',
        howItWorks: 'Standard connector for wall adapters to plug into boards like Arduino.'
    },

    // --- DISPLAYS ---
    {
        id: 'disp-led-red',
        name: 'LED (Red)',
        category: 'Displays',
        image: displaysImg,
        desc: 'Light Emitting Diode.',
        howItWorks: 'Semiconductor light source. Polarity matters (Long leg +).'
    },
    {
        id: 'disp-rgb',
        name: 'RGB LED',
        category: 'Displays',
        image: displaysImg,
        desc: 'Red, Green, Blue in one.',
        howItWorks: 'Contains 3 separate LEDs sharing a common cathode or anode. mixing levels creates any color.'
    },
    {
        id: 'disp-lcd',
        name: '16x2 LCD Display',
        category: 'Displays',
        image: displaysImg,
        desc: 'Alphanumeric screen.',
        howItWorks: 'Liquid Crystals block or pass light to form logic characters.'
    },
    {
        id: 'disp-oled',
        name: 'OLED Display (0.96")',
        category: 'Displays',
        image: displaysImg,
        desc: 'High contrast graphic screen.',
        howItWorks: 'Organic LED: every pixel generates its own light, so black is true black.'
    },
    {
        id: 'disp-7seg',
        name: '7-Segment Display',
        category: 'Displays',
        image: displaysImg,
        desc: 'Classic number display.',
        howItWorks: '7 LEDs arranged in a figure-8 pattern to display numbers 0-9.'
    }
];

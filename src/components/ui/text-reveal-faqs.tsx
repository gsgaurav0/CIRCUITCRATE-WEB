'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";


export default function FAQs() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'What is CircuitCrate?',
      answer: 'CircuitCrate is a comprehensive online platform for learning robotics and hardware from scratch. We offer beginner-friendly courses on Arduino, sensors, microcontrollers, and help you build real-world projects that solve actual problems.',
    },
    {
      id: 'item-2',
      question: 'Which platforms does CircuitCrate support?',
      answer: 'CircuitCrate is built for web applications and works seamlessly across all devices. Our courses are accessible through any modern web browser, and we support both desktop and mobile learning experiences.',
    },
    {
      id: 'item-3',
      question: 'Can I customize my learning path?',
      answer: 'Yes! CircuitCrate offers flexible learning paths that you can customize based on your skill level and interests. You can choose from various courses, workshops, and projects that match your learning goals.',
    },
    {
      id: 'item-4',
      question: 'Does CircuitCrate provide hardware kits?',
      answer: 'Absolutely. CircuitCrate includes information about hardware components and kits needed for projects. We provide detailed component lists and recommendations to help you get started with your robotics journey.',
    },
    {
      id: 'item-5',
      question: 'Is there documentation and support available?',
      answer: 'Yes, CircuitCrate comes with comprehensive documentation, video guides, and tutorials. Additionally, our community forum and support channels are available to help you implement projects and resolve any issues.',
    },
  ];


  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
          <div className="md:col-span-2">
            <h2 className="text-white text-4xl font-semibold">FAQs</h2>
            <p className="text-gray-400 mt-4 text-balance text-lg">
              Everything you need to know about CircuitCrate
            </p>
            <p className="text-gray-400 mt-6 hidden md:block">
              Can't find what you're looking for? Reach out to our{' '}
              <Link
                to="/contact"
                className="text-cyan-400 font-medium hover:underline"
              >
                CircuitCrate support team
              </Link>{' '}
              for assistance.
            </p>
          </div>

          <div className="md:col-span-3">
            <Accordion
              type="single"
              collapsible>
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-gray-700">
                  <AccordionTrigger className="cursor-pointer text-base font-medium hover:no-underline text-white">{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <BlurredStagger text={item.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <p className="text-gray-400 mt-6 md:hidden">
            Can't find what you're looking for? Contact our{' '}
            <Link
              to="/contact"
              className="text-cyan-400 font-medium hover:underline">
              customer support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

 
export const BlurredStagger = ({
  text = "built by ruixen.com",
}: {
  text: string;
}) => {
  const headingText = text;
 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
      },
    },
  };
 
  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };
 
  return (
    <>
      <div className="w-full">
        <motion.p
          variants={container}
          initial="hidden"
          animate="show"
          className="text-base leading-relaxed break-words whitespace-normal text-gray-300"
        >
          {headingText.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterAnimation}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </>
  );
};



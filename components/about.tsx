"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">

        "Navigating IT Horizons: Java, JavaScript, MERN Stack, HTML, and CSS Enthusiast | Recent Post-Graduate with an MCA in Computer Science

        Greetings! I'm thrilled to present my portfolio, unveiling my journey as a passionate enthusiast in Java, JavaScript, MERN stack, HTML, and CSS. Armed with a post-graduate degree in Computer Science (MCA), I'm poised to merge academic excellence with hands-on skills in a professional IT landscape.

        My coding voyage commenced during my MCA, igniting a fascination for crafting captivating web applications. Fluent in Java and JavaScript, coupled with proficiency in HTML and CSS, I possess a well-rounded skill set to architect end-to-end solutions, seamlessly blending aesthetics with functionality. This portfolio serves as a testament to my adaptability, creative problem-solving, and collaborative ethos.

        Join me as I fuse my post-graduate proficiency with coding finesse, sculpting real-world applications that push the boundaries of innovation. Let's embark on this exhilarating adventure and shape the digital landscape together."





        {/* After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}

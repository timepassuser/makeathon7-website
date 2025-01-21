import React, { useState } from 'react';
import styles from '../styles/AboutUs.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Faq = () => {
  const faqs = [
    {
      question: "What is Makeathon?",
      answer: "MAKEATHON is one of the most premiere Hackathons in India, where 1500+ students of different skill levels come together from around India to experiment and create unique software or hardware projects from scratch. This 24 hour hackathon is filled with development, mentoring, fun and a night worth remembering.",
    },
    {
      question: "Can beginners participate in MAKEATHON?",
      answer: "Yes. Participants for MAKEATHON are mostly first and second-year students. If a student is willing to learn and bring creative ideas to the table, then MAKEATHON is just the place for them!",
    },
    {
      question: "Is coding necessary for MAKEATHON?",
      answer: "No. It is a myth that coding is necessary for hackathons. MAKEATHON acts as a platform for similar minds to come together and execute new ideas.",
    },
    {
      question: "What is the registration fee for MAKEATHON?",
      answer: "Participation in MAKEATHON is free. There are no registration or participation fees.",
    },
    {
      question: "Is a team required for participation?",
      answer: "Yes. A team shall have a minimum of 3 members to a maximum of 5 members.",
    },
    {
      question: "What is mode of hack?",
      answer: "MAKEATHON will be a hybrid event i.e. it will be conducted both offline and online virtually",
    },
    {
      question: "What if I have never been to a hackeathon before?",
      answer: "MAKEATHON welcomes students of all skill levels. We will have talks, mentors, and workshops to help you with your project. Just be eager to learn and excited to meet lots of awesome people.",
    },
    {
      question: "Can NON-TIET students participate in Makeathon?",
      answer: "Yes. MAKEATHON7 is open to students from other institutions as well. And they can join us in the campus for offline hackathon as well..",
    },
    {
      question: "How can we chose our teammates?",
      answer: "There is no restriction on the formation of the team. Participants can make teams irrespective of their institutions.",
    },
    {
      question: "What kind of workshops and activities be there?",
      answer: "Previously, We have  held workshops and talks for a range of skills levels from beginner to advanced intro to React. Other workshops also explore various programming tools such as APIs, databases, and platforms. Whether it is for relaxation or health, novelty or competition, our team has something exciting prepared for you to enjoy.",
    },
    {
      question: "What is judging criteria?",
      answer: "The judging criteria involve concept, design, development, and presentation. A panel of judges would score the teams based on the criteria above, which would further determine the ranking of each team.",
    },
    {
      question: "Will there be refreshments?",
      answer: "Yes, food and beverages will be provided throughout the event.",
    },
    {
      question: "Will there be any bootcamp?",
      answer: "Yes! A week-long MLSC BootCamp marks the beginning of the MAKEATHON7 starting on 19th February. You must register for bootcamp separately.",
    },
    {
      question: "Will there be prizes?",
      answer: "Yes! Best performing participants will win exciting prizes. More information on the prizes is available at MAKEATHON7 official website. and MLSC social media handles.",
    },
    {
      question: "Will there be mentors?",
      answer: "Yes! You can interact with the mentors regarding any problem you might face during the hacking period.",
    },
    {
      question: "Do all team members need to be present in person?",
      answer: "Yes, every team member should be present during various checkpoints. Since MAKEATHON7 is a HYBRID hackathon, every team member must be present in person if the team is offline or on discord channel if team is participating in online mode.",
    },
    {
      question: "Will there be wireless net available?",
      answer: "Yes! Wi-Fi will be provided at the venue for all offline mode participants.",
    },
    {
      question: "Who will be the part of judging panel?",
      answer: "The judging panel composition will be announced closer to the date of the hackathon.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>FAQs</h1>
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.faq} ${isOpen ? styles.activeFaq : ''}`} onClick={toggleFaq}>
      <div className={styles.ques}>
        <h4>{question}</h4>
        <i className={`fa-solid fa-chevron-down ${isOpen ? styles.active : ''}`}></i>
      </div>
      <div
        className={styles.ans}
        style={{
          maxHeight: isOpen ? '200px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Faq;


import React from 'react';
import { useState } from 'react';
import styles from './Executive.module.css';

const Executive = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');

  const images = [
    {
      id: 1,
      src: "/AboutUs/images/tanmay.png",
      name: "TANMAY MANN",
      role: "GENERAL SECRETARY",
      code: "AGENT MANN"
    },
    {
      id: 2,
      src: "/AboutUs/images/tanmay.png",
      name: "MANKIRAT SINGH",
      role: "TECHNICAL HEAD",
      code: "AGENT SINGH"
    },

    {
      id: 3,
      src: "/AboutUs/images/tanmay.png",
      name: "DEV MEHTA",
      role: "JOINT SECRETARY",
      code: "AGENT MEHTA"
    },
    {
      id: 4,
      src: "/AboutUs/images/tanmay.png",
      name: "Agrim Goyal",
      role: "FINANCE SECRETARY",
      code: "AGENT GOYAL"
    },
    {
      id: 5,
      src: "/AboutUs/images/tanmay.png",
      name: "ANANAY RAMPAL",
      role: "EM & LOGISTICS HEAD",
      code: "AGENT RAMPAL"
    },
    {
      id: 6,
      src: "/AboutUs/images/tanmay.png",
      name: "Prisha Kandhari",
      role: "JOINT SECRETARY",
      code: "AGENT KANDHARI"
    },

    // Add more board members as needed
  ];


  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('next');


  setTimeout(() =>  { 
    setCurrentIndex(oldIndex => {
      // const newIndex = oldIndex === images.length - 1 ? 0 : oldIndex + 1;
       let newIndex;
       if (oldIndex === images.length - 1) {
       newIndex = 0;
       } else {
        newIndex = oldIndex + 1;
      }
      return newIndex;
    });
    setIsAnimating(false);
    }, 600);
  };

const prevSlide = () => {
  if (isAnimating) return;
  setIsAnimating(true);
  setDirection('prev');
  
  setTimeout(() => {
    setCurrentIndex(oldIndex => {
      let newIndex;
      if (oldIndex === 0) {
        newIndex = images.length - 1;
      } else {
        newIndex = oldIndex - 1;
      }
      return newIndex;
    });
    setIsAnimating(false);
  }, 600);
};

  return (




  <div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>
        EXECUTIVE BOARD
      </h2>
      <div className={styles.carouselWrapper}>
    <button 
      className={styles.navButtonLeft}
      onClick={prevSlide}
      aria-label="Previous"
    >
      &#8592;
    </button>
      


        <div className={styles.slidesContainer}>
          {/* Previous Image (Angled) */}
          <div className={`${styles.slide} ${styles.prevSlide} ${isAnimating && direction === 'prev' ? styles.movePrevToCenter : ''}`}>
            <div className={styles.imageCard}>
              <img
                src={images[(currentIndex - 1 + images.length) % images.length].src}
                alt="Previous board member"
              />
              <div className={styles.cardInfo}>
                <h2>{images[(currentIndex - 1 + images.length) % images.length].name}</h2>
                <p>{images[(currentIndex - 1 + images.length) % images.length].role}</p>
                <p className={styles.agentCode}>{images[(currentIndex - 1 + images.length) % images.length].code}</p>
              </div>
            </div>
          </div>

          {/* Current Image (Center)*/}
          <div className={`${styles.slide} ${styles.currentSlide} ${isAnimating ? (direction === 'next' ? styles.moveCurrentToLeft : styles.moveCurrentToRight) : ''}`}>
            <div className={styles.imageCard}>
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].name}
              />
              <div className={styles.cardInfo}>
                <h2>{images[currentIndex].name}</h2>
                <p>{images[currentIndex].role}</p>
                <p className={styles.agentCode}>{images[currentIndex].code}</p>
              </div>
            </div>
          </div>

          {/* Next Image (Angled) */}
          <div className={`${styles.slide} ${styles.nextSlide} ${isAnimating && direction === 'next' ? styles.moveNextToCenter : ''}`}> 
            <div className={styles.imageCard}>
              <img
                src={images[(currentIndex + 1) % images.length].src}
                alt="Next board member"
              />
              <div className={styles.cardInfo}>
              <h2>{images[(currentIndex + 1) % images.length].name}</h2>
              <p>{images[(currentIndex + 1) % images.length].role}</p>
               <p className={styles.agentCode}>{images[(currentIndex + 1) % images.length].code}</p>                            
              </div> 
            </div>
          </div>
        </div>

         {/* Next to Next slide */} 
         <div className={`${styles.slide} ${styles.nextNextSlide} ${isAnimating && direction === 'next' ? styles.move2 : ''}`}> 
            <div className={styles.imageCard}>
              <img
                src={images[(currentIndex + 2) % images.length].src}
                alt="Next board member"
              />
              <div className={styles.cardInfo}>
              <h2>{images[(currentIndex + 2) % images.length].name}</h2>
              <p>{images[(currentIndex + 2) % images.length].role}</p>
               <p className={styles.agentCode}>{images[(currentIndex + 2) % images.length].code}</p>                            
              </div> 
            </div>
          </div>


         {/* Previous to prev slide */} 
         <div className={`${styles.slide} ${styles.prevPrevSlide} ${isAnimating && direction === 'prev' ? styles.move3 : ''}`}> 
            <div className={styles.imageCard}>
              <img
                src={images[(currentIndex - 2 + images.length) % images.length].src}
                alt="Next board member"
              />
              <div className={styles.cardInfo}>
              <h2>{images[(currentIndex - 2 + images.length) % images.length].name}</h2>
              <p>{images[(currentIndex - 2 + images.length) % images.length].role}</p>
               <p className={styles.agentCode}>{images[(currentIndex - 2 + images.length) % images.length].code}</p>                            
              </div> 
            </div>
          </div>


        <button 
          className={styles.navButtonRight}
          onClick={nextSlide}
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Executive;
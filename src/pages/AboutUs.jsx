import React from 'react'
import styles from '../styles/AboutUs.module.css'
import first_prize from '/AboutUs/images/first_prize.png'
import second_prize from '/AboutUs/images/second_prize.png'
import third_prize from '/AboutUs/images/third_prize.png'

function PrizeContainer({ img, alt, imgClass, text, prize }) {
  return <span className={styles.prizeContainerParent}>
    <span className={styles.prizeContainer}>
      <img src={img} alt={alt} className={imgClass} />
      <span className={styles.prizeShow}>
        <h3 className={styles.prizeTextHeading}>{text}</h3>
        <h5 className={styles.prizeTextDescription}>INR {prize}</h5>
        <img src={img} alt={alt} className={styles.prizeShowImage + " " + imgClass} />
      </span>
    </span>
  </span>
}

function RewardsSection() {
  return <>
    <h2 className={styles.subheading + " " + styles.casinoFont}> REWARDS</h2>
    <div className={styles.prizesContainer}>
      <PrizeContainer img={second_prize} alt="second_prize" imgClass={styles.prizeImage + " " + styles.secondPrize} text="Second Prize" prize="20,000"/>
      <PrizeContainer img={first_prize} alt="first_prize" imgClass={styles.prizeImage + " " + styles.firstPrize} text="First Prize" prize="30,000" />
      <PrizeContainer img={third_prize} alt="third_prize" imgClass={styles.prizeImage + " " + styles.thirdPrize} text="Third Prize" prize="10,000"/>
    </div>
  </>
}

function BlackTint() {
  return <span className={styles.blacktint}></span>
}

const AboutUs = () => {
  return (
    <>
      <div className={styles.backgroundImage} />
        <BlackTint />
      <div className={styles.mainContent}>
        <RewardsSection />
      </div>
    </>
  )
}

export default AboutUs
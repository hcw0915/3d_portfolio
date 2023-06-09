import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { useTranslation } from 'react-i18next'
import {
  reactjs,
  javascript,
  html,
  css,
  tailwind,
  scss,
  threejs,
} from '../assets/index'
import i18n from '../i18n'

const Hero = () => {
  const { t } = useTranslation()

  // useEffect(() => {
  //   const lng = navigator.language
  //   i18n.changeLanguage(lng)
  // }, [])

  return (
    <>
      <section className="relative w-full h-screen mx-auto">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
          </div>

          <div>
            <h1 className={`${styles.heroHeadText}`}>
              <span className="text-yellow-400">
                {t('Front-End React')}. &nbsp;
                <hr />
              </span>
            </h1>
            <br />
            <p className={`${styles.heroSubText}  text-white`}>
              {/* {t(
                'Hi, I am a Antonio Hou, A Front-end React Developer based in Taiwan.'
              )} */}
              你好，我是侯承緯(Antonio Hou), 一個有明確目標的前端工程師.
            </p>
            <br />
            <br />
            <br />
            <div className={`${styles.heroSubText}  text-white`}>TECH |</div>

            <div className="flex flex-row flex-wrap">
              <img src={html} className="w-10 h-10 m-1 " />
              <img src={css} className="w-10 h-10 m-1" />
              <img src={javascript} className="w-10 h-10 m-1" />
              <img src={reactjs} className="w-10 h-10 m-1" />
              <img src={threejs} className="w-10 h-10 bg-white rounded m-1" />
              <img src={tailwind} className="w-10 h-10 m-1" />
              <img src={scss} className="w-10 h-10 m-1" />

              {/* <img src="../assets/tech/tailwind.png" alt="" /> */}
            </div>
          </div>
        </div>
        <ComputersCanvas />

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  )
}

export default Hero

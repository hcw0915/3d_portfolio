import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'

const Hero = () => {
  const { t } = useTranslation()

  // useEffect(() => {
  //   const lng = navigator.language
  //   i18n.changeLanguage(lng)
  // }, [])

  return (
    <>
      <section className="relative w-full h-screen mx-auto bg-white">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-black`}>
              {t('Front-End React')} &nbsp;
              {/* <span className="text-[#915eff]">{t('Antonio')}.</span> */}
            </h1>
            <p className={`${styles.heroSubText}  text-black`}>
              {t(
                'Hi, I am a Antonio Hou, A Front-end React Developer based in Taiwan.'
              )}
            </p>
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

import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { useTranslation } from 'react-i18next'

const ServiceCard = ({ index, title, icon, description }) => {
  const { t } = useTranslation()
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <p className="text-orange-500 text-[20px] flex justify-center">
        &gt;&gt;
        {t(title)}
      </p>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <div className="bg-white w-[100px] h-[100px] rounded-[20px] flex justify-center items-center">
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          </div>
          <h3 className="text-white text-[14px] font-bold text-center">
            {t(description)}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

// {t('')}
const About = () => {
  const { t } = useTranslation()

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('Overview')}</p>
        <h2 className={styles.sectionHeadText}>&gt; {t('Introduction')}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
      >
        大學畢業後擔任軍官服務約7年時間，退伍後，2022年7月開始學習程式，
        從2022年9月學習前端直到現在，喜歡接觸新的技術，並善於將其理解並結合製作自己的筆記。
        <p> - 短期目標： Javascript 與 React 的原理能夠瞭解通透。</p>
        <p> - 中期目標： 接觸更多不同的第三方庫，並且可以依需求活用。</p>
        <p> - 長期目標： 演算法 與 資料結構 加強並深入。</p>
        <p>大學畢業於： 國防大學理工學院化學暨材料工程學系(104年畢)</p>
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-20 items-center justify-center">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />
        })}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')

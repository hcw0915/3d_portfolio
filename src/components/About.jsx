import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>

      {title}
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi adipisci,
        ipsum suscipit esse quam ab. Molestias, eaque quaerat nostrum hic ab
        libero. Libero corporis doloremque illum labore temporibus reiciendis,
        aut suscipit, quibusdam sunt officia aperiam a id voluptates sit
        similique tempore sint assumenda. Mollitia, accusamus. At ut quas
        similique, ullam sint quod omnis. Nam, voluptatibus. Itaque, tenetur
        ducimus quis incidunt omnis debitis quisquam numquam nam porro a
        possimus similique maxime dicta nihil fugit cupiditate amet voluptas
        modi. Necessitatibus voluptas vero officiis fugit corporis ab sapiente
        mollitia consequatur deleniti odit quia nesciunt unde obcaecati,
        exercitationem laborum eveniet eum numquam! Explicabo, eaque.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />
        })}
      </div>
    </>
  )
}
export default SectionWrapper(About, 'about')

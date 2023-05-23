/* eslint-disable react/prop-types */
import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github, website } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import Tooltip from '@mui/material/Tooltip'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  website_link,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(website_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Tooltip title="Website" placement="top">
                <img
                  src={website}
                  alt="github"
                  className="bg-white w-1/2 h-1/2 object-cover"
                />
              </Tooltip>
            </div>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Tooltip title="Source Code" placement="top">
                <img
                  src={github}
                  alt="github"
                  className="w-1/1 h-1/1 object-contain"
                />
              </Tooltip>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <a href={website_link} type="_blank">
            <h3 className="text-white font-bold text-[24px]">
              {name}
              <span className="mt-2 text-secondary text-[14px]">
                {' '}
                - 可連結{' '}
              </span>
            </h3>
          </a>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => {
            return (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            )
          })}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>成果展示</p>
        <h2 className={styles.heroHeadText}>專案介紹</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          近期作品配合 Three.js 製作專案，同時個人信任 "Practice makes
          Perfect"，沒有甚麼套件或是API是不會的，如果有，那就再多練一遍。
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => {
          return (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          )
        })}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')

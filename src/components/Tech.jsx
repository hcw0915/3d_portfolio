import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => {
        return (
          <div key={technology.name} className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
            <p className="flex justify-center items-center text-[14px] text-secondary">
              {technology.name}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default SectionWrapper(Tech, '')

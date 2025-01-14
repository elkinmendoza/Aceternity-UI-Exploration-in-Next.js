import React from 'react'
import { BentoGrid } from './ui/BentoGrid'
import { BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

function Grid() {
  return (
    <section id='about'>

        <BentoGrid className="w-full py-20 md:px-20">

            {gridItems.map
            (({id,title,description,className,img,titleClassName,imgClassName,spareImg})=>(
                <BentoGridItem
                id={id}
                description={description}
                key={id}
                title={title}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
                >

                </BentoGridItem>
            ))}

        </BentoGrid>

    </section>
  )
}

export default Grid
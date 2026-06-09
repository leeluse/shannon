import React from 'react'
import { TEMPLATES_STYLE } from '@/constants/step-template'
import OptionCard from '../card/OptionCard'

export function StepFourthTemplate() {
    return (
        <div className='px-10 flex flex-col gap-2'>
            {TEMPLATES_STYLE.map((template) => (
                <div key={template.id}>
                    <OptionCard {...template} />
                </div>
            ))}
        </div>
    )
}

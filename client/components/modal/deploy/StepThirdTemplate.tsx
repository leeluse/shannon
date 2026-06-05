import React from 'react'
import TemplateCard from '../card/TemplateCard'
import { TEMPLATES_FOR } from '@/constants/step-template'

export function StepThirdTemplate() {
    return (
        <div className='grid grid-cols-2 gap-3 p-2'>
            {TEMPLATES_FOR.map((template) => (
                <div key={template.id}>
                    <TemplateCard {...template} />
                </div>
            ))}
        </div>
    )
}

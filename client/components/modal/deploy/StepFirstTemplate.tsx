import React from 'react'
import TemplateCard from '../card/TemplateCard'
import { TEMPLATES } from '@/constants/step-template'

export function StepFirstTemplate() {
    return (
        <div className='grid grid-cols-3 gap-3 p-2'>
            {TEMPLATES.map((template) => (
                <div key={template.id}>
                    <TemplateCard {...template} />
                </div>
            ))}
        </div>
    )
}

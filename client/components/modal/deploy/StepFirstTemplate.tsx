import React from 'react'
import TemplateCard from '../card/TemplateCard'
import { TEMPLATES } from '@/constants/step-template'

export function StepFirstTemplate() {
    return (
        <div className='grid grid-cols-4 gap-3 p-2'>
            {TEMPLATES.map(({ id, name, keyword, descript }) => (
                <div key={id}>
                    <TemplateCard id={id} name={name} keyword={keyword} descript={descript} />
                </div>
            ))}
        </div>
    )
}

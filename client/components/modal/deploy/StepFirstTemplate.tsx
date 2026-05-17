import React from 'react'
import TemplateCard from '../card/TemplateCard'
import { FIRST_STEP } from '@/mock/modal'

export function StepFirstTemplate() {
    return (
        <div className='grid grid-cols-4 gap-3 p-2'>
            {FIRST_STEP.map(({ id, name, keyword, descript }) => (
                <div key={id}>
                    <TemplateCard id={id} name={name} keyword={keyword} descript={descript} />
                </div>
            ))}
        </div>
    )
}

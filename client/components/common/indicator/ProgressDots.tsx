import React from 'react'

interface IProgressDots {
    steps: readonly number[];
    currStep: number;
}
export default function ProgressDots(props: IProgressDots) {
    const { steps, currStep } = props;

    return (
        <div className='flex gap-3 items-center'>
            <div className='flex gap-2'>
                {steps.map((item) => (
                    <div key={item} className={`rounded-full size-2 ${item === currStep ? 'bg-c-modal-sub' : 'bg-c-gray/50'}`
                    }></div>
                ))}
            </div>
            <div>
                <span className='text-sm'>{currStep}</span>
                <span className='text-sm text-c-gray/50'> / {steps.length} </span >
            </div>
        </div>
    )
}

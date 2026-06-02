import React from 'react'

interface IStepButton {
    title: string;
    onClick: () => void;
}

export default function StepButton({ title, onClick }: IStepButton) {
    return (
        <button
            className='py-2 px-5 border! text-sm
            border-c-gray rounded-md text-c-gray'
            onClick={onClick}>
            {title}
        </button>

    )
}

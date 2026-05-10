import React from 'react'

interface IStepButton {
    title: string;
    onClick: () => void;
}

export default function StepButton({ title, onClick }: IStepButton) {
    return (
        <button
            className='py-2 px-3 w-22 border! border-white rounded-md text-white'
            onClick={onClick}>
            {title}
        </button>

    )
}

interface IPrimaryButton {
    text: string;
    onClick: () => void;
}

export default function PrimaryButton({ text, onClick }: IPrimaryButton) {
    return (
        <button onClick={onClick} type='button' className='size-full h-12 rounded-2xl bg-c-pink! font-black text-c-purple flex justify-center items-center'>
            {text}
        </button>
    )
}
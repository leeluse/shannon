interface IPrimaryButton {
    text: string;
    onClick: () => void;
}

export default function PrimaryButton({ text, onClick }: IPrimaryButton) {
    return (
        <div className='size-full h-10 rounded-xl bg-c-pink font-black text-c-btn-primary flex justify-center'>
            <button onClick={onClick}>
                {text}
            </button>
        </div>
    )
}
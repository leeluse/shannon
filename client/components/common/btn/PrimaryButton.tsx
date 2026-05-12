interface IPrimaryButton {
    text: string;
    onClick: () => void;
}

export default function PrimaryButton({ text, onClick }: IPrimaryButton) {
    return (
        <div className='size-full rounded-2xl bg-pink font-black text-btn-primary flex justify-center'>
            <button onClick={onClick}>
                {text}
            </button>
        </div>
    )
}
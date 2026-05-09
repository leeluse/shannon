interface IPrimaryButton {
    text: string;
    onClick: () => void;
}

export default function PrimaryButton({ text, onClick }: IPrimaryButton) {
    return (
        <div className='size-full rounded-2xl bg-mauve-600/30 text-center font-black text-white flex justify-center'>
            <button onClick={onClick}>
                {text}
            </button>
        </div>
    )
}
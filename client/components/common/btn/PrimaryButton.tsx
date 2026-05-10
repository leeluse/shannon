interface IPrimaryButton {
    text: string;
    onClick: () => void;
}

export default function PrimaryButton({ text, onClick }: IPrimaryButton) {
    return (
        <div className='size-full rounded-2xl bg-mauve-500/40 border-1 border-amber-50/20 text-center font-black text-mauve-200 flex justify-center'>
            <button onClick={onClick}>
                {text}
            </button>
        </div>
    )
}
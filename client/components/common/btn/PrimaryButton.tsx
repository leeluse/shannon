import { IButton } from "@/types/button";

export default function PrimaryButton({ label, onClick }: IButton) {
    return (
        <button onClick={onClick} type='button' className='size-full h-12 rounded-2xl bg-c-pink font-black text-c-purple flex justify-center items-center'>
            {label}
        </button>
    )
}
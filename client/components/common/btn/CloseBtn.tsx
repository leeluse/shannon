import { X } from "lucide-react"

export default function CloseBtn({ onClick }: { onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className='text-c-modal-sub hover:text-white'
        >
            <X size={24} strokeWidth={2.5} />
        </button>
    )
}
import { IOptionCard } from '@/types/modal/card'
import { Check } from 'lucide-react'

export default function OptionCard({
    name,
    description,
    checked,
    onChecked
}: IOptionCard) {

    return (
        <div className='p-2.5 w-full rounded-lg bg-white/2 flex items-center gap-4 px-4 border border-white/20'>
            <label className="relative flex items-center justify-center cursor-pointer gap-3 ">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onChecked()}
                    className="sr-only peer"
                />
                <div className={`w-4.5 h-4.5 rounded-sm border flex items-center justify-center 
                peer-checked:border-violet-500 border-white/20
                    }`}>
                    <Check
                        className={`w-4 h-4 
                            }`}
                        style={{ opacity: checked ? 1 : 0 }}
                        strokeWidth={3}
                    />
                </div>
                <InlineBox name={name} description={description} />
            </label>
        </div>
    )
}

function InlineBox({ name, description }: { name: string, description: string }) {
    return (
        <div className='flex gap-3 text-white/60 peer-checked:text-white transition-all duration-200'>
            <div className=''>{`${name}  —  ${description}`}</div>
        </div>
    )
}
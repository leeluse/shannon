import { Brain, Network } from "lucide-react"

export default function SideBarTab() {
    const TAB_ITEMS = [
        { icon: <Brain size={20} strokeWidth={2.5} />, name: 'Neural Core' },
        { icon: <Network size={20} strokeWidth={2.5} />, name: 'Latency Map' },
    ]

    return (
        <ul className='w-full px-4 flex flex-col gap-3 pt-10'>
            {TAB_ITEMS.map(({ icon, name }) =>
                <li key={name} className="flex items-center gap-3 bg-amber-50/10">
                    <div className="text-mauve-800 p-1">
                        {icon}
                    </div>
                    <span className="font-bold text-lg text-mauve-800">{name}</span>
                </li>
            )}
        </ul>
    )
}
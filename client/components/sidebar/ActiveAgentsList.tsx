
export default function ActiveAgentsList() {
    const ACTIVE_AGENTS = [
        { color: 'bg-purple-300', name: 'Axus' },
        { color: 'bg-blue-300', name: 'Nyx' },
        { color: 'bg-red-300', name: 'Eos' },
        { color: 'bg-yellow-300', name: 'Strix' }
    ]
    return (
        <section className='px-2'>
            <header className='font-medium text-mauve-300'>Active Agents</header>
            <ul className='flex flex-col gap-2 py-3'>
                {ACTIVE_AGENTS.map(({ color, name }) =>
                    <li key={name} className="flex gap-2 items-center justify-between">
                        <div className="flex gap-3 items-center">
                            <div className={`${color} size-5 rounded-full`} />
                            <span className="text-white font-bold">{name}</span>
                        </div>
                        <div className={`rounded-full size-2 ${color}`} />
                    </li>
                )}
            </ul>
        </section>
    )
}

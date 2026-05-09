export default function SideBarHeader() {
    return (
        <header className='px-2 font-bold flex gap-4 items-center'>
            <img src="/logo.svg" alt="Shannon Logo" className="size-12" />
            <div className="flex flex-col gap-0">
                <h1 className='text-2xl text-mauve-600'>Shannon</h1>
                <span className='text-sm font-medium text-mauve-300'>v4.2.0-stable</span>
            </div>
        </header>
    )
}
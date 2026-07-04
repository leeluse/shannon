import { project } from "@/types/dashboard/project"

export default function DashboardHome({ project }: { project: project }) {
    console.log(project);
    return (
        <section className='size-full flex items-center justify-center gap-4'>
            <DashboardMain />
            <DashboarSideBar />
        </section>
    )
}


export function DashboardHeader() {
    return (
        <header>DashboardHeader</header>

    )
}

export function DashboardMain() {
    return (
        <main className='glass size-full'>
            dashbard
        </main>
    )
}

export function DashboarSideBar() {
    return (
        <article className='glass size-full max-w-sm'>
            article
        </article>
    )
}
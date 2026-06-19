"use client"
import { CUR_PROJ_MOCK_ITEMS, RECENTLY_PROJ_MOCK_ITEMS } from '@/mock/sidebar'
import { notFound, useParams } from 'next/navigation'
import React from 'react'

export default function ProjectPage() {
    const projectId = useParams().id
    const data = [...CUR_PROJ_MOCK_ITEMS, ...RECENTLY_PROJ_MOCK_ITEMS]
    const project = data.find((item) => String(item.id) === String(projectId))

    if (!project) {
        notFound();
    }


    return (
        <div>
        </div>
    )
}

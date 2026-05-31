import React from 'react'

export default function ModelCard({ name }: { name: string }) {
    return (
        <div>
            <div className="font-semibold">{name}</div>
        </div>
    )
}

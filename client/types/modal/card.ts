import React from 'react'

export type ITemplateCard = {
    id: number
    name: string
    descript: string
    placeholder: string
    icon: React.ComponentType<any>
    detailTemplates: IDetailTemplates[]
}

export type IDetailTemplates = {
    label: string;
    description: string;
    fill_text: string;
}

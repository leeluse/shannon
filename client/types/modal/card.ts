import React from 'react'

export type ITemplateCard = {
    id?: number
    name: string
    description: string
    placeholder?: string
    curId?: number,
    icon: React.ComponentType<{ size?: number; className?: string }>
    onClick?: () => void
    templates?: IDetailTemplates[]
}
export interface ICard {
    templateId: number;
    targetId: number;
    styleId: number[];
    details: string;
}

export type IDetailTemplates = {
    label: string;
    description: string;
    fillText: string;
}

export type IOptionCard = {
    checked: boolean,
    name: string
    description: string
    onChecked: () => void
}
import React from 'react'

export default function InitPanelIcon({ width = 128, height = 128, className = "" }: { width?: number, height?: number, className?: string }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <rect x="0.5" y="0.5" width="127" height="127" rx="11.5" stroke="#DDB7FF" strokeOpacity="0.3" />
            <rect x="8.5" y="8.5" width="111" height="111" rx="11.5" stroke="#DDB7FF" strokeOpacity="0.5" />
            <foreignObject x="2" y="2" width="124" height="124">
                <div
                    style={{
                        backdropFilter: 'blur(6px)',
                        clipPath: 'url(#bgblur_0_6_166_clip_path)',
                        height: '100%',
                        width: '100%',
                    }}
                />
            </foreignObject>
            <g filter="url(#filter0_d_6_166)" data-figma-bg-blur-radius="12">
                <rect x="32" y="32" width="64" height="64" rx="12" fill="#DDB7FF" fillOpacity="0.2" shapeRendering="crispEdges" />
                <rect x="32.5" y="32.5" width="63" height="63" rx="11.5" stroke="#DDB7FF" strokeOpacity="0.5" shapeRendering="crispEdges" />
                <path d="M61.4902 69.0002H64.8235L65.0735 66.9168C65.2957 66.8335 65.4971 66.7363 65.6777 66.6252C65.8582 66.5141 66.018 66.3891 66.1569 66.2502L68.0735 67.0835L69.7402 64.2502L68.0735 63.0002C68.1291 62.7779 68.1569 62.5557 68.1569 62.3335C68.1569 62.1113 68.1291 61.8891 68.0735 61.6668L69.7402 60.4168L68.0735 57.5835L66.1569 58.4168C66.018 58.2779 65.8582 58.1529 65.6777 58.0418C65.4971 57.9307 65.2957 57.8335 65.0735 57.7502L64.8235 55.6668H61.4902L61.2402 57.7502C61.018 57.8335 60.8166 57.9307 60.636 58.0418C60.4555 58.1529 60.2957 58.2779 60.1569 58.4168L58.2402 57.5835L56.5735 60.4168L58.2402 61.6668C58.1846 61.8891 58.1569 62.1113 58.1569 62.3335C58.1569 62.5557 58.1846 62.7779 58.2402 63.0002L56.5735 64.2502L58.2402 67.0835L60.1569 66.2502C60.2957 66.3891 60.4555 66.5141 60.636 66.6252C60.8166 66.7363 61.018 66.8335 61.2402 66.9168L61.4902 69.0002ZM63.1569 64.8335C62.4624 64.8335 61.8721 64.5904 61.386 64.1043C60.8999 63.6182 60.6569 63.0279 60.6569 62.3335C60.6569 61.6391 60.8999 61.0488 61.386 60.5627C61.8721 60.0766 62.4624 59.8335 63.1569 59.8335C63.8513 59.8335 64.4416 60.0766 64.9277 60.5627C65.4138 61.0488 65.6569 61.6391 65.6569 62.3335C65.6569 63.0279 65.4138 63.6182 64.9277 64.1043C64.4416 64.5904 63.8513 64.8335 63.1569 64.8335ZM53.1569 80.6668V73.5002C51.5735 72.0557 50.3444 70.3682 49.4694 68.4377C48.5944 66.5071 48.1569 64.4724 48.1569 62.3335C48.1569 58.1668 49.6152 54.6252 52.5319 51.7085C55.4485 48.7918 58.9902 47.3335 63.1569 47.3335C66.6291 47.3335 69.7055 48.3543 72.386 50.396C75.0666 52.4377 76.8096 55.0974 77.6152 58.3752L79.7819 66.9168C79.9207 67.4446 79.8235 67.9238 79.4902 68.3543C79.1569 68.7849 78.7124 69.0002 78.1569 69.0002H74.8235V74.0002C74.8235 74.9168 74.4971 75.7016 73.8444 76.3543C73.1916 77.0071 72.4069 77.3335 71.4902 77.3335H68.1569V80.6668H53.1569Z" fill="#DDB7FF" />
            </g>
            <defs>
                <filter id="filter0_d_6_166" x="2" y="2" width="124" height="124" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="15" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.866667 0 0 0 0 0.717647 0 0 0 0 1 0 0 0 0.4 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_166" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_166" result="shape" />
                </filter>
                <clipPath id="bgblur_0_6_166_clip_path" transform="translate(-2 -2)"><rect x="32" y="32" width="64" height="64" rx="12" />
                </clipPath></defs>
        </svg>

    )
}

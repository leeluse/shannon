import z from "zod";

export const totalProjectSchema = z.object({
    // 1단계: 유형 ID (0이면 미선택이므로, 최소 1 이상이어야 통과!)
    templateId: z.number().min(1, "원하시는 프로젝트 유형을 선택해 주세요."),

    // 2단계: 상세 설명 (아까 만든 규칙 그대로!)
    details: z.string().trim().min(10, "최소 10자 이상 입력이 필요합니다."),

    // 3단계: 대상 ID (최소 1 이상이어야 통과!)
    targetId: z.number().min(1, "결과물을 받을 대상을 선택해 주세요."),

    // 4단계: 분위기 스타일 ID들 (여러 개 선택 가능하니 배열로 받고, 최소 1개 이상 선택해야 통과!)
    styleId: z.array(z.number()).min(1, "원하시는 분위기를 하나 이상 선택해 주세요."),
})

export type TotalProjectSchemaType = z.infer<typeof totalProjectSchema>
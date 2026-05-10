// 현재 /agents/new로 이동하면 사이드바가 사라질 거예요.
// 왜냐하면 @sidebar/page.tsx는 / 경로에서만 보이고, 다른 경로에서는 default.tsx를 보여주는데, 현재 default.tsx가 null을 반환하고 있기 때문입니다.
// 해결책: @sidebar/default.tsx가 @sidebar/page.tsx와 똑같은 내용을 보여주게 해야 합니다.

export { default } from "./page";
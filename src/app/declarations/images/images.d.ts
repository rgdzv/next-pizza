declare module '*.svg' {
    import type { FC, SVGProps } from 'react'
    const SVG: FC<SVGProps<SVGElement> & { title?: string }>
    export default SVG
}

declare module '*.png' {
    const content: string
    export default content
}
declare module '*.jpeg' {
    const content: string
    export default content
}
declare module '*.jpg' {
    const content: string
    export default content
}
declare module '*.gif' {
    const content: string
    export default content
}

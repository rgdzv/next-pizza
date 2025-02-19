declare module '*.svg' {
    import type { FC, SVGProps } from 'react'
    const SVG: FC<SVGProps<SVGElement> & { title?: string }>
    export default SVG
}

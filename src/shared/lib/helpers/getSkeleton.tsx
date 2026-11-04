import { Skeleton, type SkeletonVariantType } from '../../ui'
import type { ReactElement } from 'react'

export const getSkeleton = (
    variant: SkeletonVariantType,
    num = 0
): ReactElement[] => {
    return Array.from({ length: num }, (_, index) => (
        <Skeleton key={index} variant={variant} />
    ))
}

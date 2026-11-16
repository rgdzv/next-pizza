'use client'
import { Fragment } from 'react'
import { CloseButton } from '@headlessui/react'
import { PopoverElement, CustomButton } from 'shared/ui'
import { ArrowDownIcon, ArrowsUpDownIcon, ArrowUpIcon } from 'shared/assets'
import { useSort } from '../../lib/hooks/useSort'
import { SORTLIST } from './lib/const/sortList'
import type { FC } from 'react'

export const SortPizzas: FC = () => {
    const { sortingObj, onChangeSortingObj } = useSort()
    const { sortProperty, order, name } = sortingObj

    const sortOptions = SORTLIST.map((item) => {
        const isAscActive =
            sortProperty === item.sortProperty && order === 'asc'

        const isDescActive =
            sortProperty === item.sortProperty && order === 'desc'

        const handleChangeOrder = (newOrder: 'asc' | 'desc') => {
            onChangeSortingObj({
                ...item,
                order: newOrder
            })
        }

        return (
            <li key={item.sortProperty}>
                <CloseButton as={Fragment}>
                    <CustomButton
                        variant='sortArrow'
                        onClick={() => {
                            handleChangeOrder('asc')
                        }}
                        data-active={isAscActive}
                    >
                        <ArrowUpIcon title='По возрастанию' />
                    </CustomButton>
                </CloseButton>
                <CloseButton as={Fragment}>
                    <CustomButton
                        variant='sortArrow'
                        onClick={() => {
                            handleChangeOrder('desc')
                        }}
                        data-active={isDescActive}
                    >
                        <ArrowDownIcon title='По убыванию' />
                    </CustomButton>
                </CloseButton>
                <span>{item.name}</span>
            </li>
        )
    })

    const triggerButton = (
        <CustomButton variant='sort'>
            <ArrowsUpDownIcon title='Сортировка' />
            <span>Сортировка по:</span>
            <span>{name}</span>
        </CustomButton>
    )

    return (
        <PopoverElement
            options={sortOptions}
            variant='sort'
            triggerButton={triggerButton}
        />
    )
}

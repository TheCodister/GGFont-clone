'use client'
import Close from '@/assets/close.svg'
import Tune from '@/assets/tune.svg'
import { useAppContext } from '@/contexts/context'
import { useGetFonts } from '@/hooks/useGetFonts'
import { Button } from '@radix-ui/themes'
import { useMemo, useState } from 'react'
import { AutoSizer, Grid, List } from 'react-virtualized'
import { HoverCard, SwitchViewButton } from '..'
import FontCardGrid from '../FontCardGrid/FontCardGrid'
import FontCard from '../FontCardHor/FontCardHor'

export default function ListFontDisplay() {
  const { setToggleSidebar, toggleSidebar, filterLanguage, stroke } =
    useAppContext()
  const [isGridview, setIsGridview] = useState(false)
  const { data, isLoading, isError } = useGetFonts(filterLanguage, stroke)
  const [columnCount, setColumnCount] = useState(4)
  const [columnWidth, setColumnWidth] = useState(200)

  const fontItems = useMemo(() => data?.data.items || [], [data])

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <h1>Refresh the page</h1>
      </div>
    )
  }

  const rowRenderer = ({ index, key }: { index: number; key: string }) => {
    const font = fontItems[index]
    return (
      <div key={key} className="w-full">
        <FontCard
          fontName={font.family}
          numVariants={font.variants.length}
          creator="Google"
        />
      </div>
    )
  }

  const cellRenderer = ({
    columnIndex,
    key,
    rowIndex,
  }: {
    columnIndex: number
    key: string
    rowIndex: number
  }) => {
    const index = rowIndex * columnCount + columnIndex
    const font = fontItems[index]
    return (
      <div key={key} className="w-full">
        {font ? (
          <FontCardGrid
            fontName={font.family}
            numVariants={font.variants.length}
            creator="Google"
          />
        ) : null}
      </div>
    )
  }

  // const handleResize = useCallback(({ width }: { width: number }) => {
  //   if (width > 1280) {
  //     setColumnCount(3)
  //     setColumnWidth(width / 3)
  //   } else if (width > 640) {
  //     setColumnCount(2)
  //     setColumnWidth(width / 2)
  //   } else {
  //     setColumnCount(1)
  //     setColumnWidth(width)
  //   }
  // }, [])

  return (
    <div className="w-full">
      <Button
        size="3"
        variant={toggleSidebar ? 'solid' : 'outline'}
        radius="full"
        color="indigo"
        className="h-12 w-26 self-start mb-5 cursor-pointer transition-all duration-100"
        onClick={() => setToggleSidebar(!toggleSidebar)}
      >
        {toggleSidebar ? (
          <Close width={20} height={20} fill="white" alt="logo" />
        ) : (
          <Tune width={20} height={20} alt="logo" />
        )}
        Filters
      </Button>
      <div className="flex items-center justify-between mb-8">
        <p className="justify-self-start text-xs">
          {fontItems.length} of {fontItems.length} families
        </p>
        <div className="flex items-center">
          <HoverCard />
          <SwitchViewButton
            isGridview={isGridview}
            setIsGridview={setIsGridview}
          />
        </div>
      </div>
      <div
        className="w-full"
        style={{ width: 'calc(100vw - 200px)', height: 'calc(100vh - 100px)' }}
      >
        <AutoSizer>
          {({ height, width }) =>
            !isGridview ? (
              <List
                width={width}
                height={20000}
                autoHeight
                rowCount={fontItems.length}
                rowHeight={100} // Adjust based on your card height
                rowRenderer={rowRenderer}
              />
            ) : (
              <Grid
                autoHeight
                width={width}
                height={height}
                columnCount={columnCount}
                rowCount={Math.ceil(fontItems.length / columnCount)}
                cellRenderer={cellRenderer}
                columnWidth={columnWidth}
                rowHeight={200} // Adjust based on your card height
              />
            )
          }
        </AutoSizer>
      </div>
    </div>
  )
}

'use client'
import CloseIcon from '@/assets/CloseIcon.svg'
import { SelectBar, SliderBar } from '@/components'
import { useAppContext } from '@/contexts/context'
import { Box, Button, Select, Separator, TextArea } from '@radix-ui/themes'
import { useState } from 'react'

export default function SideBar() {
  const {
    toggleSidebar,
    setTextPreview,
    setToggleSidebar,
    setFilterLanguage,
    setStroke,
  } = useAppContext()
  const defaultText =
    'Whereas disregard and contempt for human rights have resulted'
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    setTextPreview(newValue || defaultText)
  }

  const handleLanguageChange = (value: string) => {
    setFilterLanguage(value)
  }

  const handleStrokeChange = (value: string) => {
    setStroke(value)
  }

  return (
    <div>
      {toggleSidebar ? (
        <div className="flex flex-col w-[15vw] p-5 h-screen gap-5">
          <Box
            onClick={() => setToggleSidebar(!toggleSidebar)}
            className="flex justify-end cursor-pointer"
          >
            <CloseIcon />
          </Box>
          <h1 className="font-bold">Preview</h1>
          <TextArea
            className="h-40"
            placeholder="Type something"
            size="3"
            radius="full"
            value={value}
            onChange={handleChange}
          />
          <div className="flex items-center">
            <SelectBar />
            <SliderBar />
          </div>
          <Separator orientation="horizontal" size="4" />
          <h2 className="font-bold">Filter</h2>
          <div className="flex flex-col gap-3">
            <h2 className="font-bold">Language</h2>
            <Select.Root
              size="3"
              defaultValue="All Language"
              onValueChange={handleLanguageChange}
            >
              <Select.Trigger className="w-full"></Select.Trigger>
              <Select.Content>
                <Select.Item value="All Language">All Language</Select.Item>
                <Select.Item value="vietnamese">Vietnamese</Select.Item>
                <Select.Item value="japanese">Japanese</Select.Item>
                {/* Add more options here */}
              </Select.Content>
            </Select.Root>
            <h2 className="font-bold">Decorative Stroke</h2>
            <div className="flex gap-3">
              <Button onClick={() => handleStrokeChange('Serif')}>Serif</Button>
              <Button onClick={() => handleStrokeChange('Slab Serif')}>
                Slab Serif
              </Button>
              <Button onClick={() => handleStrokeChange('Sans Serif')}>
                Sans Serif
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

'use client'
import Font from '@/types/fonts'
import { createContext, useContext, useEffect, useState } from 'react'

interface AppContextType {
  fontdetailname: string
  setFontDetailName: (fontdetailname: string) => void
  textPreview: string
  setTextPreview: (textPreview: string) => void
  size: string
  setSize: (size: string) => void
  selected: boolean
  setSelected: (selected: boolean) => void
  toggleSidebar: boolean
  setToggleSidebar: (toggleSidebar: boolean) => void
  filterLanguage: string
  setFilterLanguage: (filterLanguage: string) => void
  stroke: string
  setStroke: (stroke: string) => void
  addFont: (font: Font) => void
  removeFont: (family: string) => void
  toggleVariant: (fontName: string, variant: string, enabled: boolean) => void
  selectedFont: Font[]
}

const defaultType: AppContextType = {
  fontdetailname: '',
  setFontDetailName: () => {},
  textPreview: 'Whereas disregard and contempt for human rights have resulted',
  setTextPreview: () => {},
  size: '48',
  setSize: () => {},
  selected: false,
  setSelected: () => {},
  toggleSidebar: false,
  setToggleSidebar: () => {},
  filterLanguage: 'All Language',
  setFilterLanguage: () => {},
  stroke: '',
  setStroke: () => {},
  addFont: () => {},
  removeFont: () => {},
  toggleVariant: () => {},
  selectedFont: [],
}

const AppContext = createContext<AppContextType>(defaultType)

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [fontdetailname, setFontDetailName] = useState('')
  const [textPreview, setTextPreview] = useState(
    'Whereas disregard and contempt for human rights have resulted',
  )
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const [size, setSize] = useState('48px')
  const [selectedFont, setSelectedFont] = useState<Font[]>([])
  const [selected, setSelected] = useState(false)
  const [filterLanguage, setFilterLanguage] = useState('All Language')
  const [stroke, setStroke] = useState('')

  useEffect(() => {
    // Load selected fonts from local storage when the component mounts
    const storedFonts = localStorage.getItem('selectedFont')
    if (storedFonts) {
      setSelectedFont(JSON.parse(storedFonts))
    }
  }, [])

  useEffect(() => {
    // Load selected fonts from local storage when the component mounts
    const storedFonts = localStorage.getItem('selectedFont')
    if (storedFonts) {
      setSelectedFont(JSON.parse(storedFonts))
    }
  }, [])

  useEffect(() => {
    // Update the selected state based on selectedFont and fontdetailname
    if (fontdetailname) {
      const isFontSelected = selectedFont.some(
        (font) => font.family === fontdetailname,
      )
      setSelected(isFontSelected)
    }
  }, [selectedFont, fontdetailname])

  const addFont = (font: Font) => {
    setSelectedFont((prevSelectedFonts) => {
      const updatedFonts = [...prevSelectedFonts, font]
      font.enabledVariants = font.variants
      localStorage.setItem('selectedFont', JSON.stringify(updatedFonts))
      return updatedFonts
    })
  }

  const removeFont = (family: string) => {
    setSelectedFont((prevSelectedFonts) => {
      const updatedFonts = prevSelectedFonts.filter(
        (font) => font.family !== family,
      )
      localStorage.setItem('selectedFont', JSON.stringify(updatedFonts))
      return updatedFonts
    })
  }

  const toggleVariant = (
    fontName: string,
    variant: string,
    enabled: boolean,
  ) => {
    setSelectedFont((prevSelectedFonts) => {
      const updatedFonts = prevSelectedFonts.map((font) => {
        if (font.family === fontName) {
          const enabledVariantsSet = new Set(font.enabledVariants)

          if (enabled) {
            enabledVariantsSet.add(variant) // Add variant to set
          } else {
            enabledVariantsSet.delete(variant) // Remove variant from set
          }
          font.enabledVariants = Array.from(enabledVariantsSet)
        }
        return font
      })
      return updatedFonts
    })
  }

  return (
    <AppContext.Provider
      value={{
        stroke,
        setStroke,
        filterLanguage,
        setFilterLanguage,
        fontdetailname,
        setFontDetailName,
        textPreview,
        setTextPreview,
        size,
        setSize,
        selectedFont,
        addFont,
        removeFont,
        selected,
        setSelected,
        toggleVariant,
        toggleSidebar,
        setToggleSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)

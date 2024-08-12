import { baseUrl } from '@/constants/BASE_URL'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = async (params: {
  language: string
  decorativeStroke: string
}) => {
  const { language, decorativeStroke } = params

  const apiKey = process.env.API_KEY

  // Build query parameters
  const queryParams = new URLSearchParams({
    key: apiKey || '',
    sort: 'popularity',
  })

  if (language !== 'All Language') {
    queryParams.append('subset', language)
  }

  if (decorativeStroke !== '') {
    queryParams.append('stroke', decorativeStroke)
  }

  // Final URL
  const url = `${baseUrl}?${queryParams.toString()}`

  // Fetch data
  const res = await axios.get(url)
  return res
}

// Create a hook to use this fetcher
const useGetFonts = (language: string, decorativeStroke: string) => {
  const { data, error } = useSWR(['fonts', language, decorativeStroke], () =>
    fetcher({ language, decorativeStroke }),
  )
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  }
}

async function fetchFontVariant(fontName: string) {
  const res = await axios.get(
    `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.API_KEY}&family=${fontName}`,
  )
  // console.log(res.data.items[0].variants);
  return res.data.items
}

const useGetFontVariantFile = (fontName: string) => {
  const { data, error } = useSWR(
    'fontVariant',
    () => fetchFontVariant(fontName),
    {
      revalidateOnFocus: false,
    },
  )
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export { useGetFonts, useGetFontVariantFile }

import ROUTES from '@/constants/routes/routes'
import { useAppContext } from '@/contexts/context'
import Link from 'next/link'

interface FontCardProps {
  fontName: string
  numVariants: number
  creator: string
}

export default function FontCard(props: FontCardProps) {
  const name = props.fontName
  const fontUrl = `https://fonts.googleapis.com/css?family=${name}`
  const { setFontDetailName, textPreview, size } = useAppContext()

  return (
    <Link href={ROUTES.FONTDETAIL + name}>
      <div
        className="flex flex-col min-w-fit border-solid border-b-2 p-5 hover:bg-slate-100 cursor-pointer rounded"
        onClick={() => setFontDetailName(name)}
        role="button"
        tabIndex={0}
        onKeyDown={() => {}}
      >
        <div className="flex gap-3 items-center">
          <h1 className="font-semibold">{name}</h1>
          <h2>{props.numVariants} variant</h2>
          <h2>|</h2>
          <h2>{props.creator}</h2>
        </div>

        <link rel="stylesheet" href={fontUrl}></link>
        <h2
          className="text-5xl pt-5 pb-5"
          style={{
            fontFamily: `${name}, sans-serif`,
            fontWeight: 400,
            fontSize: `${size})`,
          }}
        >
          {textPreview}
        </h2>
      </div>
    </Link>
  )
}

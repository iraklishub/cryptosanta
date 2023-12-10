import { gameiFrames } from '@/src/app/constants'

export default function Page({ params: { game } }) {
  const gameiFrame = gameiFrames.find((g) => g.id === game)

  return <div className="w-screen h-screen bg-black">{gameiFrame.frame}</div>
}

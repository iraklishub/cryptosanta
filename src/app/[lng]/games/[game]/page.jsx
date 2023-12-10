import { useGameiFrames } from '@/src/utils/hooks'

export default function Page({ params: { game } }) {
  const gameiFrame = useGameiFrames(game)

  return <>{gameiFrame}</>
}

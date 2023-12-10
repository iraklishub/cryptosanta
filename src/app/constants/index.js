export const translationNotCompleted = [
  'es',
  'de',
  'fr',
  'pt',
  'nl',
  'it',
  'pl',
  'uk',
  'cs',
  'hr',
  'sr',
  'sk',
  'sl',
  'be',
  'bg',
  'sv',
  'da',
  'no',
  'is',
  'ga',
  'fi',
  'et',
  'lt',
  'lv',
  'ro',
  'hu',
  'el',
  'hy',
  'ja',
  'ko'
]

export const routeNames = (lng) => ({
  homeRoute: '/',
  gamesRoute: `/${lng}/games`,
  mergeManiaRoute: `/${lng}/games/mergemania`,
  blazingBladeRoute: `/${lng}/games/blazingblade`,
  wordFinderRoute: `/${lng}/games/wordfinder`,
  ticTacToeRoute: `/${lng}/games/tictactoe`,
  brickPlungeRoute: `/${lng}/games/brickplunge`,
  escapeRunRoute: `/${lng}/games/escaperun`,
  towerTwistRoute: `/${lng}/games/towertwist`
})

export const gameiFrames = {
  mergeMania: (
    <iframe
      seamless="seamless"
      allowtransparency="true"
      allowFullScreen
      frameBorder="0"
      className="w-full h-full border-0"
      src="https://zv1y2i8p.play.gamezop.com/g/hfPOimYqY"
    ></iframe>
  ),
  blazingBlade: (
    <iframe
      seamless="seamless"
      allowtransparency="true"
      allowFullScreen
      frameBorder="0"
      className="w-full h-full border-0"
      src="https://zv1y2i8p.play.gamezop.com/g/UYiznUAya"
    ></iframe>
  ),
  wordFinder: (
    <iframe
      seamless="seamless"
      allowtransparency="true"
      allowFullScreen
      frameBorder="0"
      className="w-full h-full border-0"
      src="https://zv1y2i8p.play.gamezop.com/g/r1K-J3TQ5Ar"
    ></iframe>
  ),
  ticTacToe: (
    <iframe
      seamless="seamless"
      allowtransparency="true"
      allowFullScreen
      frameBorder="0"
      className="w-full h-full border-0"
      src="https://zv1y2i8p.play.gamezop.com/g/H1WmafkP9JQ"
    ></iframe>
  ),
  brickPlunge: (
    <iframe
      seamless="seamless"
      allowtransparency="true"
      allowFullScreen
      frameBorder="0"
      className="w-full h-full border-0"
      src="https://zv1y2i8p.play.gamezop.com/g/BJ9bvzIKdJl"
    ></iframe>
  ),
  escapeRun: (
    <iframe
      seamless="seamless"
      allowtransparency="true"
      allowFullScreen
      frameBorder="0"
      className="w-full h-full border-0"
      src="https://zv1y2i8p.play.gamezop.com/g/Skz4pzkDqyX"
    ></iframe>
  ),
  towerTwist: (
    <iframe
      seamless="seamless"
      allowtransparency="true"
      allowFullScreen
      frameBorder="0"
      className="w-full h-full border-0"
      src="https://zv1y2i8p.play.gamezop.com/g/HJT46GkPcy7"
    ></iframe>
  )
}

import towerTwistImage from '@/public/assets/images/games/towertwist.webp'
import ticTacToeImage from '@/public/assets/images/games/tictactoe.webp'
import brickPlungeImage from '@/public/assets/images/games/brickplunge.webp'
import mergeManiaImage from '@/public/assets/images/games/mergemania.webp'
import wordFinderImage from '@/public/assets/images/games/wordfinder.webp'
import blazingBladeImage from '@/public/assets/images/games/blazingblade.webp'
import escapeRunImage from '@/public/assets/images/games/escaperun.webp'

import christmasBubblesImage from '@/public/assets/images/games/christmasbubbles.webp'
import christmasDimensionsImage from '@/public/assets/images/games/christmasdimensions.webp'
import christmasConnectImage from '@/public/assets/images/games/christmasconnect.webp'
import christmasMysteriesImage from '@/public/assets/images/games/christmasmysteries.webp'
import happyChristmasImage from '@/public/assets/images/games/happychristmas.webp'
import xjongImage from '@/public/assets/images/games/xjong.webp'

export const routeNames = {
  gameRoutes: {
    christmasGameRoutes: {
      christmasBubblesRoute: `games/christmasbubbles`,
      christmasDimensionsRoute: `games/christmasdimensions`,
      christmasConnectRoute: `games/christmasconnect`,
      christmasMysteriesRoute: `games/christmasmysteries`,
      happyChristmasRoute: `games/happychristmas`,
      xjongRoute: `games/xjong`
    },
    otherGameRoutes: {
      mergeManiaRoute: `games/mergemania`,
      blazingBladeRoute: `games/blazingblade`,
      wordFinderRoute: `games/wordfinder`,
      ticTacToeRoute: `games/tictactoe`,
      brickPlungeRoute: `games/brickplunge`,
      escapeRunRoute: `games/escaperun`,
      towerTwistRoute: `games/towertwist`
    }
  }
}

export const gameiFrames = [
  {
    id: 'happychristmas',
    frame: (
      <iframe
        src="https://cdn.htmlgames.com/HappyChristmas/"
        seamless="seamless"
        allowtransparency="true"
        allowFullScreen
        frameBorder="0"
        className="w-full h-full border-0"
      ></iframe>
    )
  },
  {
    id: 'xjong',
    frame: (
      <iframe
        src="https://cdn.htmlgames.com/X-Jong/"
        seamless="seamless"
        allowtransparency="true"
        allowFullScreen
        frameBorder="0"
        className="w-full h-full border-0"
      ></iframe>
    )
  },
  {
    id: 'christmasbubbles',
    frame: (
      <iframe
        src="https://cdn.htmlgames.com/ChristmasBubbles/"
        seamless="seamless"
        allowtransparency="true"
        allowFullScreen
        frameBorder="0"
        className="w-full h-full border-0"
      ></iframe>
    )
  },
  {
    id: 'christmasdimensions',
    frame: (
      <iframe
        src="https://cdn.htmlgames.com/ChristmasDimensions/"
        seamless="seamless"
        allowtransparency="true"
        allowFullScreen
        frameBorder="0"
        className="w-full h-full border-0"
      ></iframe>
    )
  },
  {
    id: 'christmasconnect',
    frame: (
      <iframe
        src="https://cdn.htmlgames.com/ChristmasConnect/"
        seamless="seamless"
        allowtransparency="true"
        allowFullScreen
        frameBorder="0"
        className="w-full h-full border-0"
      ></iframe>
    )
  },
  {
    id: 'christmasmysteries',
    frame: (
      <iframe
        src="https://cdn.htmlgames.com/ChristmasMysteries/"
        seamless="seamless"
        allowtransparency="true"
        allowFullScreen
        frameBorder="0"
        className="w-full h-full border-0"
      ></iframe>
    )
  },
  {
    id: 'mergemania',
    frame: (
      <iframe
        seamless="seamless"
        allowtransparency="true"
        allowFullScreen
        frameBorder="0"
        className="w-full h-full border-0"
        src="https://zv1y2i8p.play.gamezop.com/g/hfPOimYqY"
      ></iframe>
    )
  },
  {
    id: 'blazingblade',
    frame: (
      <iframe
        seamless="seamless"
        allowtransparency="true"
        allowFullScreen
        frameBorder="0"
        className="w-full h-full border-0"
        src="https://zv1y2i8p.play.gamezop.com/g/UYiznUAya"
      ></iframe>
    )
  },
  {
    id: 'wordfinder',
    frame: (
      <iframe
        seamless="seamless"
        allowtransparency="true"
        allowFullScreen
        frameBorder="0"
        className="w-full h-full border-0"
        src="https://zv1y2i8p.play.gamezop.com/g/r1K-J3TQ5Ar"
      ></iframe>
    )
  },
  {
    id: 'tictactoe',
    frame: (
      <iframe
        seamless="seamless"
        allowtransparency="true"
        allowFullScreen
        frameBorder="0"
        className="w-full h-full border-0"
        src="https://zv1y2i8p.play.gamezop.com/g/H1WmafkP9JQ"
      ></iframe>
    )
  },
  {
    id: 'brickplunge',
    frame: (
      <iframe
        seamless="seamless"
        allowtransparency="true"
        allowFullScreen
        frameBorder="0"
        className="w-full h-full border-0"
        src="https://zv1y2i8p.play.gamezop.com/g/BJ9bvzIKdJl"
      ></iframe>
    )
  },
  {
    id: 'escaperun',
    frame: (
      <iframe
        seamless="seamless"
        allowtransparency="true"
        allowFullScreen
        frameBorder="0"
        className="w-full h-full border-0"
        src="https://zv1y2i8p.play.gamezop.com/g/Skz4pzkDqyX"
      ></iframe>
    )
  },
  {
    id: 'towertwist',
    frame: (
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
]

export const games = {
  christmasGames: [
    {
      title: 'Happy Christmas',
      link: routeNames.gameRoutes.christmasGameRoutes.happyChristmasRoute,
      image: happyChristmasImage
    },
    {
      title: 'X-Jong',
      link: routeNames.gameRoutes.christmasGameRoutes.xjongRoute,
      image: xjongImage
    },
    {
      title: 'Christmas Bubbles',
      link: routeNames.gameRoutes.christmasGameRoutes.christmasBubblesRoute,
      image: christmasBubblesImage
    },
    {
      title: 'Christmas Dimensions',
      link: routeNames.gameRoutes.christmasGameRoutes.christmasDimensionsRoute,
      image: christmasDimensionsImage
    },
    {
      title: 'Christmas Connect',
      link: routeNames.gameRoutes.christmasGameRoutes.christmasConnectRoute,
      image: christmasConnectImage
    },
    {
      title: 'Christmas Mysteries',
      link: routeNames.gameRoutes.christmasGameRoutes.christmasMysteriesRoute,
      image: christmasMysteriesImage
    }
  ],
  otherGames: [
    {
      title: 'Tower Twist',
      link: routeNames.gameRoutes.otherGameRoutes.towerTwistRoute,
      image: towerTwistImage
    },
    {
      title: 'Tic Tac Toe',
      link: routeNames.gameRoutes.otherGameRoutes.ticTacToeRoute,
      image: ticTacToeImage
    },
    {
      title: 'Brick Plunge',
      link: routeNames.gameRoutes.otherGameRoutes.brickPlungeRoute,
      image: brickPlungeImage
    },
    {
      title: 'Merge Mania',
      link: routeNames.gameRoutes.otherGameRoutes.mergeManiaRoute,
      image: mergeManiaImage
    },
    {
      title: 'Word Finder',
      link: routeNames.gameRoutes.otherGameRoutes.wordFinderRoute,
      image: wordFinderImage
    },
    {
      title: 'Blazing Blade',
      link: routeNames.gameRoutes.otherGameRoutes.blazingBladeRoute,
      image: blazingBladeImage
    },
    {
      title: 'Escape Run',
      link: routeNames.gameRoutes.otherGameRoutes.escapeRunRoute,
      image: escapeRunImage
    }
  ]
}

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

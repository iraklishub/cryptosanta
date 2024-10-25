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

export const marketItems = [
  {
    title: 'Old World Christmas Store',
    link: 'https://amzn.to/3uXqUkd',
    image:
      'https://m.media-amazon.com/images/S/abs-image-upload-na/5/AmazonStores/ATVPDKIKX0DER/97a5ffe851808f13e256348bc478caff.w2586.h517._CR0%2C0%2C2586%2C517_SX2586_.jpg'
  },
  {
    title: 'BriLove Store',
    link: 'https://amzn.to/41jLiIB',
    image:
      'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/ab0786c3-e235-43bd-abd4-bc6b491e6037._CR0%2C0%2C3000%2C600_SX3000_.jpg'
  },
  {
    title: 'Rubies Store',
    link: 'https://amzn.to/3RfFdrK',
    image:
      'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/fcdf3b98-0a34-4cb1-9600-56ed53fb8613._CR0%2C0%2C3000%2C600_SX3000_.jpg'
  },
  {
    title: 'Mr. Christmas Store',
    link: 'https://amzn.to/3REV7xk',
    image:
      'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/a6b18109-915d-4edc-9917-f089fd1be548._CR0%2C0%2C3000%2C600_SX3000_.jpg'
  },
  {
    title: 'Dr. Seuss Store',
    link: 'https://amzn.to/3t988Gh',
    image:
      'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/a8370586-70bd-4778-a798-d6fcbceb9865._CR0%2C0%2C3000%2C600_SX3000_.jpg'
  },
  {
    title: 'California Costume Collections Store',
    link: 'https://amzn.to/47XaLdk',
    image:
      'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/c4d9d9c5-59de-4cd5-8d2f-37a0cb2186c0._SL5000_CR0%2C0%2C5000%2C1000_SX3000_.jpg'
  },
  {
    title: 'Design Toscano Store',
    link: 'https://amzn.to/3RJBEvm',
    image:
      'https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/0/AmazonStores/ATVPDKIKX0DER/eec80c13042ae19d06b38f9cd8a99aa7.w3000.h600._CR0%2C0%2C3000%2C600_SX3000_.png'
  },
  {
    title: 'JMEXUSS Christmas Lights Store',
    link: 'https://amzn.to/41osRT1',
    image:
      'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/83e210fe-36f6-4b0c-88c8-ca664caaf5d5._CR0%2C0%2C3000%2C600_SX3000_.jpg'
  },
  {
    title: 'Alpine Corporation Store',
    link: 'https://amzn.to/41pg9Ub',
    image:
      'https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/3/AmazonStores/ATVPDKIKX0DER/8b95da7d3b17e481b3d4a5a06c783916.w3000.h600._CR0%2C0%2C3000%2C600_SX3000_.jpg'
  },
  {
    title: 'National Tree Company Store',
    link: 'https://amzn.to/3RfJFqs',
    image:
      'https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/6/AmazonStores/ATVPDKIKX0DER/34d76d02fce84f6945de77ca35cf9163.w3001.h601._CR0%2C0%2C3001%2C600_SX3000_.jpg'
  },
  {
    title: 'Lenox Christmas Store',
    link: 'https://amzn.to/3v1i1q1',
    image:
      'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/f56c2036-c7de-43b2-a422-04317e0efb9c._CR0%2C0%2C3000%2C600_SX3000_.jpg'
  },
  {
    title: 'Department 56 Store',
    link: 'https://amzn.to/3ths89u',
    image:
      'https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/c2aa74d6-1b7a-4496-b103-8b731a252a52._CR0%2C0%2C3000%2C600_SX3000_.jpg'
  }
]

export const fontFamilyOptions = [
  {
    value: 'Arial, sans-serif',
    label: 'Arial'
  },
  {
    value: 'Verdana, sans-serif',
    label: 'Verdena'
  },
  {
    value: 'Tahoma, sans-serif',
    label: 'Tahoma'
  },
  {
    value: "'Times New Roman', serif",
    label: 'Times New Roman'
  },
  {
    value: "'Trebuchet MS', sans-serif",
    label: 'Trebuchet MS'
  },
  {
    value: 'Georgia, serif',
    label: 'Georgia'
  },
  {
    value: 'Garamond, serif',
    label: 'Garamond'
  },
  {
    value: "'Courier New', monospace",
    label: 'Courier New'
  },
  {
    value: "'Brush Script MT', cursive",
    label: 'Brush Script MT'
  },
  {
    value: 'cursive',
    label: 'Cursive'
  },
  {
    value: 'fantasy',
    label: 'Fantasy'
  }
]

export const fontSizeOptions = [
  {
    value: '9px',
    label: '9px'
  },
  {
    value: '11px',
    label: '11px'
  },
  {
    value: '12px',
    label: '12px'
  },
  {
    value: '14px',
    label: '14px'
  },
  {
    value: '16px',
    label: '16px'
  },
  {
    value: '18px',
    label: '18px'
  },
  {
    value: '20px',
    label: '20px'
  },
  {
    value: '24px',
    label: '24px'
  },
  {
    value: '30px',
    label: '30px'
  },
  {
    value: '36px',
    label: '36px'
  },
  {
    value: '48px',
    label: '48px'
  },
  {
    value: '60px',
    label: '60px'
  },
  {
    value: '72px',
    label: '72px'
  },
  {
    value: '96px',
    label: '96px'
  },
  {
    value: '128px',
    label: '128px'
  }
]

export const cards = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/sbbcd/image/upload/v1729537097/santababu/cards/13_vmkaol.jpg'
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/sbbcd/image/upload/v1729537096/santababu/cards/12_m3dleu.jpg'
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/sbbcd/image/upload/v1729537095/santababu/cards/11_xsgtvy.jpg'
  },
  {
    id: 4,
    img: 'https://res.cloudinary.com/sbbcd/image/upload/v1729537093/santababu/cards/9_mgswas.jpg'
  },
  {
    id: 5,
    img: 'https://res.cloudinary.com/sbbcd/image/upload/v1729537093/santababu/cards/8_nitwg1.jpg'
  },
  {
    id: 6,
    img: 'https://res.cloudinary.com/sbbcd/image/upload/v1729537092/santababu/cards/7_om2br2.jpg'
  },
  {
    id: 7,
    img: 'https://res.cloudinary.com/sbbcd/image/upload/v1729537091/santababu/cards/6_aeji5s.jpg'
  },
  {
    id: 8,
    img: 'https://res.cloudinary.com/sbbcd/image/upload/v1729537089/santababu/cards/3_w14lv4.jpg'
  },
  {
    id: 9,
    img: 'https://res.cloudinary.com/sbbcd/image/upload/v1729537089/santababu/cards/4_opbjqx.jpg'
  },
  {
    id: 10,
    img: 'https://res.cloudinary.com/sbbcd/image/upload/v1729537089/santababu/cards/2_ntzjkp.jpg'
  },
  {
    id: 11,
    img: 'https://res.cloudinary.com/sbbcd/image/upload/v1729537088/santababu/cards/1_ee43qs.jpg'
  },
  {
    id: 12,
    isGrinch: true,
    img: 'https://res.cloudinary.com/sbbcd/image/upload/v1729537090/santababu/cards/5_syijk7.jpg'
  }
]

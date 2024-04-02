import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Tailwind,
  Section,
  Text
} from '@react-email/components'
import * as React from 'react'

const EmailTemplate = ({ name, wish, subject }) => (
  <Tailwind>
    <Html>
      <Head />
      <Body className="bg-white">
        <Container className="shadow-xl">
          <Section className="relative">
            <Img className="w-full" src="https://i.imgur.com/Z0uy5Ud.png" alt="topico" />
            <Heading
              as="h3"
              className="absolute w-full text-white top-4 font-semibold text-base md:text-lg lg:text-xl text-center"
            >
              {subject}: {name}
            </Heading>
            <Text className="px-20 text-base md:text-lg lg:text-xl">{wish}</Text>
            <Img className="w-full" src="https://i.imgur.com/KwCX6ek.png" alt="botico" />
          </Section>
        </Container>
      </Body>
    </Html>
  </Tailwind>
)

export default EmailTemplate

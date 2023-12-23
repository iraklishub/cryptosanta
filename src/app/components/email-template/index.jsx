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

const EmailTemplate = ({ name, email, wish, template, t }) => (
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
              {t.subject}: {name}
            </Heading>
            {template ? (
              <Text className="px-4 text-center text-base md:text-lg lg:text-xl">
                {t.template_t.dear_santa}, <br /> <br />
                {t.template_t.doing_well} <br /> <br />
                {t.template_t.my_name_is} {name}, <br /> <br />
                {t.template_t.good_this_year}, {t.template_t.ask_parents} {email} <br /> <br />
                {t.template_t.gift_this_christmas} {wish} <br /> <br />
                {t.template_t.merry_christmas_happy_new_year} <br /> <br />
                {t.template_t.with_love}, {name}.
              </Text>
            ) : (
              <Text className="px-20 text-base md:text-lg lg:text-xl">{wish}</Text>
            )}
            <Img className="w-full" src="https://i.imgur.com/KwCX6ek.png" alt="botico" />
          </Section>
        </Container>
      </Body>
    </Html>
  </Tailwind>
)

export default EmailTemplate

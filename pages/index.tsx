import Head from 'next/head'
import GlobalStyle from '../styles/global';
import { useState } from 'react'

import { 
  Container,
  ColorPickerInput,
  Color,
  ColorsContainer,
  ColorText,
  Title,
  Names,
  Nois,
  ClearButton,
} from '../styles/components'

const App: React.FC = () => {
  const [colors, setColors] = useState([])

  return (
    <>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet"></link>
        <script data-ad-client="ca-pub-7796659044812968" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <title>Color picker</title>
      </head>
      <GlobalStyle />
      <Container>
        <Title>Color Picker</Title>
        <ClearButton type="button" onClick={() => setColors([])}>Clear</ClearButton>
        <ColorPickerInput 
          type="color"
          onChange={(event) =>
            setColors([
              ...colors, 
              { backgroundColor: event.target.value}
            ])
          }
        />
        <ColorsContainer>
          {colors.map(({ backgroundColor }) => (
            <Color key={backgroundColor} nome={backgroundColor}>
              <ColorText>
                {backgroundColor.toUpperCase()}
              </ColorText>
            </Color>
          ))}
        </ColorsContainer>
        <Names>
          <Nois href="https://github.com/pedrohjleite">Pedro Leite</Nois> <Nois href="https://github.com/viniaxt">Vinícius Axt</Nois>
        </Names>
      </Container>
   </>
  )
}

export default App;
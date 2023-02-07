import React from 'react'
import Faq from 'react-faq-component'
import { Container, Jumbotron } from 'react-bootstrap'

const data = {
  title: 'FAQs',
  rows: [
    {
      title: 'LoremCed....',
      content: `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadummyaaaaaaaaa
      `,
    },
  ],
}

const styles = {
  bgColor: '#303030',
  titleTextColor: 'white',
  rowTitleColor: 'white',
  rowContentColor: 'white',
  arrowColor: 'white',
  rowContentPaddingTop: '10px',
  rowContentPaddingBottom: '10px',
  rowContentPaddingLeft: '10px',
  rowContentPaddingRight: '10px',
}

const config = {
  animate: true,
  arrowIcon: 'v',
  // tabFocus: true,
}

const faq = () => {
  return (
    <Container>
      <Jumbotron>
        <Faq data={data} styles={styles} config={config} />
      </Jumbotron>
    </Container>
  )
}

export default faq

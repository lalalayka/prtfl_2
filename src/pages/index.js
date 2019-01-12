import React from 'react';
import Card from '../components/card';
import staticdata from '../../staticdata.json'
import './index.css'
import Layout from '../components/layout'

const IndexPage = () => (
  <div className="container__main">
    <div className="main__intro">
      <span>
        <h1>Hello! my name is Sergey.</h1>
        <p>I’m working as communication designer since 2011. I have expertise in creation as online as offline products. Since the end of 2015 I started to gain experience in UI/UX design. In my past, I worked with such companies as Kommersant and Yandex. At this moment I’m employed as a senior graphic/web/UI designer in Exness, one of the top leaders’ forex broker. Located in Cyprus.</p>
        <p>If you are interested in doing some projects with my help or wanna just say «Hi!» or ask something, don’t be shy write me a letter. I would like to help you.</p>
      </span>
    </div>
    <div className="container__cards">
      {staticdata.cards.map(card => (
        <Card 
        key={card.title}
        title={card.title}
        tag={card.tag}
        image={card.image}
        link={card.link}/>
        ))}
    </div>
  </div>
)

export default () => (
  <Layout>
  <IndexPage />
  </Layout>
)
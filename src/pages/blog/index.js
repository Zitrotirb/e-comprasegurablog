import React from 'react'

import Layout from '../../components/Layout'
import Posts from '../../components/Dicas/posts'


export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
       
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#4762e5',
              color: 'white',
              padding: '1rem',
            }}
          >
            Todas as dicas
          </h1>
        
        <section className="section">
          <div className="container">
            <div className="content">
              <Posts />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

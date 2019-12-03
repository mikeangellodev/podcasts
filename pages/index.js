import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <>
        <h1>Hello Platzi!</h1>
        <p>Welcome to the Next.js course</p>
        <img src="/static/platzi-logo.png" alt="Platzi"/>

        <style jsx>{`
          h1 {
            color: red;
          }
          :global(p) {
            color: green;
          }
          img {
            max-width: 30%;
            display: block;
            margin: 0 auto;
          }
        `}</style>
        
        <style jsx global>{`
          body {
            background-color: white;
          }
        `}</style>
      </>
    )
  }
}

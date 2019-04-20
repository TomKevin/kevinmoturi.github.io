import React, { Component } from 'react';
import './App.css';

let index = 0;

class App extends Component {

  next = () => {

      if(index < 5) {

          const sections = document.querySelectorAll('section');

          index++;

          sections.forEach((section, i) => {

              if(i === index) {

                  section.scrollIntoView({behavior: 'smooth'});

              }
              
          });

      }

  }

  prev = () => {

      if(index > 0) {

          const sections = document.querySelectorAll('section');

          index--;

          sections.forEach((section, i) => {

              if(i === index) {

                  section.scrollIntoView({behavior: 'smooth'});

              }
              
          });

      }

  }

  render() {

    return (

      <div className="main">

        <div className="content">
        
          <section>

            <div className="overlay"></div>

            <div className="wrapper">

              <div className="intro">

                <h1>Hi, I`m Kevin</h1>

                <p>Full Stack Software Developer</p>

              </div>

            </div>
          
          </section>
        
          <section>
          
            <h1>Section 2</h1>
          
          </section>
        
          <section>
          
            <h1>Section 3</h1>
          
          </section>
        
          <section>
          
            <h1>Section 4</h1>
          
          </section>
        
          <section>
          
            <h1>Section 5</h1>
          
          </section>
        
          <section>
          
            <h1>Section 6</h1>
          
          </section>
        
        </div>

        <div className="nav">

          <button className="prev" onClick={() => this.prev()} id="prev">Previous</button>

          <button className="next" onClick={() => this.next()} id="next">Next</button>

        </div>
        
      </div>

    );

  }

}

export default App;

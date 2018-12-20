import React from 'react'
import { Grid, } from 'semantic-ui-react'


const TopHeader = () => (
    <>
        <style>{`
      .top-container {
        background: radial-gradient(white, #f8f9fa, #f9dd8c);

      }
      p {
        align-content: center;
        color: #cb5351;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 6em;
      }
      p > span {
        opacity: 0.4;
        text-align: center;
      }
    }
    `}</style>
        <div className="top-container">
            <Grid columns='equal'>
                <Grid.Row columns='equal'>

                    <Grid.Column>
                        <p>
                            <br></br>
                            <br></br>
                            <h1><span role="img" aria-label="cake">🍰</span><span style={{ fontSize: "1.5em" }}>Piece-A-Cake
                                <span role="img" aria-label="cake2">🎂</span>
                                <h3 id="subtitle" style={{ color: 'black' }}>All occassion cakes and other desserts</h3>
                            </span>
                            </h1>

                        </p>
                    </Grid.Column>

                </Grid.Row>
                <Grid.Row columns='equal'>
                    <Grid.Column>
                        <p>
                            <span>Annette Plukarski</span>
                            <span>anet417@sbcglobal.net</span>

                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <p>
                            <span>Oak Forest, Illinois</span>
                            <span>(708) 555 4200</span>

                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div >
    </>
)

export default TopHeader
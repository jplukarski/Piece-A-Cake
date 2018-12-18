import React from 'react'
import { Container, Grid, } from 'semantic-ui-react'


const AnotherGridLayout = () => (
    <Container>

        <style>{`
      html, body {
        background-image: url("https://wallpapercave.com/wp/wp2610943.jpg")
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

        <Grid columns='equal'>
            <Grid.Row columns='equal'>
                <Grid.Column>
                    <p>
                        <span>
                            Birthday Parties <br></br>Graduations
                        </span>
                    </p>
                </Grid.Column>
                <Grid.Column>
                    <p>
                        <br></br>
                        <br></br>
                        <h1><span role="img" aria-label="cake">🍰</span><span style={{ fontSize: "1.5em" }}>Piece-A-Cake</span><span role="img" aria-label="cake2">🎂</span></h1>
                        <h3 id="subtitle" style={{ color: 'black' }}>All occassion cakes</h3>

                    </p>
                </Grid.Column>
                <Grid.Column>
                    <p>
                        <span>Reuinions<br></br>Anniversaries</span>
                    </p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns='equal'>
                <Grid.Column>
                    <p>
                        <span>Annette Plukarski</span>
                    </p>
                </Grid.Column>
                <Grid.Column>
                    <p>
                        <span>Oak Forest, Il</span>
                    </p>
                </Grid.Column>
            </Grid.Row>
        </Grid>

    </Container >
)

export default AnotherGridLayout
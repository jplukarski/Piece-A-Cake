import React from 'react'
import { Segment, Container, Input, Button } from 'semantic-ui-react'
import PictureUploader from './pictureUploader'
import API from "../../utils/API";



export default class MyForm extends React.Component {
    state = {
        occassion: "",
        dessert: "",
        description: "",
        image: [],
        instagram_link: "",
        facebook_link: "",
        tags: [],
        new_tag: ""
    };

    getPhotos = image => {
        console.log("This is getting done");
        this.setState({ image });
    };

    getMainPhoto = main_picture => {
        this.setState({ main_picture });
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    addTag = () => {
        var newTag = this.state.new_tag
        console.log(newTag)
        this.setState({ tags: this.state.tags.concat(newTag) })
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.occassion) {

            API.saveDessert({
                occassion: this.state.occassion,
                dessert: this.state.dessert,
                description: this.state.description,
                image: this.state.image,
                instagram_link: this.state.instagram_link,
                facebook_link: this.state.facebook_link,
                tags: this.state.tags,
            })
                .then(alert("Thanks for the entry!"))
                .catch(err => console.log(err));
        }
    }

    render() {
        return (
            <Container>
                <Segment>
                    <h1>
                        Enter new dessert here.
                    </h1>

                    <hr></hr>
                    <div>
                        <Input list='occassions' placeholder='Choose occassion...' name="occassion" onChange={this.handleInputChange} />
                        <datalist id='occassions'>
                            <option value='Birthday' />
                            <option value='Anniversary' />
                            <option value='Graduation' />
                            <option value='Other' />
                        </datalist>
                    </div>
                    <div>
                        <Input list='desserts' placeholder='Choose dessert...' name="dessert" onChange={this.handleInputChange} />
                        <datalist id='desserts'>
                            <option value='Cakes' />
                            <option value='Cookies' />
                            <option value='Cupcakes' />
                            <option value='Other' />
                        </datalist>
                    </div>
                    <div>
                        <Input
                            placeholder='Description:'
                            name="description"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <Input
                            placeholder='Facebook Link:'
                            name="facebook_link"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <Input
                            placeholder='Instagram Link:'
                            name="instagram_link"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                        <Input
                            placeholder='Add Tag'
                            name="new_tag"
                            onChange={this.handleInputChange}
                        />
                        <Button onClick={this.addTag}>Add Tag</Button>
                        <Input
                            value={this.state.tags}
                            icon='tag'
                            iconPosition='left'
                        />
                    </div>

                    <PictureUploader getPhotos={this.getPhotos} />
                    <Button primary onClick={this.handleSubmitForm}>Submit Entry</Button>
                </Segment>
            </Container>
        )
    }
}
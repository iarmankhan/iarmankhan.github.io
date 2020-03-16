import React, {Component} from "react";
import {projects} from "../../data/projects";
import PortfolioItem from "../Portfolio-Item/Portfolio-Item.component";
import {PortfolioContainer, PortfolioGroup} from "./Portfolio.styles";

class Portfolio extends Component{
    constructor(props) {
        super(props);

        this.state = {
            projects: projects
        }
    }
    render() {
        const {projects} = this.state;
        let {count} = this.props;

        if(count === undefined) count = projects.length;

        return (
            <PortfolioContainer>
                <div>
                    <PortfolioGroup>
                        {projects
                            .filter(project => project.id <= count)
                            .map(({id, name, url, image, description}) => <PortfolioItem key={id} description={description} image={image} title={name} url={url} />)}
                    </PortfolioGroup>
                </div>
            </PortfolioContainer>
        )
    }
}

export default Portfolio
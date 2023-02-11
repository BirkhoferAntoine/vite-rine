import {Component} from "react";
import {GsapTrainingComponent} from "./GsapTrainingComponent.jsx";
import {Container, Typography} from "@mui/material";
export class Homepage extends Component {
    constructor() {
        super();

    }

    render() {

        const sxStyles = {
            mainBg: {

            }
        };

        return (
            <>
                <main>
                <Container>
                    <Typography variant={'h1'}>Hello wurld</Typography>
                </Container>
                </main>
            </>
        );
    }
}
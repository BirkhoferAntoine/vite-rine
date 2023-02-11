import {Component} from "react";
import {GsapTrainingComponent} from "./GsapTrainingComponent.jsx";
import {Container, Paper, Typography} from "@mui/material";
export class Homepage extends Component {
    render() {

        const sxStyles = {
            mainBg: {

            }
        };

        return (
            <>
                <Container>
                    <Paper>
                        <Typography variant={'h1'}>Hello wurld</Typography>
                    </Paper>
                </Container>
            </>
        );
    }
}
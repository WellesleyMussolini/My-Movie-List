import React from "react";
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import AlertTitle from '@mui/material/AlertTitle';
import { Container, ShowAlert } from "./basic-alert.styles";

const BasicAlert = ({
    OpenSucessAlert,
    HandleSucessAlert,
    SucessAlertText,
    OpenWarnAlert,
    HandleWarnAlert,
    WarnAlertText,
    OpenErrorAlert,
    HandleErrorAlert,
    ErrorAlertText,
}) => {
    if (OpenSucessAlert) {
        setTimeout(() => {
            HandleSucessAlert(false);
        }, 2000);
    }
    if (OpenWarnAlert) {
        setTimeout(() => {
            HandleWarnAlert(false);
        }, 2000);
    }
    if (OpenErrorAlert) {
        setTimeout(() => {
            HandleErrorAlert(false);
        }, 2000);
    }
    return (
        <Container spacing={2}>
            <Collapse in={OpenSucessAlert}>
                <ShowAlert
                    variant="filled"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                HandleSucessAlert(false);
                            }}>
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }>
                    <AlertTitle>SUCESS</AlertTitle>
                    {SucessAlertText}
                </ShowAlert>
            </Collapse>

            <Collapse in={OpenWarnAlert}>
                <ShowAlert
                    variant="filled"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                HandleWarnAlert(false);
                            }}>
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    severity="warning">
                    <AlertTitle>WARNING</AlertTitle>
                    {WarnAlertText}
                </ShowAlert>
            </Collapse>

            <Collapse in={OpenErrorAlert}>
                <ShowAlert
                    variant="filled"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            onClick={() => {
                                HandleErrorAlert(false);
                            }}>
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    severity="error">
                    {ErrorAlertText}
                </ShowAlert>
            </Collapse>
        </Container>
    )
};

export default BasicAlert;
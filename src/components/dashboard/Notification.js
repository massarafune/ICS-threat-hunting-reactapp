import {
    IconButton,
    Snackbar
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import mqtt from 'mqtt';
import React, {useState} from 'react';

const options = {
    protocol: 'mqtts',
    clientId: 'sid'
};

const client = mqtt.connect('mqtt://test.qut.edu.au:8081');

client.subscribe('ics');

const Notification = (props) => {
    const [mesg, setMesg] = useState('');
    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open);
    }
    var note;
    client.on('message', (topic, message) => {
        note = message.toString();
        setMesg(note);
        setOpen(true);
        console.log(note);
    });

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            autoHideDuration={5000}
            onClose={handleOpen}
            message='Attack Detected'
            action={
                <React.Fragment>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleOpen}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
            }
        />

    );
}

export default Notification;

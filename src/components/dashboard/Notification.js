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

const client = mqtt.connect('mqtt://test.mosquitto.org:8080');

client.subscribe('ics');

const Notification = (props) => {
    const [mesg, setMesg] = useState('');
    const [open, setOpen] = useState(false);

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
            message='Attack Detected: Click to reload the table'
            onClick={()=>window.location.reload(false)}
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

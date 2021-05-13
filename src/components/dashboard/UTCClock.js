import {
    Box,
    Card,
    CardContent,
    Grid,
    Typography
} from '@material-ui/core';
import { useState, useEffect } from 'react';

const UTCClock = (props) => {
    const now = new Date;
    const [time, setTime] = useState(now.toUTCString());
    const updateClock = () => {
        const now = new Date;
        const time = now.toUTCString();
        setTime(time);
    };

    useEffect(()=>{
        const interval = setInterval(()=>{
            updateClock();
        },1000);
        return () => clearInterval(interval);
    },[])

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return (
        <Card
            sx={{height: '100%'}}
        >
            <CardContent>
                <Grid
                    container
                    spacing={3}
                    sx={{justifyContent: 'space-between'}}
                >
                    <Grid item>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="h6"
                        >
                            GMT
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h3"
                        >
                            {time}
                        </Typography>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        pt: 2,
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >


                </Box>
            </CardContent>
        </Card>
    );
}

export default UTCClock;

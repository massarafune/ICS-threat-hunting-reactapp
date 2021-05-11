import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import { indigo, red } from '@material-ui/core/colors';

import { useState, useEffect } from 'react';

const Clock = (props) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString('it-IT'));

    const updateClock = () => {
        const time = new Date().toLocaleTimeString('it-IT');
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
                            LOCAL TIME
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h3"
                        >
                            {time}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                            sx={{
                                backgroundColor: indigo[600],
                                height: 56,
                                width: 56
                            }}
                        >
                            <MoneyIcon/>
                        </Avatar>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        pt: 2,
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Typography
                        sx={{
                            mr: 1
                        }}
                        color="textSecondary"
                        variant="caption"
                    >
                        Your Timezone
                    </Typography>
                    <Typography
                        sx={{
                            color: indigo[900],
                            mr: 1
                        }}
                        variant="body2"
                    >
                        {timezone}
                    </Typography>

                </Box>
            </CardContent>
        </Card>
    );
}

export default Clock;

import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Typography
} from '@material-ui/core';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import { red } from '@material-ui/core/colors';


const TotalAttack = (props) => {
    console.log(props.srcIP)
    const number = props.srcIP.length;

    return (
        <Card {...props}>
            <CardContent>
                <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'space-between' }}
                >
                    <Grid item>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="h6"
                        >
                            TOTAL ATTACK
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h3"
                        >
                            {number}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                            sx={{
                                backgroundColor: red[600],
                                height: 56,
                                width: 56
                            }}
                        >
                            <FingerprintIcon />
                        </Avatar>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default TotalAttack;

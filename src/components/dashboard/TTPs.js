import {
    Button,
    Box,
    Card,
    CardContent,
    Grid,
    Typography
} from '@material-ui/core';
import { indigo, red } from '@material-ui/core/colors';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    card: {
        backgroundColor: '#848484 !important'
    },
    root: {
        backgroundColor: '#848484 !important'
    },
    link: {
        marginTop: '40px !important'
    }
}));

const TTPs = (props) => {
    const classes = useStyles();
    return (
        <Card
            sx={{height: '100%'}}
            variant="outlined"
            className={classes.root}
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
                            MITRE ATT&CK Technique ID: {props.ttp.external_references[0].external_id}
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h3"
                        >
                            {props.ttp.name}
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
                    <Typography
                        sx={{
                            mr: 1
                        }}
                        color="textSecondary"
                        variant="caption"
                    >
                        Description
                    </Typography>
                    <Typography
                        sx={{
                            color: indigo[900],
                            mr: 1
                        }}
                        variant="body2"
                    >
                        {props.ttp.description}
                    </Typography>
                </Box>
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
                        Data Sources
                    </Typography>
                    {props.ttp.x_mitre_data_sources.map((source)=>(
                    <Typography
                        sx={{
                            color: indigo[900],
                            mr: 1
                        }}
                        variant="body2"
                        key={source}
                    >
                        {source}
                    </Typography>
                    )
                )}
                </Box>
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
                        Platforms
                    </Typography>
                    {props.ttp.x_mitre_platforms.map((platform)=>(
                            <Typography
                                sx={{
                                    color: indigo[900],
                                    mr: 1
                                }}
                                variant="body2"
                                key={platform}
                            >
                                {platform}
                            </Typography>
                        )
                    )}
                </Box>
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
                        {props.ttp.external_references[1].description}
                    </Typography>
                </Box>
                <Button className={classes.link} variant="contained" color="primary" href={props.ttp.external_references[0].url} target="_blank" rel="noreferrer">
                    External source
                </Button>
            </CardContent>
        </Card>
    );
}

export default TTPs;

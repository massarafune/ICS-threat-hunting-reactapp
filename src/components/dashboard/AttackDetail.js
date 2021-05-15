import {
    AppBar,
    Container,
    Grid,
    IconButton,
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    Toolbar,
    Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import TTPs from "./TTPs";
import useElasticTTPsAPI from "../../modules/useElasticTTPsAPI";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
    },
    appBar: {
        position: 'relative !important',
    },
    title: {
        flex: 1,
    },
    nav: {
        width: 240,
    }
}));



export default function AttackDetail(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const {list, loading, err} = useElasticTTPsAPI(props.attack.Tactics, props.attack.Technique)
    const handleClick = () => {
        setOpen(!open);
    };

return (
    <div>
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={props.close} aria-label="close">
                    <CloseIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Attack Overview
                </Typography>

            </Toolbar>
        </AppBar>
        <div className={classes.root}>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Attack Analysis
                    </ListSubheader>
                }
                className={classes.nav}
            >
                <ListItem button>

                    <ListItemText primary="Observed At" secondary={props.attack.TimeStamp}/>
                </ListItem>
                <ListItem button>

                    <ListItemText primary="Attacker's IP address" secondary={props.attack.SrcIP} />
                </ListItem>
                <ListItem button onClick={handleClick}>

                    <ListItemText primary="Tactics" secondary={props.attack.Tactics}/>
                </ListItem>
                        <ListItem button>
                            <ListItemText primary="Techniques" secondary={props.attack.Technique} />
                        </ListItem>
            </List>
            <Container maxWidth={false}>
                <Grid
                    container
                    spacing={3}
                    marginTop={0}
                >
                <Grid
                    item
                    lg={12}
                    sm={18}
                    xl={9}
                    xs={12}
                >
                    {!loading &&
                        <TTPs ttp={list}/>
                    }

                </Grid>
                </Grid>
            </Container>

        </div>
    </div>
);
}
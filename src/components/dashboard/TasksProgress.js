import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Typography
} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

const TasksProgress = (props) => (
    <Card
        sx={{ height: '100%' }}
        {...props}
    >
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
                        TASKS PROGRESS
                    </Typography>
                    <Typography
                        color="textPrimary"
                        variant="h3"
                    >
                        Every 5 mins
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar
                        sx={{
                            backgroundColor: orange[600],
                            height: 56,
                            width: 56
                        }}
                    >
                        <InsertChartIcon />
                    </Avatar>
                </Grid>
            </Grid>

        </CardContent>
    </Card>
);

export default TasksProgress;
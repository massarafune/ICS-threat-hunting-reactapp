import { Doughnut } from 'react-chartjs-2';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Typography,
    colors,
    useTheme
} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIcon from '@material-ui/icons/Phone';
import TabletIcon from '@material-ui/icons/Tablet';

const TrafficByIP = (props) => {
    const theme = useTheme();
    const srcIPlist = props.srcIP.reduce((acc, curr)=>{
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{});
    const numbers = Object.values(srcIPlist);
    const IPaddress = Object.keys(srcIPlist);

    console.log(srcIPlist)
    const data = {
        datasets: [
            {
                data: numbers,
                backgroundColor: [
                    colors.indigo[500],
                    colors.red[600],
                    colors.orange[600]
                ],
                borderWidth: 2,
                borderColor: colors.common.white,
                hoverBorderColor: colors.common.white
            }
        ],
        labels: IPaddress
    };

    const options = {
        animation: false,
        cutoutPercentage: 80,
        layout: { padding: 0 },
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
            backgroundColor: theme.palette.background.paper,
            bodyFontColor: theme.palette.text.secondary,
            borderColor: theme.palette.divider,
            borderWidth: 1,
            enabled: true,
            footerFontColor: theme.palette.text.secondary,
            intersect: false,
            mode: 'index',
            titleFontColor: theme.palette.text.primary
        }
    };

    return (
        <Card {...props}>
            <CardHeader title="Attacks by source IP address" />
            <Divider />
            <CardContent>
                <Box
                    sx={{
                        height: 300,
                        position: 'relative'
                    }}
                >
                    <Doughnut
                        data={data}
                        options={options}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        pt: 2
                    }}
                >
                    {/*{devices.map(({*/}
                    {/*                  color,*/}
                    {/*                  icon: Icon,*/}
                    {/*                  title,*/}
                    {/*                  value*/}
                    {/*              }) => (*/}
                    {/*    <Box*/}
                    {/*        key={title}*/}
                    {/*        sx={{*/}
                    {/*            p: 1,*/}
                    {/*            textAlign: 'center'*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        <Icon color="action" />*/}
                    {/*        <Typography*/}
                    {/*            color="textPrimary"*/}
                    {/*            variant="body1"*/}
                    {/*        >*/}
                    {/*            {title}*/}
                    {/*        </Typography>*/}
                    {/*        <Typography*/}
                    {/*            style={{ color }}*/}
                    {/*            variant="h2"*/}
                    {/*        >*/}
                    {/*            {value}*/}
                    {/*            %*/}
                    {/*        </Typography>*/}
                    {/*    </Box>*/}
                    {/*))}*/}
                </Box>
            </CardContent>
        </Card>
    );
};

export default TrafficByIP;

import { Helmet } from 'react-helmet';
import {useState, useEffect} from "react";
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import Budget from 'src/components/dashboard//Budget';
import Clock from 'src/components/dashboard//Clock';
import UTCClock from 'src/components/dashboard//UTCClock'
import LatestOrders from 'src/components/dashboard//LatestOrders';
import LatestAttacks from "../components/dashboard/LatestAttacks";
import LatestProducts from 'src/components/dashboard//LatestProducts';
import Sales from 'src/components/dashboard//Sales';
import TasksProgress from 'src/components/dashboard//TasksProgress';
import TotalCustomers from 'src/components/dashboard//TotalCustomers';
import TotalProfit from 'src/components/dashboard//TotalProfit';
import TotalAttack from "../components/dashboard/TotalAttack";
import ListofTTPs from "../components/dashboard/ListofTTPs";
import TrafficByIP from 'src/components/dashboard//TrafficByIP';

const Dashboard = () => {
    const [srcIP, setSrcIP] = useState([]);

  return (
      <>
        <Helmet>
          <title>Dashboard | Threat Hunting for ICS</title>
        </Helmet>
        <Box
            sx={{
              backgroundColor: 'background.default',
              minHeight: '100%',
              py: 3
            }}
        >
          <Container maxWidth={false}>
            <Grid
                container
                spacing={3}
            >
              <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
              >
                <Clock />
              </Grid>
              <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
              >
                <UTCClock />
              </Grid>
              <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
              >
                <TasksProgress />
              </Grid>
              <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
              >
                <TotalAttack srcIP={srcIP} sx={{ height: '100%' }} />
              </Grid>
              <Grid
                  item
                  lg={12}
                  md={18}
                  xl={9}
                  xs={12}
              >
                <LatestAttacks srcIP={(srcIP)=>setSrcIP(srcIP)}/>
              </Grid>
              <Grid
                  item
                  lg={4}
                  md={6}
                  xl={3}
                  xs={12}
              >
                <TrafficByIP srcIP={srcIP} sx={{ height: '100%' }} />
              </Grid>
              <Grid
                  item
                  lg={8}
                  md={12}
                  xl={9}
                  xs={12}
              >
                <ListofTTPs sx={{ height: '100%' }} />
              </Grid>

            </Grid>
          </Container>
        </Box>
      </>
  );
}

export default Dashboard;

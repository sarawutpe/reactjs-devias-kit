import { Box, Container, Grid } from "@mui/material";
import { Budget } from "../components/Dashboard/Budget";
import { LatestOrders } from "../components/Dashboard/LatestOrders";
import { LatestProducts } from "../components/Dashboard/LatestProducts";
import { TasksProgress } from "../components/Dashboard/TasksProgress";
import { TotalCustomers } from "../components/Dashboard/TotalCustomers";
import { TotalProfit } from "../components/Dashboard/TotalProfit";
import DashboardLayout from "../components/DashboardLayout";

const Dashboard: React.FC<any> = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Budget />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalCustomers />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TasksProgress />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalProfit sx={{ height: "100%" }} />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <LatestProducts sx={{ height: "100%" }} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;

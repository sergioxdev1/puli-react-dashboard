import React from 'react';
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  makeStyles,
} from '@material-ui/core';
import Statistics from './Components/Statistics';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import { Line, Doughnut } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
  '.MuiCardHeader-title': {
    color: 'red',
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4">Dashboard</Typography>
      <Grid container alignItems="center" alignContent="center">
        <Grid>
          <Statistics
            color="blue"
            heading="EARNINGS (MONTHLY)"
            subHeading="$50,000"
            icon={<AssignmentIcon fontSize="large" />}
          />
        </Grid>

        <Grid>
          <Statistics
            color="#1cc88a"
            heading="EARNINGS (ANNUAL)"
            subHeading="$200,000"
            icon={<AttachMoneyIcon fontSize="large" />}
          />
        </Grid>

        <Grid>
          <Statistics
            color="#36b9cc"
            heading="TASKS"
            type="progress"
            value={50}
            subHeading="50%"
            icon={<AssignmentTurnedInIcon fontSize="large" />}
          />
        </Grid>

        <Grid>
          <Statistics
            color="orange"
            heading="PENDING REQUESTS"
            subHeading="20"
            icon={<QuestionAnswerRoundedIcon fontSize="large" />}
          />
        </Grid>
      </Grid>

      <Grid container alignItems="center" alignContent="center">
        <Grid xs={12} sm={6} md={6} lg={6} style={{ padding: '10px' }}>
          <div className="card">
            <div className="card-header" style={{ color: '#4e73df' }}>
              <b>Earnings Overview</b>
            </div>
            <Line
              data={{
                labels: ['Jan', 'Mar', 'May', 'Jul', 'Sept', 'Nov'],
                datasets: [
                  {
                    label: 'Earnings Overview',
                    data: [
                      0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000,
                      30000,
                    ],
                    fill: false,
                    backgroundColor: '#4e73df',
                    borderColor: '#4e73df',
                    tension: 0.4,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: true,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              }}
            />
          </div>
        </Grid>

        <Grid xs={12} sm={6} md={6} lg={6} style={{ padding: '10px' }}>
          <div className="card">
            <div className="card-header" style={{ color: '#4e73df' }}>
              <b>Revenue Sources</b>
            </div>
            <Doughnut
              style={{ width: '100%', height: '100%' }}
              data={{
                labels: ['Social', 'Direct', 'Referral'],
                datasets: [
                  {
                    label: 'Revenue Sources',
                    data: [55, 30, 5],
                    backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
                    borderColor: ['#4e73df', '#1cc88a', '#36b9cc'],
                    borderWidth: 1,
                    weight: 0.5,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: true,
                aspectRatio: 3,
                cutout: 40,
              }}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

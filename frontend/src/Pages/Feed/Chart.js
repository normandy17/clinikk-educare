import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    LineSeries,
    Title,
    Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import {
    curveCatmullRom,
    line,
} from 'd3-shape';
import { scalePoint, scaleTime } from 'd3-scale';

const data = [

    { date: new Date(2020, 0, 16), min: 243 },
    { date: new Date(2020, 1, 21), min: 342 },
    { date: new Date(2020, 3, 25), min: 342 },
    { date: new Date(2020, 4, 29), min: 222 },
    { date: new Date(2020, 5, 20), min: 333 },
    { date: new Date(2020, 0, 8), min: 445 },
    { date: new Date(2020, 1, 9), min: 128 },
    { date: new Date(2020, 2, 9), min: 251 },
    { date: new Date(2020, 3, 6), min: 103 },
    { date: new Date(2020, 4, 4), min: 392 },
    { date: new Date(2020, 5, 11), min: 247 },
    { date: new Date(2020, 6, 19), min: 203 },
    { date: new Date(2020, 0, 23), min: 538 },
    { date: new Date(2020, 1, 10), min: 525 },
    { date: new Date(2020, 2, 6), min: 579 },
    { date: new Date(2020, 3, 7), min: 613 },
    { date: new Date(2020, 4, 9), min: 511 },
    { date: new Date(2020, 5, 6), min: 553 },
    { date: new Date(2020, 6, 18), min: 400 },
];

data.sort((a, b) => a.date - b.date)

const Line = props => (
    <LineSeries.Path
        {...props}
        path={line()
            .x(({ arg }) => arg)
            .y(({ val }) => val)
            .curve(curveCatmullRom)}
    />
);

const titleStyles = {
    title: {
        textAlign: 'center',
        width: '100%',
        marginBottom: '10px',
    },
};
const Text = withStyles(titleStyles)((props) => {
    const { text, classes } = props;
    const [mainText, subText] = text.split('\\n');
    return (
        <div className={classes.title}>
            <Typography component="h3" variant="h5">
                {mainText}
            </Typography>
            <Typography variant="subtitle1">{subText}</Typography>
        </div>
    );
});

const legendStyles = () => ({
    root: {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'row',
    },
});
const legendLabelStyles = theme => ({
    label: {
        marginBottom: theme.spacing(1),
        whiteSpace: 'nowrap',
    },
});
const legendItemStyles = () => ({
    item: {
        flexDirection: 'column-reverse',
    },
});

const legendRootBase = ({ classes, ...restProps }) => (
    <Legend.Root {...restProps} className={classes.root} />
);
const legendLabelBase = ({ classes, ...restProps }) => (
    <Legend.Label className={classes.label} {...restProps} />
);
const legendItemBase = ({ classes, ...restProps }) => (
    <Legend.Item className={classes.item} {...restProps} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);
const Item = withStyles(legendItemStyles, { name: 'LegendItem' })(legendItemBase);
const demoStyles = () => ({
    chart: {
        padding: '10px',
        maxHeight:"250px"
    },
});

class Graph extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data,
        };
    }

    render() {
        const { data: chartData } = this.state;
        const { classes } = this.props;

        return (
            <Paper>
                <Chart
                    data={chartData}
                    className={classes.chart}
                >
                    <ArgumentScale factory={scaleTime} />
                    <ArgumentAxis />
                    <ValueAxis />

                    <LineSeries
                        valueField="min"
                        argumentField="date"
                        seriesComponent={Line}
                    />

                    <Animation />
                </Chart>
            </Paper>
        );
    }
}

export default withStyles(demoStyles, { name: 'Graph' })(Graph);

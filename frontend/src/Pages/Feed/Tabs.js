import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Graph from "./Chart"
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "none",
        width: "100%",
    },
}));

export default function FullWidthTabs(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const course = [...props.courses]
    course.length = 3
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
                <div style={{display:"flex",justifyContent:"space-between", width:"100%"}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Learning Hours" {...a11yProps(0)} />
                    <Tab label="My Courses" {...a11yProps(1)} />
                    
                </Tabs>
                {value===0 && <select style={{weidth:"300px", height:"30px", borderRadius:"5px",background:"#F5F5F7", border:"none"}} name="cars" id="cars">
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                </select> }
               </div>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                   <Graph style={{maxHeight:"300px"}}></Graph>
        </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                {course.map((item) => (
                        <div style={{ width: "100%", height: "75px", marginBottom: "20px", borderRadius: "10px", display: "grid", gridTemplateColumns: "10% 40% 20% 10%  20%", alignItems: "center", boxSizing: "border-box", padding: "10px", background:"#F5F5F7" }}>
                            <div style={{ width: "50px", height: "50px", borderRadius: "10px",  marginRight: "10%",backgroundSize: "100% 100%", backgroundImage: `url(${"data:image/jpeg;base64,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"})` }}>
                            </div>
                            <div><a>{item.name}</a><br /><a style={{ fontSize: "smaller" }}>{item.instructor}</a></div>
                            <div><svg style={{ marginRight: "5px" }} width="20" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.04395 0.634033C3.63257 0.634033 0.0439453 4.22266 0.0439453 8.63403C0.0439453 13.0454 3.63257 16.634 8.04395 16.634C12.4553 16.634 16.0439 13.0454 16.0439 8.63403C16.0439 4.22266 12.4553 0.634033 8.04395 0.634033ZM11.8486 12.772C11.7186 12.902 11.548 12.9674 11.3773 12.9674C11.2067 12.9674 11.0359 12.902 10.906 12.772L7.57263 9.43872C7.44727 9.31409 7.37732 9.14465 7.37732 8.96741V4.63403C7.37732 4.26538 7.6759 3.96741 8.04395 3.96741C8.41199 3.96741 8.71057 4.26538 8.71057 4.63403V8.69141L11.8486 11.8293C12.1093 12.0901 12.1093 12.5114 11.8486 12.772Z" fill="#0C0B0B" />
                            </svg>
                                {Math.ceil(Number(item.duration) / 60)}h {item.duration % 60}min </div>
                            <div><svg svg style={{ marginRight: "5px" }} width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.3211 8.42653C10.2493 9.46863 9.65511 10.2002 8.96903 10.5103C8.24157 10.8389 7.50627 10.6577 7.13916 10.059C6.5381 9.07885 6.95111 8.39666 7.3505 7.73691C7.80335 6.98881 8.31668 6.14088 7.82434 4.49194C7.43567 3.19016 6.67449 2.09725 5.56189 1.24356C5.21505 0.977471 4.88611 0.777346 4.61916 0.634033C4.99201 1.5416 5.47686 3.23044 4.9704 5.09631C4.64918 6.27985 3.80023 7.17672 2.97922 8.04406C1.89789 9.1865 0.779678 10.3678 0.779678 12.2553C0.779678 13.7195 1.28983 14.886 2.29591 15.7222C3.05778 16.3555 3.8352 16.6021 3.84295 16.604H5.69803L5.6592 16.6033C5.65205 16.5977 4.94531 16.0398 4.93314 15.4001C4.92747 15.101 5.08439 14.8142 5.39956 14.5475C5.87295 14.1469 6.13314 13.7156 6.19503 13.2289C6.23289 12.9313 6.19462 12.6167 6.0783 12.277C6.86348 12.6063 7.67567 13.3253 7.9509 14.2178C8.19808 15.0194 7.96943 15.8437 7.2903 16.604H9.3205C10.6504 15.5622 11.399 14.3136 11.5458 12.8931C11.7329 11.0819 10.9048 9.37603 10.3211 8.42653Z" fill="#0C0B0B" />
                            </svg>
                                {item.rating}</div>
                                <button style={{ borderRadius: "5px", fontWeight: "600", fontSize: "smaller", height: "40px",width:"100px", background:"black",color:"white" }}>Continue</button>
                        </div>
                    ))}
        </TabPanel>                
            </SwipeableViews>
        </div>
    );
}

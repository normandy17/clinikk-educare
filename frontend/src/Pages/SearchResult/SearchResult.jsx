import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchQuery } from "../../Redux/Search/actions";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    height: "250px"
  },

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export function SearchResult(props) {
  const { searched } = useSelector((state) => state.search);
  console.log(searched)
  const dispatch = useDispatch();
  const history = useHistory();
  let path = null;

  const classes = useStyles();

  // console.log(searched);

  useEffect(() => {
    let temp = history.location.search.split("=")[1];
    // console.log(temp);
    dispatch(searchQuery({ query: temp }));
  }, [history.location.search]);

  const handleClick = (id) => {
    history.push(`/vehicle/${id}`);
  };

  return (
    
    <Grid container spacing={3} justify="space-around"  style={{marginTop:"50px", height:"600px",overflow:"visible"}}>
      {
          searched.length == 0 && <div>Sorry, we could not find what you're searching for!!</div>          
        }
        {
          searched.length > 0 && searched.map((item) => (

            <Grid item sm={12} md={6} lg={3} style={{ width: "18%" }} key={item._id}>
              <Card className={classes.root}>
                <div style={{ width: "150px", height: "150px", borderRadius: "75px", background: "blue", marginTop: "7%", marginLeft: "20px" }}>
                  <img src={item.image} alt="Vehicle" width="150px" height="150px" style={{ borderRadius: "75px" }} />
                </div>
                <div>
                  <CardContent style={{ height: "170px", width: "300px" }}>
                    <Typography variant="h5" component="h2" style={{ marginBottom: "20px" }}>
                      Registration Number: {item.reg_num}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      Type: {item.type}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      Capacity: {item.capacity}NOS
                  </Typography>
                    <Typography variant="body2" component="p">
                      Status: In Service
                  </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => handleClick(item._id)} style={{ marginLeft: "34%", position: "relative", bottom: 0 }}>View More</Button>
                  </CardActions>
                </div>
              </Card>
            </Grid>
          ))
        }
        

      </Grid>
  );
}

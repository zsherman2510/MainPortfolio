import React, { Component } from "react";

import propTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    margin: 10,
    height: 400,
    width: 400
  },
  media: {
    height: 200,
    width: 400
  },
  wrapper: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justify: "center"
  }
};
class Portfolio extends Component {
  render() {
    const { classes, resumeData } = this.props;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Work.</h1>
            <div className={classes.wrapper}>
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, index) => {
                  return (
                    <Card key={index} className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={item.imgurl}
                          title="thumbnail"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h4">
                            {item.name}
                          </Typography>
                          <Typography variant="subtitle1">
                            {item.description}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button
                            size="large"
                            color="primary"
                            href={item.site}
                            target="_blank"
                          >
                            Preview
                          </Button>
                          <Button
                            size="large"
                            color="primary"
                            href={item.github}
                            target="_blank"
                          >
                            Github
                          </Button>
                        </CardActions>
                      </CardActionArea>
                    </Card>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
Portfolio.propTypes = {
  classes: propTypes.object.isRequired
};

export default withStyles(styles)(Portfolio);

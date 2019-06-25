import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useStore } from "../../../store";
import { Layout, LeaderBoard, Questions, Timer } from "../../common/components";
import Overview from "./Overview";
import AdminControls from "./AdminControls";
import styles from "./Admin.styles";

const componentsList = {
  overview: Overview,
  questions: Questions,
  leaderboard: LeaderBoard
};

const Admin = ({ classes, header, page: urlPage }) => {
  const [page, changePage] = useState("overview");
  const {
    state: { router },
    dispatch
  } = useStore();

  useEffect(() => {
    let tempPage = !urlPage ? "overview" : urlPage;
    if (page !== tempPage) {
      changePage(tempPage);
    }
    return () => {};
  }, [urlPage]);

  const handleChangePage = page => {
    router.push(`${router.location.pathname}?type=${page}`);
    dispatch({ type: "ROUTER_SET", payload: router });
    changePage(page);
  };

  const Component = componentsList[page];
  return (
    <Layout header={header} footer={<AdminControls />}>
      <div className={classes.container}>
        <div className={classes.clock}>
          <Typography variant="subtitle1" color="secondary">
            Next Question In:
          </Typography>
          <Timer />
        </div>
        <div className={classes.content}>
          <Component handleChangePage={handleChangePage} />
        </div>
      </div>
    </Layout>
  );
};

export default withStyles(styles, { name: "Admin" })(Admin);

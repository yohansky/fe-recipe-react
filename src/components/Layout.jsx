import axios from "axios";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import { setUser } from "../redux/actions/setUserActions";
import { connect } from "react-redux";

const Layout = (props) => {
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/user`);

        props.setUser(data);
        console.log(props.user);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <Nav />
      <main>
        <div className="album py-5">
          <div className="container">{props.children}</div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

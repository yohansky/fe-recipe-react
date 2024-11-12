import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
// import {} from "";
import { Col, Row } from "react-bootstrap";
import RecipeCards from "../components/RecipeCards";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(`/recipes`)
      .then((res) => {
        console.log(res.data.data);
        setRecipes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // (async () => {
    //   const { data } = await axios.get(`/recipes`);

    //   setRecipes(data);
    // })();
  }, []);

  return (
    <Layout>
      <Row>
        {/* {JSON.stringify(recipes)} */}
        {recipes.map((recipe) => (
          <Col key={recipe.id} sm={12} md={6} lg={4}>
            <RecipeCards recipe={recipe} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default Home;

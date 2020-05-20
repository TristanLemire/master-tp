import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CategoryItem from "../molecules/CategoryItem";

const CategoryListWrapper = styled.div`
  color: white;
`;

const CategoryList = props => {
  const { categories } = props;

  return (
    <CategoryListWrapper {...props}>
      {/*
       * Ici même logique qu'avec les <Badge /> pour les <CategoryItem />
       */}
      {categories.map((category, i) => (
        <CategoryItem
          title={category.title}
          badges={category.badges}
          viewers={category.viewers}
          key={i}
        />
      ))}
    </CategoryListWrapper>
  );
};

// On détermine les types que nos props attendent afin d'avoir une structure plus propre
CategoryList.propTypes = {
  categories: PropTypes.array
};

CategoryList.defaultProps = {};

export default CategoryList;

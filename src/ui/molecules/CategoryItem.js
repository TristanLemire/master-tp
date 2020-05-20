import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Badge } from "../atoms";
import Colors from "../particles/Colors";

const CategoryItemWrapper = styled.div`
  display: flex;
  margin: 16px 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

const Image = styled.div`
  display: block;
  height: 86px;
  width: 72px;
  background-color: white;
`;

const Title = styled.h1``;

const ViewersAmount = styled.p`
  font-size: 12px;
  color: ${Colors.neutral_grey};
`;

const BadgesWrapper = styled.div`
  display: inline-flex;
  margin-top: 8px;
`;

const CategoryItem = props => {
  const { title, badges, viewers } = props;

  return (
    <CategoryItemWrapper>
      <Image />

      <Container>
        <Title>{title}</Title>
        <ViewersAmount>{viewers} spectateurs</ViewersAmount>

        {/*
         * Ici récupérer l'ensemble de nos badges sous forme de tableau nous permet
         * de créer l'ensemble de nos <Badge /> rapidement et dynamiquement
         */}
        <BadgesWrapper>
          {badges.map((badge, i) => (
            <Badge text={badge} key={i} />
          ))}
        </BadgesWrapper>
      </Container>
    </CategoryItemWrapper>
  );
};

CategoryItem.propTypes = {
  title: PropTypes.string,
  badges: PropTypes.array,
  viewers: PropTypes.string
};

CategoryItem.defaultProps = {};

export default CategoryItem;

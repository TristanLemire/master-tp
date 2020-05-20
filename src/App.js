import React from "react";
import styled from "styled-components";
import Avatar, { statuses } from "./ui/molecules/Avatar";
import CategoryList from "./ui/organisms/CategoryList";
import "./reset.css";
import CategoryItem from "./ui/molecules/CategoryItem";

// Création de notre set de données pour la création de la liste
const categories = [
  {
    title: "Just Chatting",
    badges: ["IRL", "Design", "Dev"],
    viewers: "250k"
  },
  {
    title: "Chatting",
    badges: ["X", "Y"],
    viewers: "242k"
  },
  {
    title: "Just",
    badges: ["Z"],
    viewers: "257k"
  }
];

// Les Wrapper constituent les éléments de base de nos composants
const AppWrapper = styled.div`
  width: 375px;
  height: 744px;
  background-color: black;
  padding: 16px;
`;

const App = () => {
  return (
    <AppWrapper>
      {/*
       * Ici on utilise les statuts possibles que l'on a répertorié  dans Avatar
       * Ça nous permet d'avoir un fonctionnement plus propre qu'avec le "string magique"
       */}
      <Avatar status={statuses.bolt} />
      <Avatar status={statuses.crush} />

      <CategoryItem
        title="Just Chatting"
        badges={["IRL", "Design", "Dev"]}
        viewers="250k"
      />

      <CategoryList categories={categories} />
    </AppWrapper>
  );
};

export default App;

import React from "react";

import BreadLower from "./BurgerComponents/BreadLower";
import BreadUpper from "./BurgerComponents/BreadUpper";
import Cheese from "./BurgerComponents/Cheese";
import Lettuce from "./BurgerComponents/Lettuce";
import Tomatoes from "./BurgerComponents/Tomatoes";


export default function CreateBurger(props) {
  const BurgerStack = props.burgerStack.map((item, index) => {
    switch (item) {
      case 'Cheese':
        return <Cheese key={index} />;
      case 'Lettuce':
        return <Lettuce key={index} />;
      case 'Tomatoes':
        return <Tomatoes key={index} />;
      default:
        return null;
    }
  });

  return (
    <div>
      <BreadUpper />
      {BurgerStack}
      <BreadLower />
    </div>
  );
}

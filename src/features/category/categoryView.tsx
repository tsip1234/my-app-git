import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState,store } from "../../app/store";
import Category from "../../models/category";
import { getCategories } from "./categorySlice";


type CategoryProps = {
  // filterByCategory: (id: number) => void
  setCategoryId: Dispatch<SetStateAction<any>>;
};

const CategoryView = ({ setCategoryId }: CategoryProps) => {
  //categories מתקבל ע"י קרית שרת
  const categories = useSelector((state: RootState) => state.category.categories);
  // const categories=store.getState().
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories())
  }, []);

  return (
    <>
      {categories &&
        categories.map((category: Category) => (
          <ul >
            <button onClick={() => setCategoryId(category.id)}>
              {category.name}
            </button>
          </ul>
        ))}
    </>
  );
};
export default CategoryView;
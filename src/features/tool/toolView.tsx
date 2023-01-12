import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
// import{AppDispatch, RootState} from '../../App/store'
import { getTools } from './toolSlice'
import { getCategories } from "../category/categorySlice";
import Tool from "../../models/tool";
import { ToolComponent } from './toolComponent'
import CategoryView from "../category/categoryView";
import Category from "../../models/category";
import { AppDispatch, RootState } from "../../app/store";
import { getLends } from "../lend/lendSlice";
import { Select, MenuItem, TextField } from "@mui/material";


// import { Check } from "@mui/icons-material";
export const ToolView = () => {
  const [curCategory, setCurCategory] = useState(-1)
  const [curSearch, setCurSearch] = useState('')

  const dispatch: AppDispatch = useDispatch();


  useEffect(() => {
    dispatch(getTools());
  }, [])
  const tools = useSelector((state: RootState) => state.toolSlice.tools)
  const categories = useSelector((state: RootState) => state.categorySlice.categories)

  return (
    <div>
      {/* <input type="text" /> */}
      <TextField placeholder="Search" onChange={e => setCurSearch(e.target.value)}></TextField>
      <Select defaultValue="All">

        <MenuItem onClick={() => setCurCategory(-1)} value="All">All</MenuItem>
        {categories.map(category => {
          return <MenuItem key={category.id} value={category.id} onClick={e => setCurCategory(category.id)}>{category.name}</MenuItem>
        })}

      </Select>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* <CategoryView /> */}
        {tools
          // בודק קטגוריה
          .filter(tool => curCategory === -1 || curCategory === tool.category.id)
          // בודק חיפוש
          .filter(tool => tool.name.toLowerCase().includes(curSearch.toLowerCase()))
          .map(tool => {
            return <ToolComponent key={tool.id} tool={tool} />
          })}
      </div>
    </div>
  );
}




// };
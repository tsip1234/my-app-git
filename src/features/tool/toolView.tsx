import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
// import{AppDispatch, RootState} from '../../App/store'
import { getTools } from './toolSlice'
import { getCategories } from "../category/categorySlice";
import Tool from "../../models/tool";
import { ToolComponent } from './toolComponent'
import CategoryView from "../category/categoryView";
import Category from "../../models/category";
// import { Check } from "@mui/icons-material";
//tmp
const categories: Category[] = [
  { id: 1, name: 'tools' },
  { id: 2, name: 'not-tools' }
]
const tools: Tool[] = [
  {
    id: 1,
    image: 'https://th.bing.com/th/id/OIP.vnQBDUUgkx2xrC-ohhUhVwHaHa?pid=ImgDet&rs=1',
    manufacturingCompany: 'vizel',
    description: 'hammer',
    numOfTool: 5,
    category: categories[0]
  },
  {
    id: 2,
    image: 'https://extremehowto.com/wp-content/uploads/2011/11/tools.jpg',
    manufacturingCompany: 'marvel',
    description: 'thor',
    numOfTool: 5,
    category: categories[1]
  },
  {
    id: 3,
    image: 'https://extremehowto.com/wp-content/uploads/2011/11/tools.jpg',
    manufacturingCompany: 'marvel',
    description: 'thor',
    numOfTool: 5,
    category: categories[1]
  }
]

// tools.push(...tools, ...tools, ...tools)

//end tmp
export const ToolView = () => {
  const [curCategory, setCurCategory] = useState(-1)
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'grid' }}>
        <button onClick={() => setCurCategory(-1)}>All</button>
        {categories.map(category => {
          return <button key={category.id} value={category.id} onClick={e => setCurCategory(category.id)}>{category.name}</button>
        })}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {/* <CategoryView /> */}
        {tools.filter(tool => curCategory === -1 || curCategory === tool.category.id).map(tool => {
          return <ToolComponent key={tool.id} tool={tool} />
        })}
      </div>
    </div>
  );
}




// };
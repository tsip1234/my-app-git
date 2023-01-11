// import { Routes, useRoutes } from 'react-router-dom';
import SignIn from './features/user/signIn';
import HomepageLayout from './features/homePage';
import SignUp from './features/user/signUp';
import { Routes, Route } from "react-router-dom"
import HomepageHeading from './features/homePage'
import { ToolView } from './features/tool/toolView'
import { LendView } from './features/lend/lendView';
// const Routing = () => {

// const element = useRoutes([
//     { path: "/signIn", element: <SignIn /> },
//     { path: "/signUp", element: <SignUp /> },
//     {path:"homePage", element: <HomepageLayout/>}
// ]);

// return element;
// }
// export default Routing;

export function Routing() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomepageHeading />}></Route>
                <Route path="signin" element={<SignIn></SignIn>}></Route>
                <Route path="signup" element={<SignUp></SignUp>}></Route>
                <Route path="homePage" element={<HomepageHeading></HomepageHeading>}></Route>
                <Route path="toolView" element={<ToolView></ToolView>}></Route>
                <Route path="lendView" element={<LendView />}></Route>
            </Routes>
        </div>
    )
}
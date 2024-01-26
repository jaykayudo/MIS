import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import CustomLayout from '../components/layout/Layout';
import Paths from './constant';

const Dashboard = lazy(()=>(import("../pages/dashboard/Dashboard")))
const Project = lazy(()=>(import("../pages/project/Project")))
const Indicator = lazy(()=>(import("../pages/indicator/Indicator")))
const ProjectAdd = lazy(()=>(import("../pages/projectadd/ProjectAdd")))
const PlanAdd = lazy(()=>(import("../pages/planadd/PlanAdd")))
const UploadProject = lazy(()=>(import("../pages/uploadproject/UploadProject")))
const GISMap = lazy(()=>(import("../pages/gismap/GISMap")))
const Settings = lazy(()=>(import("../pages/settings/Settings")))


const MainRouter = ()=>{
    return (
            <BrowserRouter>
            <CustomLayout>
            <Suspense>
                <Routes>
                    <Route path={Paths.dashboard} element={<Dashboard />}/>
                    <Route path={Paths.projectmanagment} element={<Project />}/>
                    <Route path={Paths.projectadd} element={<ProjectAdd />}/>
                    <Route path={Paths.planadd} element={<PlanAdd />}/>
                    <Route path={Paths.uploadproject} element={<UploadProject />}/>
                    <Route path={Paths.indicator} element={<Indicator />}/>
                    <Route path={Paths.gismap} element={<GISMap />}/>
                    <Route path={Paths.settings} element={<Settings />}/>
                </Routes>
            </Suspense>
            </CustomLayout> 
            </BrowserRouter>
        
    )
}
export default MainRouter;
import {createWebHistory, createRouter} from "vue-router";
import NavigationPageAuditor from "../components/NavigationPageAuditor";
import DashBoard from "../components/DashBoard";
import RiskAssessment from "../components/RiskAssessment";
import GenerateReport from "../components/GenerateReport";
import SignOut from "../components/SignOut";
import RiskScoring from "../components/RiskScoring";

const routes = [
        {
            path:"/auditornavigation",
            name:"auditornavigation",
            component: NavigationPageAuditor
        },
        {
            path:"/dashboard",
            name:"dashboard",
            component: DashBoard
        },
        {
            path:"/riskassessment",
            name:"riskassessment",
            component: RiskAssessment
        },
        {
            path:"/generatereport",
            name:"generatereport",
            component: GenerateReport
        },

        {
            path: "/signout",
            name:"signout",
            component: SignOut
        },

        {
            path: "/riskscoring",
            name:"riskscoring",
            component: RiskScoring
        }

];


const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
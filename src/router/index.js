import {createWebHistory, createRouter} from "vue-router";
import NavigationPageAuditor from "../components/NavigationPageAuditor";
import DashBoard from "../components/DashBoard";
import RiskAssessment from "../components/RiskAssessment";
import GenerateReport from "../components/GenerateReport";
import SignOut from "../components/SignOut";
import RiskScoring from "../components/RiskScoring";
import MainLogin from "../components/MainLogin";
import NavigationPageChief from "../components/NavigationPageChief";
import PreviousAudit from "../components/PreviousAudit";
import ChartOne from "../components/ChartOne";
import ChartTwo from "../components/ChartTwo";
import ChartThree from "../components/ChartThree";
import ChartFour from "../components/ChartFour";
import ChartFive from "../components/ChartFive";
import NewsArticles from "../components/NewsArticles";


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
        },

        {
            path: "/mainlogin",
            name:"mainlogin",
            component: MainLogin
        },

        {
            path: "/chiefnavigation",
            name:"chiefnavigation",
            component: NavigationPageChief
        },
        {
            path: "/previousaudit",
            name:"previousaudit",
            component: PreviousAudit

        },

        {
            path: "/chartone",
            name:"chartone",
            component: ChartOne

        },

        {
            path: "/charttwo",
            name:"charttwo",
            component: ChartTwo

        },

        {
            path: "/chartthree",
            name:"chartthree",
            component: ChartThree

        },

        {
            path: "/chartfour",
            name:"chartfour",
            component: ChartFour

        },

        {
            path: "/chartfive",
            name:"chartfive",
            component: ChartFive

        },

        {
            path: "/newsarticle",
            name:"newsarticle",
            component: NewsArticles

        },



];


const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
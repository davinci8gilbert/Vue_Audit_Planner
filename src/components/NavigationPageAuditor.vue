<template>
    
    <div class="header">
        <h1 class="nav-title">ANNUAL AUDIT PLANNER</h1>
        <!-- <h1 class="nav-title">{{ title }}</h1> -->
        <div class="nav-links">
            <button v-for="tab in tabs" :key="tab" :class="['tab-button', { active: currentTab === tab }]" @click="currentTab = tab">
                {{ tab }}
            </button>

        </div>
        
    </div>
    <!-- whatever component name corresponds to the value of currentTab will be rendered inside the <div class="row">.
    This allows for dynamic switching of components based on the value of currentTab. -->
    <div class="row">
        <!-- <component :is="componentTitles[tabs.indexOf(currentTab)]"></component>: This is where the dynamic component rendering happens. 
        Vue's <component> tag allows you to dynamically render different components based on data.
        :is is a special attribute in Vue that tells Vue which component to render. It binds to a component name.
        componentTitles is assumed to be an array or an object containing the names of components that can be rendered dynamically.
        tabs.indexOf(currentTab) is finding the index of the value of currentTab in the tabs array. 
        Then, it's using that index to access the corresponding component name from the componentTitles array. -->

        <component :is="componentTitles[tabs.indexOf(currentTab)]"></component>
    </div>
</template>

<script>
import DashBoard from './DashBoard.vue';
import RiskAssessment from './RiskAssessment.vue';
import ResourceAllocation from './ResourceAllocation.vue';
import GenerateReport from './GenerateReport.vue';
import SignOut from './SignOut.vue'
import '../App.css'
export default {
    name: "NavigationPageAuditor",
    components: {
        DashBoard,
        RiskAssessment,
        ResourceAllocation,
        GenerateReport,
        SignOut 

    },
    data() {
        return {
            title: "ANNUAL AUDIT PLANNER",
            tabs: ['Dashboard', 'Risk Assessment', 'Resource Allocation','Generate Report','Signout'],
            componentTitles: [DashBoard, RiskAssessment, ResourceAllocation, GenerateReport,SignOut],
            currentTab: '',
        }
    },
    methods: {

    },
    mounted() {

    // this.tabs = localStorage.getItem("role") != 2 ? this.tabs: ['Dashboard', 'Issues', 'Reports','Update Role','Sign Out'];: 
    // This line checks the value stored in the local storage under the key "role". 
    // If it's not equal to 2, it sets this.tabs to an array containing the names of tabs (presumably navigation tabs) that the user can access. 
    // If the value is equal to 2, it keeps this.tabs unchanged. This is likely a condition based on some user role logic where different roles 
    // may have different sets of tabs available.

    // this.componentTitles = localStorage.getItem("role") != 2 ? this.componentTitles: 
    // [DashboardAuditor, IssuesPage, IssuesReports, RoleDec, MainLogin];: Similarly, this line checks the value 
    // stored in local storage under the key "role". If it's not equal to 2, it sets this.componentTitles to an array containing the component 
    // names corresponding to the tabs available to the user. If the value is equal to 2, it keeps this.componentTitles unchanged. 
    // Again, this is probably related to dynamically loading components based on user roles.

        this.tabs = localStorage.getItem("role") != 2 ? this.tabs: ['Dashboard', 'Risk Assessment', 'Resource Allocation','Generate Report','Signout'];
        this.componentTitles = localStorage.getItem("role") != 2 ? this.componentTitles: [DashBoard, RiskAssessment, ResourceAllocation, GenerateReport,SignOut];

        this.currentTab = 'Dashboard';
        
        // currentTab(newCurrentTab): This is the watcher function. It takes the new value of currentTab as an argument, which we'll refer to as newCurrentTab.
        // switch (newCurrentTab) { ... }: This is a switch statement that checks the value of newCurrentTab. Depending on its value, different actions are taken.
        // Inside the switch statement:
        // If newCurrentTab is 'Dashboard', it sets the value of this.title to 'Dashboard'.
        // If newCurrentTab is 'Risk Assessment', it sets the value of this.title to 'Risk Assessment'.
        // If newCurrentTab is 'Generate Report', it sets the value of this.title to 'Generate Report'.
        // If newCurrentTab is 'Signout', it sets the value of this.title to 'Signout'.
        // If newCurrentTab is none of the above (default case), it implies some unexpected behavior, so it removes certain items from the 
        // local storage (likely user session-related data), and then it navigates back using this.$router.go(-1)

    },watch:{
        currentTab(newCurrentTab){
            switch (newCurrentTab) {
                case 'Dashboard':
                    this.title = 'Dashboard';
                    break;
                case 'Risk Assessment':
                    this.title = 'Risk Assessment';
                    break;
                case 'Resource Allocation':
                    this.title = 'Resource Allocation';
                    break;
                case 'Generate Report':
                    this.title = 'Generate Report';
                    break;
                case 'Signout':
                    this.title = 'Signout';
                    break;
                default:
                    localStorage.removeItem("eid");
                    localStorage.removeItem("role");
                    this.$router.go(-1);
            }
        },
    }

}
</script>

<style></style>
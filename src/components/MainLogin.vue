<template>
   <div class="circular" :style="{ 'background-image': 'url(' + imageUrl + ')', 'background-size': 'cover', 'background-repeat': 'no-repeat' }">

   <div class="login-container" >
   <p id="loginpageText">ANNUAL AUDIT PLANNER</p>
    <div class="login-form">
        <h1 id="login-head">Login</h1>
        <form>

            <div>
                <label id="login_label" for=" email">Username:</label>
                <input type="text" id="email" v-model="employeeLoginRequest.userName" />

            </div>
            <div>
                <label id="login_label" for=" password">Password:</label>
                <input type="password" id="password" v-model="employeeLoginRequest.password" />
            </div>
            <div>
                <button type="submit" @click="login">Login</button>
            </div>
        </form>
        <!-- <p>{{ message }}</p> -->
    </div>
</div>
</div>
</template>

<script>
import LoginService from "../services/LoginService";
import '../App.css'
import techImage from '@/assets/growth.jpg'; // Import the image file

export default {
    name: "mainLogin",
    data() {
        return {
            employeeLoginRequest: { userName: "", password: "" },
            message: "",
            imageUrl: techImage // Store the image URL in a variable
        }

    },
    methods: {
        login(event) {
            event.preventDefault();
            if (this.employeeLoginRequest.userName === "" || this.employeeLoginRequest.password === "") {
                window.alert("Please enter your credentials");
            } else {
                LoginService.login(this.employeeLoginRequest)
                    .then(response => {
                        let item = response.data;
                        console.log(item)
                        localStorage.setItem('eid', item.userName);
                        localStorage.setItem('auditorName',item.auditorName)
                        localStorage.setItem('role', item.role);
                        localStorage.setItem('teamName',item.teamName);
                        localStorage.setItem('id',item.id),
                        localStorage.setItem('pWord',item.password)
                        console.log("Access Data Retrieved",item.auditorName, item.teamName);
                        if (item.role === "Manager" ) {
                            this.$router.push({ name: "auditornavigation" });
                        }
                        else {
                            this.$router.push({ name: "chiefnavigation" });

                        }
                    })
                    .catch(error => {
                        this.employeeLoginRequest.userName = "";
                        this.employeeLoginRequest.password = "";
                        this.message = error.response.data.message;
                        window.alert("There are some errors in the credentials. Please try again.");
                        console.log(error.response.data);
                    })
            }
        }
    },
    mounted() {

        this.message = "";
    }
}

</script>
<style scoped>
/* @import '@/assets/tech.jpg'; */

#loginpageText{
    text-align: center;
    font-size:5em;
     margin-left: 50px;
     font-weight: 700;
     color:white;
     /* color:#260655; */
}
.circular{
    height: 100vh;
    width: 100%;
    position: absolute
    
}


/* body{
    background-image: url('@/assets/tech.jpg');
    /* background:cover; */
    /* background-size: cover; */
    /* background-repeat: no-repeat; */
/* }  */

</style>
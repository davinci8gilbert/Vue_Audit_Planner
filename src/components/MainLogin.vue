<template>
    <div class="login-form">
        <h1>Login</h1>
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
        <p>{{ message }}</p>
    </div>
</template>

<script>
import LoginService from "../services/LoginService";
import '../App.css'

export default {
    name: "mainLogin",
    data() {
        return {
            employeeLoginRequest: { userName: "", password: "" },
            message: ""
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

                    
                        localStorage.setItem('role', item.role);
                        localStorage.setItem('teamName',item.teamName)
                        console.log("Response tadsfasdfo",item.auditorName, item.teamName);
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
                        window.alert("Some of the credentials are wrong. Try again please");
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
<style></style>
<template>
    <div class="otp__wrap">
        <div class="otp__content">
            <div class="ma-auto position-relative" style="max-width: 300px">
                <v-otp-input v-model="login.login_code" :disabled="loading" @finish="onFinish"></v-otp-input>
                <v-overlay absolute :value="loading">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                </v-overlay>
            </div>
            <!-- <div>
                Expected value: <span class="font-weight-bold">{{ expectedOtp }}</span>
            </div> -->
            <div class="text--caption"><button @click="resendOtp()" class="btn btn-primary">Resend OTP</button></div>

            <!-- <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="2000">
                {{ text }}
            </v-snackbar> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            snackbar: false,
            snackbarColor: 'default',
            login: {
                login_code: '',
            },
            text: '',
            // expectedOtp: '133707',
        }
    },
    methods: {
        async onFinish() {
            try {
                this.loading = true
                let response = await this.$axios.post('/confirmLoginOTP', this.login)
                console.log(response)
                this.loading = false
                if (response.data.user.role === "Admin") {
                    this.$auth.setUserToken(response.data.token);
                    this.$router.push("/admin_dashboard/dashboard");
                    console.log(this.$auth.loggedIn);
                    console.log(response.data.token);
                    this.$toast.success("You Are Logged In", {
                        timeout: 5000,
                    });
                } else if (response.data.user.role === "Subscriber") {
                    this.$auth.setUserToken(response.data.token);
                    this.$router.push("/user_dashboard/my_account");
                    console.log(this.$auth.loggedIn);
                    console.log(response.data.token);
                    this.$toast.success("You Are Logged In", {
                        timeout: 5000,
                    });
                } else {
                    this.loading = false
                    this.$toast.warning("Incorrect password or email", {
                        timeout: 5000,
                    });
                }
                // setTimeout(() => {
                //     this.loading = false
                //     // this.snackbarColor = (rsp === this.expectedOtp) ? 'success' : 'warning'
                //     // this.text = `Processed OTP with "${rsp}" (${this.snackbarColor})`
                //     // this.snackbar = true
                // }, 3500)
            }
            catch (error) {
                this.loading = false
                console.log(error.response)
            }
        },
        async resendOtp() {
            try {
                let response = await this.$axios.post('/resendOtp')
                console.log(response)
            }
            catch (error) {
                console.log(error.response);
            }
        }
    },
    created() {

    }
}
</script>

<style>
.otp__wrap {
    display: grid;
    place-items: center;
    padding-top: 200px;
}

.otp__wrap .otp__content {
    text-align: center;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #30303073;
    padding: 20px;
}
</style>
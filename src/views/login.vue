<template>
    <div class="home">
      <h1>Login page</h1>
      <div id="form-ui">
        <form @submit.prevent="handleSignup" id="form">
          <div id="form-body">
            <div id="welcome-lines">
              <div id="welcome-line-1">Register</div>
              <div id="welcome-line-2">Start Your Free Trial Now!💪🏼</div>
            </div>
            <div id="input-area">
              <div class="form-inp">
                <input v-model="name" placeholder="Name" id="name" type="text" />
              </div>
              <div class="form-inp">
                <input v-model="email" placeholder="Email Address" id="email" type="text" />
              </div>
              <br />
              <div class="form-inp">
                <input v-model="password" placeholder="Password" id="password" type="password" />
              </div>
            </div>
            <div id="submit-button-cvr">
              <button id="submit" type="submit">
                Register
              </button>
            </div>
            <br /><br />
            <div id="forgot-pass">
              <a id="forgotPasswordLink" @click="deleteGymDataCookie">Forget Password</a>
            </div>
            <br />
          </div>
        </form>
      </div>
      <div id="toaster-container"></div><br><br><br><br><br>
    </div>
  </template>
  
  <script>
import axios from 'axios';
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  mounted() {
    const forgotPasswordLink = document.getElementById("forgotPasswordLink");
    forgotPasswordLink.addEventListener("click", this.deleteGymDataCookie);
  },
  methods: {
    handleSignup() {
      const name = this.name;
      const email = this.email;
      const password = this.password;

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (this.validateInput(name, email, password, emailPattern)) {
        const GymData = { name, email, password };

        try {
          console.log("Storing GymData in cookies...");
          this.storeGymData(GymData);

          console.log("Sending data to Google Sheets...");
          this.sendDataToGoogleSheets(GymData);

          this.showCustomSuccess('Registration successful!');

          // Clear the input fields
          this.name = "";
          this.email = "";
          this.password = "";

          // Redirect to the home page
          setTimeout(() => {
            this.$router.push({ path: "/" });
          }, 3000); // Wait for 3 seconds before redirecting
        } catch (error) {
          console.error("An error occurred:", error);
          alert("An error occurred while storing your data. Please try again later.");
        }
      }
    },
    validateInput(name, email, password, emailPattern) {
      if (name === "" || email === "" || password === "") {
        this.showCustomWarning("Please fill in all the required fields.");
        return false;
      }

      if (!email.match(emailPattern)) {
        this.showCustomWarning("Please enter a valid email address.");
        return false;
      }

      if (password.length < 8) {
        this.showCustomWarning("Password must be 8+ characters long.");
        return false;
      }

      return true;
    },
    storeGymData(GymData) {
      const expirationDate = new Date();
      expirationDate.setFullYear(expirationDate.getFullYear() + 10);
      const GymDataJson = JSON.stringify(GymData);
      const cookieString = `GymData=${encodeURIComponent(GymDataJson)}; expires=${expirationDate.toUTCString()}; path=/`;
      document.cookie = cookieString;
      console.log("GymData stored in cookies:", cookieString);
    },
    deleteGymDataCookie() {
      document.cookie = "GymData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      alert("Account data deleted.");
      this.$router.push({ path: "/register" });
    },
    sendDataToGoogleSheets(GymData) {
      const webhookUrl = 'https://hook.us1.make.com/yjtnjnk5v9zytx7us03n4jeko9yqlt66';
      const payload = {
        name: GymData.name,
        email: GymData.email,
        password: GymData.password
      };
      axios.post(webhookUrl, payload)
        .then(response => {
          console.log('Data successfully sent to Google Sheets', response);
        })
        .catch(error => {
          console.error('Error sending data to Google Sheets', error);
        });
    },
    showCustomSuccess(message) {
      this.showCustomToaster(message, 'success', 'fa-check-circle');
    },
    showCustomWarning(message) {
      this.showCustomToaster(message, 'warning', 'fa-exclamation-circle');
    },
    showCustomToaster(message, type, icon) {
      const toasterContainer = document.getElementById('toaster-container');

      const toaster = document.createElement('div');
      toaster.classList.add('toaster', type);
      toaster.innerHTML = `<i class="fas ${icon}"></i> ${message}`;

      toasterContainer.appendChild(toaster);

      setTimeout(() => {
        toaster.classList.add('show');
      }, 10);

      setTimeout(() => {
        toaster.classList.remove('show');
        toaster.addEventListener('transitionend', () => {
          toasterContainer.removeChild(toaster);
        });
      }, 3000);
    }
  }
};
</script>

<style scoped>
.home{
    background-color: #222;
}
#form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 320px;
        padding: 25px;
        background-color: #161616;
        box-shadow: 0px 15px 60px #00ff7f;
        outline: 1px solid #2b9962;
        border-radius: 10px;
        margin-top: 50px;
      }
      #form-ui {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      #form-body {
        width: 100%;
      }
      #welcome-lines {
        text-align: center;
        line-height: 1;
      }
      #welcome-line-1 {
        color: #00ff7f;
        font-weight: 600;
        font-size: 40px;
      }
      #welcome-line-2 {
        color: #ffffff;
        font-size: 18px;
        margin-top: 17px;
      }
      #input-area {
        margin-top: 40px;
      }
      .form-inp {
        padding: 11px 25px;
        background: transparent;
        border: 1px solid #e3e3e3;
        line-height: 1;
        border-radius: 8px;
      }
      .form-inp:focus {
        border: 1px solid #00ff7f;
      }
      .form-inp:first-child {
        margin-bottom: 15px;
      }
      .form-inp input {
        width: 100%;
        background: none;
        font-size: 13.4px;
        color: #00ff7f;
        border: none;
        padding: 0;
        margin: 0;
      }
      .form-inp input:focus {
        outline: none;
      }
      #submit-button-cvr {
        margin-top: 20px;
      }
      #submit {
        display: block;
        width: 100%;
        color: #00ff7f;
        background-color: transparent;
        font-weight: 600;
        font-size: 14px;
        margin: 0;
        padding: 14px 13px 12px 13px;
        border: 0;
        outline: 1px solid #00ff7f;
        border-radius: 8px;
        line-height: 1;
        cursor: pointer;
        transition: all ease-in-out 0.3s;
      }
      #submit:hover {
        transition: all ease-in-out 0.3s;
        background-color: #00ff7f;
        color: #161616;
        cursor: pointer;
      }
      #forgot-pass {
        text-align: center;
        margin-top: 10px;
      }
      #forgot-pass a {
        color: #868686;
        /* font-size: 12px; */
        /* text-decoration: none; */
      }
      #bar {
        position: absolute;
        left: 50%;
        bottom: -50px;
        width: 28px;
        height: 8px;
        margin-left: -33px;
        background-color: #00ff7f;
        border-radius: 10px;
      }
      #bar:before,
      #bar:after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background-color: #ececec;
        border-radius: 50%;
      }
      #bar:before {
        right: -20px;
      }
      #bar:after {
        right: -38px;
      }
  </style>
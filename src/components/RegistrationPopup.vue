<!-- components/RegistrationPopup.vue -->
   <template>
    <div v-if="isVisible" class="popup">
      <div id="form-ui">
        <form method="POST" id="form">
          <span class="close" id="closeBtn" @click="closePopup">&times;</span>
          <div id="form-body">
            <div id="welcome-lines">
              <div id="welcome-line-1">Register</div>
              <div id="welcome-line-2">Start Your Free Trial Now!💪🏼</div>
            </div>
            <div id="input-area">
              <div class="form-inp">
                <input placeholder="Name" id="name" type="text" />
              </div>
              <div class="form-inp">
                <input placeholder="Email Address" id="email" type="text" />
              </div>
              <div class="form-inp">
                <input placeholder="Password" id="password" type="password" />
              </div>
            </div>
            <div id="submit-button-cvr">
              <button id="submit" type="button" @click="handleSignup">Login</button>
            </div>
            <br /><br />
            <div id="forgot-pass">
              <a id="forgotPasswordLink">Forget Password</a>
            </div>
          </div>
        </form>
      </div>
      <div id="toaster-container"></div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'RegistrationPopup',
    props: {
      isVisible: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closePopup() {
        this.$emit('update:isVisible', false);
      },
      handleSignup() {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        const name = nameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (this.validateInput(name, email, password, emailPattern)) {
          const GymData = {
            name,
            email,
            password,
          };
          try {
            console.log("Storing GymData in cookies...");
            this.storeGymData(GymData);

            console.log("Sending data to Google Sheets...");
            this.sendDataToGoogleSheets(GymData);

            console.log("Closing the register popup...");
            this.closePopup();

            // Clear input fields
            nameInput.value = '';
            emailInput.value = '';
            passwordInput.value = '';
            // Show success toaster
            this.showCustomSuccess('Registration successful!');
          } catch (error) {
            console.error("An error occurred:", error);
            alert("An error occurred while storing your data. Please try again later.");
          }
        }
      },
      validateInput(name, email, password, emailPattern) {
        if (name === "" || email === "" || password === "") {
          this.showCustomWarning("Fill all fields.");
          return false;
        }

        if (!email.match(emailPattern)) {
          this.showCustomWarning("Invalid email.");
          return false;
        }

        if (password.length < 8) {
          this.showCustomWarning("Password must be 8+ chars.");
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
        document.cookie = "GymData=; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/;";
        alert("Account data deleted.");
        this.$router.push({ path: "/login" });
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

      toasterContainer.innerHTML = ''; // Clear previous toasters
      toasterContainer.appendChild(toaster);

      this.showingToaster = true;

      setTimeout(() => {
        toaster.classList.add('show');
      }, 10);

      setTimeout(() => {
        toaster.classList.remove('show');
        toaster.addEventListener('transitionend', () => {
          toasterContainer.removeChild(toaster);
          this.showingToaster = false; // Reset showingToaster flag
        });
      }, 3000);
      }
    }
  };
</script>

<style scoped>
  /* POPUP */
  .popup {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden; /* Ensure the background does not scroll */
    background-color: rgba(0, 0, 0, 0.4);
  }
  .popup .close {
    position: absolute;
    top: -6px; /* Adjust as needed */
    right: 10px; /* Adjust as needed */
    color: #ffffff;
    font-size: 30px;
    cursor: pointer;
    z-index: 60; /* Ensure the close button is above other elements */
  }
  .popup #form-ui {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .popup #form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 325px;
    padding: 14px;
    background-color: #161616;
    box-shadow: 0px 15px 60px #00ff7f;
    outline: 1px solid #2b9962;
    border-radius: 10px;
    position: absolute;
    top: 50%; /* Center vertically */
    left: 50%; /* Center horizontally */
    transform: translate(-50%, -50%);
  }
  .popup #welcome-lines {
    text-align: center;
    line-height: 1;
  }
  .popup #welcome-line-1 {
    color: #00ff7f;
    font-weight: 600;
    font-size: 40px;
  }
  .popup #welcome-line-2 {
    color: #ffffff;
    font-size: 18px;
    margin-top: 17px;
    margin-bottom: 90px;
  }
  .popup #input-area {
    margin-top: 20px;
  }
  .popup .form-inp {
    padding: 0px 25px;
    background: transparent;
    border: 1px solid #e3e3e3;
    line-height: 1;
    border-radius: 8px;
    margin-bottom: 15px;
  }
  
  .popup .form-inp input {
    width: 100%;
    padding: 11px 25px;
    background: transparent;
    border: none;
    line-height: 1;
    border-radius: 8px;
    color: #00ff7f;
  }
  .popup .form-inp input:focus {
    outline: none;
  }
  .popup #submit-button-cvr {
    margin-top: 20px;
  }
  .popup #submit {
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
  .popup #submit:hover {
    transition: all ease-in-out 0.3s;
    background-color: #00ff7f;
    color: #161616;
    cursor: pointer;
  }
  .popup #forgot-pass {
    text-align: center;
    margin-top: 10px;
  }
  .popup #forgot-pass a {
    color: #868686;
  }
  .popup #bar {
    position: absolute;
    left: 50%;
    bottom: -50px;
    width: 28px;
    height: 8px;
    margin-left: -33px;
    background-color: #00ff7f;
    border-radius: 10px;
  }
  .popup #bar:before,
  .popup #bar:after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #ececec;
    border-radius: 50%;
  }
  .popup #bar:before {
    right: -20px;
  }
  .popup #bar:after {
    right: -38px;
  }
  
  @media (min-width: 380px) {
    .popup .close {
      top: -6px; /* Adjust as needed */
      right: 10px; /* Adjust as needed */
      color: #ffffff;
      font-size: 30px;
      cursor: pointer;
      z-index: 60; /* Ensure the close button is above other elements */
    }
    .popup #form {
      width: 380px;
      padding: 27px;
    }
  }
</style>

  

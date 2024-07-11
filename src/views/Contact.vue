<!-- src/views/contact.vue -->
<template>
  <div class="home">
    <h2>Contact Us</h2>

    <div class="form-container">
      <form class="form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" required name="email" id="email" type="text">
        </div>
        <div class="form-group">
          <label for="textarea">How Can We Help You?</label>
          <textarea v-model="message" required cols="50" rows="10" id="textarea" name="textarea"></textarea>
        </div>
        <button type="submit" class="form-submit-btn">Submit</button>
      </form>
    </div>
    <div id="toaster-container"></div><br><br><br><br><br>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'Contact',
  data() {
    return {
      email: '',
      message: ''
    };
  },
  methods: {
    async submitForm() {
      // Validate email
      if (!this.validateEmail(this.email)) {
        this.showCustomWarning('Please enter a valid email address.');
        return;
      }

      const payload = {
        email: this.email,
        message: this.message
      };

      const webhookUrl = 'https://hook.us1.make.com/8266mjlfbho9egseddx1l1hfya3cc45n';

      try {
        const response = await axios.post(webhookUrl, payload);
        console.log('Form submitted successfully', response);

        // Show success toaster
        this.showCustomSuccess('Form submitted successfully!');

        // Clear the form input fields
        this.email = '';
        this.message = '';
      } catch (error) {
        console.error('Error submitting form', error);
      }
    },
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    },
    showCustomSuccess(message) {
      this.showCustomToaster(message, 'success', 'fa-check-circle');
    },
    showCustomWarning(message) {
      this.showCustomToaster(message, 'warning', 'fa-exclamation-circle');
    },
    showCustomToaster(message, type, icon) {
      const toasterContainer = document.getElementById('toaster-container');

      // Create toaster element
      const toaster = document.createElement('div');
      toaster.classList.add('toaster', type);
      toaster.innerHTML = `<i class="fas ${icon}"></i> ${message}`;

      // Append toaster to container
      toasterContainer.appendChild(toaster);

      // Show the toaster
      setTimeout(() => {
        toaster.classList.add('show');
      }, 10); // Timeout to trigger CSS transition

      // Hide the toaster after 3 seconds
      setTimeout(() => {
        toaster.classList.remove('show');
        // Remove the toaster from DOM after transition
        toaster.addEventListener('transitionend', () => {
          toasterContainer.removeChild(toaster);
        });
      }, 3000);
    }
  }
};
</script>
  







  <style scoped>
  /* Scoped styles for Home.vue */
  .home{
    margin-top: 80px;
    background-color: #222;
  }
 .home  h2 {
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: center;

}

.subscribe-input {
      margin-top: 15px;
 
}
.wrapper {
  
  transform: translateX(0%);
}



/* CONTACT US FORM */

.form-container {
  width: 330px;
  background: linear-gradient(#212121, #212121) padding-box,
              linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
  border: 2px solid transparent;
  padding: 32px 24px;
  font-size: 14px;
  font-family: inherit;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  border-radius: 16px;
  background-size: 200% 100%;
  animation: gradient 5s ease infinite;
  position: relative;
  left: 50%; /* Position the left edge of the element at the center of the screen */
  transform: translateX(-50%); /* Offset the element to center it exactly */
  margin-top: 30px;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.form-container button:active {
  scale: 0.95;
}

.form-container .form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-container .form-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.form-container .form-group label {
  display: block;
  margin-bottom: 5px;
  color: #ffffff;
  font-weight: 600;
  font-size: 12px;
}

.form-container .form-group input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  color: #fff;
  font-family: inherit;
  background-color: transparent;
  border: 1px solid #ffffff;
}

.form-container .form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  resize: none;
  color: #fff;
  height: 140px;
  border: 1px solid #ffffff;
  background-color: transparent;
  font-family: inherit;
}

.form-container .form-group input::placeholder {
  opacity: 0.5;
}

.form-container .form-group input:focus {
  outline: none;
  border-color: #e81cff;
}

.form-container .form-group textarea:focus {
  outline: none;
  border-color: #e81cff;
}

.form-container .form-submit-btn {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-self: flex-start;
  font-family: inherit;
  color: #ffffff;
  font-weight: 600;
  width: 40%;
  background: #313131;
  border: 1px solid #414141;
  padding: 12px 16px;
  font-size: inherit;
  gap: 8px;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 6px;
}

  </style>
  

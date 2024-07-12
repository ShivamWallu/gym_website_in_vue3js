<!-- components/Footer.vue -->
<script>
import axios from 'axios';

export default {
  name: 'Footer',
  data() {
    return {
      isSubmitting: false, // Flag to prevent multiple submissions
      warningShown: false, // Flag to prevent multiple warnings
    };
  },
  mounted() {
    this.setupHoverEffect();
    this.setupSubscribeButton();
  },
  methods: {
    setupHoverEffect() {
      const icons = this.$el.querySelectorAll(".wrapper .icon");
      let currentIndex = 0;

      const hoverIcon = (index) => {
        icons[index].classList.add("hovered");
        setTimeout(() => {
          icons[index].classList.remove("hovered");
          currentIndex = (currentIndex + 1) % icons.length;
          hoverIcon(currentIndex);
        }, 3000); // 3-second delay
      }

      hoverIcon(currentIndex);
    },
    setupSubscribeButton() {
      document.getElementById('subscribeSubmit').addEventListener('click', async () => {
        if (this.isSubmitting) return; // Prevent multiple submissions

        const message = document.getElementById('subscribeMessage').value;

        // Ensure the message is not empty
        if (!message.trim()) {
          if (!this.warningShown) {
            this.showCustomWarning('Please enter a message.');
            this.warningShown = true;
            setTimeout(() => {
              this.warningShown = false;
            }, 3000); // Reset the warning flag after the toaster duration
          }
          return;
        }

        const payload = {
          message: message
        };

        const webhookUrl = 'https://hook.us1.make.com/8266mjlfbho9egseddx1l1hfya3cc45n';

        this.isSubmitting = true; // Set flag to true

        try {
          const response = await axios.post(webhookUrl, payload);
          console.log('Message submitted successfully', response);

          // Show success toaster
          this.showCustomSuccess('Message submitted successfully!');

          // Clear the message input field
          document.getElementById('subscribeMessage').value = '';
        } catch (error) {
          console.error('Error submitting message', error);
        } finally {
          this.isSubmitting = false; // Reset flag
        }
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
          toaster.remove();
        });
      }, 3000); // 3 seconds in milliseconds
    }
  }
}
</script>

<template>
    <div class="footercolor">
    <div class="subscribe">
        <p>MESSAGE</p>
        <textarea placeholder="Message...!" class="subscribe-input" name="message" id="subscribeMessage"></textarea>
        <br>
          <div class="submit-btn" id="subscribeSubmit">SUBMIT</div>
        </div>
    <div id="toaster-container"></div>
    
<ul class="wrapper">
  <li class="icon facebook" @click="openLink('https://www.facebook.com/share/1XmskygbwsJxRzo1/?mibextid=qi2Omg')">
    <span class="tooltip" data-tooltip="Go to Facebook">
      <a href="https://www.facebook.com/share/1XmskygbwsJxRzo1/?mibextid=qi2Omg" target="_blank" style="color: white; text-decoration: none;">Facebook</a>
    </span>  
    <svg
      viewBox="0 0 320 512"
      height="1.2em"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
    <a href="https://www.facebook.com/share/1XmskygbwsJxRzo1/?mibextid=qi2Omg" target="_blank"></a>

      <path
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      ></path>
    </svg>
  </li>
  <li class="icon twitter" @click="openLink('https://www.twitter.com')">
    <span class="tooltip" data-tooltip="Go to Twitter">
      <a href="https://www.twitter.com" target="_blank" style="color: white; text-decoration: none;">Twitter</a>
    </span>    
    <svg
      height="1.8em"
      fill="currentColor"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      class="twitter"
    >
    <a href="https://www.twitter.com" target="_blank"></a>

      <path
        d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
      ></path>
    </svg>
  </li>
  <li class="icon instagram" @click="openLink('https://www.instagram.com/shivam__walia__?utm_source=qr&igsh=MWwweXBqMmVtbXc0YQ==')">
    <span class="tooltip" data-tooltip="Go to Instagram">
      <a href="https://www.instagram.com/shivam__walia__?utm_source=qr&igsh=MWwweXBqMmVtbXc0YQ==" target="_blank" style="color: white; text-decoration: none;">Instagram</a>
    </span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.2em"
      fill="currentColor"
      class="bi bi-instagram"
      viewBox="0 0 16 16"
    >
    <a href="https://www.instagram.com/shivam__walia__?utm_source=qr&igsh=MWwweXBqMmVtbXc0YQ==" target="_blank"></a>

      <path
        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
      ></path>
    </svg>
  </li>
</ul>
<footer>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h4>Contact Information</h4>
        <ul>
          <li><strong>Name:</strong> Shivam Wallu</li>
          <li><strong>Email:</strong> er.shivamwallu@gmail.com</li>
          <li><strong>Contact:</strong> 7814749816</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h4>About Me</h4>
        <p>𝐈 𝐚𝐦 𝐚 𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫 𝐒𝐜𝐢𝐞𝐧𝐜𝐞 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫 𝐰𝐢𝐭𝐡 𝐚 𝐩𝐚𝐬𝐬𝐢𝐨𝐧 𝐟𝐨𝐫 𝐛𝐮𝐢𝐥𝐝𝐢𝐧𝐠 𝐢𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐯𝐞 𝐬𝐨𝐥𝐮𝐭𝐢𝐨𝐧𝐬.✨</p>
      </div>
    </div>
  </div>
</footer>
<article id="wrap">
      <article id="lightings">
          <section id="one">
                <section id="two">
                    <section id="three">
                        <section id="four">
                            <section id="five">
                                
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </article>
</article>
    </div>
</template>
 
<style scoped>
.footercolor {
  background-color: #222;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
/* MESSAGE */
.subscribe-input {
  width: 100%; /* Adjust the width as needed */
  height: 105px; /* Adjust the height as needed */
  resize: none; /* Prevent users from resizing the textarea */
  padding: 10px;
  box-sizing: border-box; /* Ensure padding is included in the width/height */
  border: 1px solid #ccc; /* Add a border */
  border-radius: 4px; /* Rounded corners */
  font-size: 16px; /* Adjust the font size as needed */
  margin-top: 10px;

}
.subscribe {
position: relative;
height: 206px;
width: 280px;
padding: 20px;
background-color: #FFF;
border-radius: 4px;
color: #000000;
box-shadow: 0px 0px 60px 5px rgba(218, 217, 217, 0.4);
left: 50%; /* Adjusted from right to left */
transform: translateX(-50%); /* Centering horizontally */
margin-top: -2px;
margin-bottom: 40px;
}
.subscribe:after {
position: absolute;
content: "";
right: -10px;
bottom: 18px;
width: 0;
height: 0;
border-left: 0px solid transparent;
border-right: 10px solid transparent;
border-bottom: 10px solid #1a044e;
}
.subscribe p {
text-align: center;
font-size: 30px;
font-weight: bold;
letter-spacing: 4px;
line-height: 28px;
}
.subscribe input {
position: absolute;
bottom: 30px;
border: none;
border-bottom: 1px solid #a3a3a3;
padding: 10px;
width: 82%;
background: transparent;
transition: all .25s ease;
font-weight: bold;
font-size: 15px;
}
.subscribe input:focus {
outline: none;
border-bottom: 1px solid #0d095e;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', 'sans-serif';
}
.subscribe .submit-btn {
position: absolute;
border-radius: 30px;
border-bottom-right-radius: 0;
border-top-right-radius: 0;
background-color: #0f0092;
color: #FFF;
padding: 12px 25px;
display: inline-block;
font-size: 12px;
font-weight: bold;
letter-spacing: 5px;
right: -10px;
bottom: -20px;
cursor: pointer;
transition: all .25s ease;
box-shadow: -5px 6px 20px 0px rgba(228, 228, 228, 0.4);
}
.subscribe .submit-btn:hover {
background-color: #07013d;
box-shadow: -5px 6px 20px 0px rgba(219, 219, 219, 0.569);
}
/* Lighting effect in the End */
#wrap
{
width: 100%;
height: 100%;
position: relative;
margin: 0 auto 0 auto;
overflow: hidden;
height: 48px;
}
#lightings
{
bottom: -60px;
position: absolute;
width: 100%;
}
section
{
/*border-radius*/
-webkit-border-radius: 50%;
-moz-border-radius: 50%;
border-radius: 50%;
height: 20px;
width: 100%;
position: relative;
margin: auto;
}
#one
{
/*animation*/
-webkit-animation: one 5s ease-in-out infinite alternate;
-moz-animation: one 5s ease-in-out infinite alternate;
-ms-animation: one 5s ease-in-out infinite alternate;
-o-animation: one 5s ease-in-out infinite alternate;
animation: one 5s ease-in-out infinite alternate;
}
@-webkit-keyframes 
one { from {
-webkit-box-shadow: 0 0 250px 20px #D8F05E;
}
to { -webkit-box-shadow: 0 0 100px 15px #f44336; }
}
@-moz-keyframes 
one { from {
-moz-box-shadow: 0 0 250px 20px #D8F05E;
}
to { -moz-box-shadow: 0 0 100px 15px #f44336; }
}
@-o-keyframes 
one { from {
-o-box-shadow: 0 0 250px 20px #D8F05E;
}
to { -o-box-shadow: 0 0 100px 15px #f44336; }
}
@keyframes 
one { from {
box-shadow: 0 0 250px 20px #D8F05E;
}
to {box-shadow: 0 0 100px 15px #f44336; }
}
#two
{
width: 90%;
/*animation*/
-webkit-animation: two 4s ease-in-out infinite alternate;
-moz-animation: two 4s ease-in-out infinite alternate;
-ms-animation: two 4s ease-in-out infinite alternate;
-o-animation: two 4s ease-in-out infinite alternate;
animation: two 4s ease-in-out infinite alternate;
}
@-webkit-keyframes 
two { from {
-webkit-box-shadow: 0 0 250px 20px #f44336;
}
to { -webkit-box-shadow: 0 0 100px 15px #D8F05E; }
}
@-moz-keyframes 
two { from {
-moz-box-shadow: 0 0 250px 20px #f44336;
}
to { -moz-box-shadow: 0 0 100px 15px #D8F05E; }
}
@-o-keyframes 
two { from {
-o-box-shadow: 0 0 250px 20px #f44336;
}
to { -o-box-shadow: 0 0 100px 15px #D8F05E; }
}
@keyframes 
two { from {
box-shadow: 0 0 250px 20px #f44336;
}
to { box-shadow: 0 0 100px 15px #D8F05E; }
}
#three
{
width: 80%;
/*animation*/
-webkit-animation: three 3s ease-in-out infinite alternate;
-moz-animation: three 3s ease-in-out infinite alternate;
-ms-animation: three 3s ease-in-out infinite alternate;
-o-animation: three 3s ease-in-out infinite alternate;
animation: three 3s ease-in-out infinite alternate;
}
@-webkit-keyframes 
three { from {
-webkit-box-shadow: 0 0 250px 20px #FFDD00;
}
to { -webkit-box-shadow: 0 0 100px 15px #f44336; }
}
@-moz-keyframes 
three { from {
-moz-box-shadow: 0 0 250px 20px #FFDD00;
}
to { -moz-box-shadow: 0 0 100px 15px #f44336 }
}
@-o-keyframes 
three { from {
-o-box-shadow: 0 0 250px 20px #FFDD00;
}
to { -o-box-shadow: 0 0 100px 15px #f44336 }
}
@keyframes 
three { from {
box-shadow: 0 0 250px 20px #FFDD00;
}
to { box-shadow: 0 0 100px 15px #f44336 }
}
#four
{
width: 70%;
/*animation*/
-webkit-animation: four 2s ease-in-out infinite alternate;
-moz-animation: four 2s ease-in-out infinite alternate;
-ms-animation: four 2s ease-in-out infinite alternate;
-o-animation: four 2s ease-in-out infinite alternate;
animation: four 2s ease-in-out infinite alternate;
}
@-webkit-keyframes 
four { from {
-webkit-box-shadow: 0 0 250px 20px #fffefe;
}
to { -webkit-box-shadow: 0 0 100px 15px #F2BBE9; }
}
@-moz-keyframes 
four { from {
-moz-box-shadow: 0 0 250px 20px #8B0000;
}
to { -moz-box-shadow: 0 0 100px 15px #F2BBE9; }
}
@-o-keyframes 
four { from {
-o-box-shadow: 0 0 250px 20px #f0f0f0;
}
to { -o-box-shadow: 0 0 100px 15px #F2BBE9; }
}
@keyframes 
four { from {
shadow: 0 0 250px 20px #8B0000;
}
to { shadow: 0 0 100px 15px #F2BBE9; }
}
#five
{
width: 60%;
/*animation*/
-webkit-animation: five 1s ease-in-out infinite alternate;
-moz-animation: five 1s ease-in-out infinite alternate;
-ms-animation: five 1s ease-in-out infinite alternate;
-o-animation: five 1s ease-in-out infinite alternate;
animation: five 1s ease-in-out infinite alternate;
}
@-webkit-keyframes 
five { from {
-webkit-box-shadow: 0 0 250px 20px #f44336;
}
to { -webkit-box-shadow: 0 0 100px 15px #F4F6AD; }
}
@-moz-keyframes 
five { from {
-moz-box-shadow: 0 0 250px 20px #f44336;
}
to { -moz-box-shadow: 0 0 100px 15px #F4F6AD; }
}
@-o-keyframes 
five { from {
-o-box-shadow: 0 0 250px 20px #f44336;
}
to { -o-box-shadow: 0 0 100px 15px #F4F6AD; }
}
@keyframes 
five { from {
box-shadow: 0 0 250px 20px #f44336;
}
to { box-shadow: 0 0 100px 15px #F4F6AD; }
}
/* FACEBOOK,INSTGRAM , Twitter*/
.wrapper {
display: inline-flex;
list-style: none;
height: 120px;
width: 100%;
padding-top: 40px;
font-family: "Poppins", sans-serif;
justify-content: center;
transform: translateX(0%); /* Centering horizontally */
}
.wrapper .icon {
position: relative;
background: #fff;
border-radius: 50%;
margin: 10px;
width: 50px;
height: 50px;
font-size: 18px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
cursor: pointer;
transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.wrapper .tooltip {
position: absolute;
top: 0;
font-size: 14px;
background: #fff;
color: #fff;
padding: 5px 8px;
border-radius: 5px;
box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
opacity: 0;
pointer-events: none;
transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.wrapper .tooltip::before {
position: absolute;
content: "";
height: 8px;
width: 8px;
background: #fff;
bottom: -3px;
left: 50%;
transform: translate(-50%) rotate(45deg);
transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.wrapper .icon.hovered .tooltip {
top: -45px;
opacity: 1;
visibility: visible;
pointer-events: auto;
}
.wrapper .icon.hovered span,
.wrapper .icon.hovered .tooltip {
text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}
.wrapper .icon.facebook.hovered,
.wrapper .icon.facebook.hovered .tooltip,
.wrapper .icon.facebook.hovered .tooltip::before {
background: #1877f2;
color: #fff;
}
.wrapper .icon.twitter.hovered,
.wrapper .icon.twitter.hovered .tooltip,
.wrapper .icon.twitter.hovered .tooltip::before {
background: #1da1f2;
color: #fff;
}
.wrapper .icon.instagram.hovered,
.wrapper .icon.instagram.hovered .tooltip,
.wrapper .icon.instagram.hovered .tooltip::before {
background: #e4405f;
color: #fff;
}
/* Footer Information*/
footer {
  background-color: #000000;
  color: #fff;
  padding: 20px 0;
}
.container {
  width: 90%;
  margin: 0 auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.col-12 {
  width: 100%;
}
ul {
  list-style: none;
  padding: 0;
}
.container ul li {
  margin-bottom: 10px;
  /* margin-left: -33px; */
}
.container h4 {
  margin-top: 0;
  color: #f44336 ;
}
p {
  margin: 0;
}
ul li strong {
  color: rgb(80, 200, 120);
}
</style>

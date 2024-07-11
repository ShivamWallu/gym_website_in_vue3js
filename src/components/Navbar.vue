<script>
export default {
  name: 'Navbar',
  mounted() {
    // Call Namehover function for the button effect
    this.Namehover();

    // Call toggleAutoHover function every 1.8 seconds (1800ms)
    setInterval(this.toggleAutoHover, 1800);
  },
  methods: {
    // Function to toggle auto-hover class every 1.8 seconds (1800ms)
    toggleAutoHover() {
      var tooltipContainer = document.getElementById('autoTooltip');
      if (tooltipContainer) {
        tooltipContainer.classList.toggle('auto-hover');
      }
    },
    // Function for button hover effect
    Namehover() {
      var button = document.querySelector(".name button");
      setInterval(() => {
        button.classList.add("effect");
        setTimeout(() => {
          button.classList.remove("effect");
        }, 500); // remove the class after 500ms
      }, 2500); // add the class every 2500ms (2.5 seconds)
    },
    // Method to close the offcanvas and navigate to '/login' route
    redirectToJoinPage() {
      // Get the close button
      const closeButton = document.querySelector('.btn-close-white');
      
      // Trigger the click event on the close button
      closeButton.click();
      
      // Wait for a short delay to ensure the offcanvas is closed, then navigate to '/login'
      setTimeout(() => {
        this.$router.push('/login');
      }, 300); // Adjust the delay as needed
    }
  }
}
</script>



<template>
  <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <div class="header">
        <img src="/src/compressed_logo.gif" class="left-image" alt="Left Image" />
        <div class="name">
          <button>SHIVAM GYM</button>
        </div>
      </div>

      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">SHIVAM GYM</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/"><i class="fas fa-home"></i> Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/home-workout"><i class="fas fa-dumbbell"></i> WorkOut at Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/advance"><i class="fas fa-rocket"></i> Advance Plan</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/plans"><i class="fas fa-dollar-sign"></i> ALL Plans Prices</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/photos"><i class="fas fa-camera"></i> Photo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact"><i class="fas fa-envelope"></i> Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/profile"><i class="fas fa-user"></i> Profile</a>
            </li>
          </ul><br><br><br><br><br><br><br><br><br><br><br>

          <div class="tooltip-container" id="autoTooltip" @click="redirectToJoinPage">
            <span class="tooltip">45k</span>
            <span class="text">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 95 114" class="svgIcon">
                <rect fill="black" rx="28.5" height="57" width="57" x="19"></rect>
                <path fill="black" d="M0 109.5C0 83.2665 21.2665 62 47.5 62V62C73.7335 62 95 83.2665 95 109.5V114H0V109.5Z"></path>
              </svg>
              Start Free Trial!
            </span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.nav {
  list-style-type: none;
  padding: 0;
}
.nav-item {
  display: inline;
  margin-right: 10px;
}
.nav-link {
  text-decoration: none;
}
.nav-link.active {
  font-weight: bold;
}
.navbar {
    margin-bottom: 100px;
    z-index: 10000; /* Ensure this is lower than the toaster */

}
/* LOGO IMAGE AND NAME */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 22px;
}
.left-image {
  width: 44px;
  height: auto;
  margin-left: -23px;
  margin-right: 40px;
}
.name {
  width: 100%;
  display: flex;
  justify-content: center;
}
.name button {
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-size: 25px;
  border: none;
  background: none;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
}
.name button::before {
  margin-left: auto;
}
.name button::after,
button::before {
  content: "";
  width: 0%;
  height: 2px;
  background: #f44336;
  display: block;
  transition: 0.5s;
}
.name button:hover::after,
.name button:hover::before,
.name button.effect::after,
.name button.effect::before {
  width: 100%;
}
@media (min-width: 380px) {
  .name button {
    color: rgb(255, 255, 255);
    text-decoration: none;
    font-size: 25px;
    border: none;
    background: none;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    margin-left: 30px;
  }
}
/* JOIN IN BUTTON */
.tooltip-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s;
  background-color: #f44336;  
  padding: 11px 18px;
  border-radius: 12px;
  cursor: pointer;
  border: 1px solid #f44336;
}
.text {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(255, 255, 255);
}
.svgIcon {
  width: 16px;
  height: auto;
}
.tooltip-container .tooltip {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.3em 0.6em;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  background-color: rgb(0, 0, 0);
  border-radius: 12px;
  color: rgb(255, 255, 255);
}
.tooltip-container .tooltip::before {
  position: absolute;
  content: "";
  height: 0.6em;
  width: 0.6em;
  bottom: -0.2em;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  background-color: rgb(0, 0, 0);
}
.tooltip-container:hover .tooltip,
.auto-hover .tooltip {
  top: -100%;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
</style>
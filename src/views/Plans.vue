<!-- views/Plans.vue -->
<template>
  <div class="home">
    <form class="plan-chooser" id="planForm">
      <div class="header">
        <div class="button">
          <div class="box">S</div>
          <div class="box">T</div>
          <div class="box">A</div>
          <div class="box">R</div>
          <div class="box">T</div>
        </div>
      </div>
      <div class="plan-option">
        <input value="free" id="free" name="plan" type="radio">
        <label for="free">
          <div class="plan-info">
            <span class="plan-cost3">Try Free</span>
            <span class="plan-name">Workout At Home🏃</span>
          </div>
        </label>
      </div>
      <div class="plan-option">
        <input value="monthly" id="monthly" name="plan" type="radio">
        <label for="monthly">
          <div class="plan-info">
            <span class="plan-cost">Intermediate(Basic)</span>
            <span class="plan-name">Basic Gym Exercises🏋️</span>
            <span class="plan-name2">Rs. 39</span>
          </div>
        </label>
      </div>
      <div class="plan-option">
        <input value="annual" id="annual" name="plan" type="radio">
        <label for="annual">
          <div class="plan-info">
            <span class="plan-cost">Advance</span>
            <span class="plan-name">Advance Gym Exercises</span>
            <span class="plan-diet">FUll Diet Plan💪🏼</span>
            <span class="plan-name2">Rs. 99</span>
          </div>
          <span class="reduction"> Save 20% </span>
        </label>
      </div>
      <button type="button" class="choose-btn" @click="selectPlan">Start</button>
    </form><br><br><br><br><br>
  </div>
</template>

<script>
export default {
  name: 'Plans',
  methods: {
    selectPlan() {
      var selectedPlan = document.querySelector('input[name="plan"]:checked').value;
      if (selectedPlan === "free") {
        this.$router.push({ name: 'HomeWorkout' }); // Navigate to HomeWorkout.vue
      } else if (selectedPlan === "monthly") {
        this.$router.push({ name: 'Home' }); // Navigate to Home.vue
      } else if (selectedPlan === "annual") {
        this.$router.push({ name: 'Advance' }); // Navigate to Advance.vue
      }
    },
    headerAutoHover() {
      const headerButton = document.querySelector('.header .button');

      setInterval(() => {
        headerButton.classList.add('hover-active');
        setTimeout(() => {
          headerButton.classList.remove('hover-active');
        }, 1000); // Duration of the hover effect
      }, 3000); // Interval between hover effects
    }
  },
  mounted() {
    this.headerAutoHover(); // Initialize the header auto-hover effect on component mount
  }
};
</script>

<style scoped>
.home{
  background-color: #222;
}

.plan-chooser {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    /* background-color: #fff; */
    max-width: 500px;
    border-radius: 10px;
    padding: 24px;
    color: #000;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    margin-top: 70px;
    width: 333px;

}
.header {
    text-align: center;
}









/* .plan-chooser .title {
    font-size: 1.875rem;
    font-weight: 700;                                                
    color: #000;
    margin-bottom: 10px;
} */

.header .button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh; /* Full viewport height */
  margin-left: -40px;
}

.header .box {
  width: 65px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  transition: all .8s;
  cursor: pointer;
  position: relative;
  background: #f44336;
  overflow: hidden;
}

.header .box:before {
  content: "P";
  position: absolute;
  top: 0;
  /* background: #0f0f0f; */
  background: #FFF;
  color: #000000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(100%);
  transition: transform .4s;

}

.header .box:nth-child(2)::before {
  transform: translateY(-100%);
  content: 'L';
}

.header .box:nth-child(3)::before {
  content: 'A';
}

.header .box:nth-child(4)::before {
  transform: translateY(-100%);
  content: 'N';
}

.header .box:nth-child(5)::before {
  content: 'S';
}

.header .button:hover .box:before {
  transform: translateY(0);
}


  /* New class for the hover effect */
  .header .hover-active .box:before {
    transform: translateY(0);
  }






/* PLANS */




.plan-chooser .desc {
    font-size: 1rem;
    line-height: 1.5rem;
    color: rgba(75, 85, 99, 1);
}

.plan-option {
    margin-top: 1rem;
}

.plan-option label {
    cursor: pointer;
    border: 2px solid rgba(229, 231, 235, 1);
    border-radius: 0.375rem;
    background-color: rgba(249, 250, 251, 1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin-bottom: 10px;
    transition: all 0.3s ease;
}

.plan-option label:hover {
    background-color: rgba(240, 240, 240, 1);
}

.plan-option label .plan-info {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}

.plan-cost {
    font-size: 1.25rem;
    font-weight: 600;
    color: #000;
    font-weight: bold;

}
.plan-cost3 {
    font-size: 1.25rem;
    font-weight: 600;
    color:rgb(91, 194, 2);
    font-weight: bold;

}

.plan-name {
    font-size: 1rem;
    color: rgb(77, 75, 99);
    font-weight: bold;
    font-style: italic;


}
.plan-name2 {
    font-size: 2rem;
    color: rgb(91, 194, 2);
    font-weight: bold;

}

.reduction {
    display: inline-block;
    border-radius: 9999px;
    border: 1px solid rgba(22, 163, 74, 1);
    background-color: rgba(220, 252, 231, 1);
    padding: 1.2rem 0.4rem;
    font-size: 0.900rem;
    font-weight: 600;
    color: rgba(22, 163, 74, 1);
    text-align: center;
}

.plan-option input:checked + label {
  border: 4px solid rgba(22, 163, 74, 1);

}

.choose-btn {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    background-color: rgba(37, 99, 235, 1);
    padding: 1rem 3rem;
    font-weight: 600;
    color: #fff;
    transition: opacity 0.3s ease;
}

.choose-btn:hover {
    opacity: 0.9;
}

.plan-option input {
    display: none;
}
</style>
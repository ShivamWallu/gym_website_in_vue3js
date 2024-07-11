<!-- components/ReadyButton.vue -->
<template>
  <div>
    <div class="heading">
      <button ref="headingButton">{{ headingButtonText }}</button>
    </div>
    <div class="subheading">
      <button class="button" ref="subheadingButton" data-text="Awesome">
        <span class="actual-text">&nbsp;{{ subheadingButtonText }}&nbsp;</span>
        <span aria-hidden="true" class="hover-text">&nbsp;{{ subheadingButtonText }}&nbsp;</span>
      </button>
    </div>
  </div>
</template>
  
  <script>
  export default {
    props: {
      headingButtonText: {
        type: String,
        default: "I'M READY FOR DAY - 1"
      },
      subheadingButtonText: {
        type: String,
        default: "back"
      }
    },
    mounted() {
      this.startHover(this.$refs.headingButton);
      this.startHover(this.$refs.subheadingButton);
    },
    methods: {
    startHover(button) {
      if (!button) return;
      button.classList.add("auto-hover");
      setTimeout(() => {
        button.classList.remove("auto-hover");
      }, 700); // Duration of hover animation in milliseconds
      setTimeout(() => this.startHover(button), 3000); // Repeat every 3 seconds
    }
  }
  };
  </script>

<style scoped>
  /* HEADING BUTTON */
  .heading button {
  --green: #1bfd9c;
  font-size: 15px;
  padding: 0.7em 2.7em;
  letter-spacing: 0.06em;
  position: relative;
  font-family: inherit;
  border-radius: 0.6em;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 1.4em;
  border: 2px solid var(--green);
  background: linear-gradient(
    to right,
    rgba(27, 253, 156, 0.1) 1%,
    transparent 40%,
    transparent 60%,
    rgba(27, 253, 156, 0.1) 100%
  );
  color: var(--green);
  box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4),
    0 0 9px 3px rgba(27, 253, 156, 0.1);
  margin-bottom: 10px;
}
.heading button:hover,
.heading button.auto-hover {
  color: #82ffc9;
  box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6),
    0 0 9px 3px rgba(27, 253, 156, 0.2);
}
.heading button:before {
  content: "";
  position: absolute;
  left: -4em;
  width: 4em;
  height: 100%;
  top: 0;
  transition: transform 0.4s ease-in-out;
  background: linear-gradient(
    to right,
    transparent 1%,
    rgba(27, 253, 156, 0.1) 40%,
    rgba(27, 253, 156, 0.1) 60%,
    transparent 100%
  );
}
.heading button.auto-hover:before {
  transform: translateX(20em);
}
.heading {
  display: flex;
  justify-content: center; /* Center horizontally */
  margin-top: 30px;
}
/*SUB-HEADING*/
.subheading .button {
  margin: 0;
  height: auto;
  background: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
}
/* button styling */
.subheading .button {
  --border-right: 6px;
  --text-stroke-color: rgba(255, 255, 255, 0.6);
  --animation-color: #37ff8b;
  --fs-size: 2em;
  letter-spacing: 3px;
  text-decoration: none;
  font-size: var(--fs-size);
  font-family: "Arial";
  position: relative;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px var(--text-stroke-color);
  margin-top: 30px;
  margin-bottom: 10px;
}
/* this is the text, when you hover on button */
.subheading .hover-text {
  position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: var(--animation-color);
  width: 0%;
  inset: 0;
  border-right: var(--border-right) solid var(--animation-color);
  overflow: hidden;
  transition: 0.5s;
  -webkit-text-stroke: 1px var(--animation-color);
}
/* hover */
.subheading .button:hover .hover-text {
  width: 100%;
  filter: drop-shadow(0 0 23px var(--animation-color));
}
/* Auto hover class */
.auto-hover .hover-text {
  width: 100%;
  filter: drop-shadow(0 0 23px var(--animation-color));
}
</style>
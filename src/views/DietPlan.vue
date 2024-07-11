<!-- views/DietPlan.vue -->

<template>
    <div class="home">
    <div class="fulldietcontainer">
        <h1>Diet Plan</h1>
        <ul>
            <li>
                <span class="time">7:00 am</span>
                <span class="task">🥤 Drink two glasses of water.</span>
            </li>
            <li>
                <span class="time">7:15 am</span>
                <span class="task">🥜 Snack on almonds, raisins, cashews, and walnuts.</span>
            </li>
            <li>
                <span class="time">10:30 am</span>
                <span class="task">🍳 Enjoy a 4-egg omelette with 2 slices of brown bread.</span>
            </li>
            <li>
                <span class="time">12:00 pm</span>
                <span class="task">🍎 Enjoy fruits or brown bread with peanut butter for lunch.</span>
            </li>
            <li>
                <span class="time">1:30 pm</span>
                <span class="task">🍽️ Lunch time.</span>
            </li>
            <li>
                <span class="time">3:00 pm</span>
                <span class="task">🥣 Have a serving of daliya.</span>
            </li>
            <li>
                <span class="time">5:00 pm</span>
                <span class="task">🍞 Have brown bread with peanut butter and 4-5 boiled eggs (without yolk).</span>
            </li>
            <li>
                <span class="time">7:00 pm</span>
                <span class="task">🍌 Prepare a banana shake using 2-3 bananas.</span>
            </li>
            <li>
                <span class="time">7:30 pm</span>
                <span class="task">🏋️‍♂️ Hit the gym for a 1.5-hour workout session.</span>
            </li>
            <li>
                <span class="time">9:00 pm</span>
                <span class="task">🥪 Have brown bread with peanuts, paneer, and 2 boiled eggs (without yolk).</span>
            </li>
            <li>
                <span class="time">10:30 pm</span>
                <span class="task">🥗 Enjoy a light dinner consisting of vegetables, roti, rice, yogurt, and salad.
                    Remember to drink water after 40 minutes of dinner.</span>
            </li>
            <li>
                <span class="time">After Dinner</span>
                <span class="task">🌙 Ensure a good night's sleep.</span>
            </li>
        </ul>
        <div class="reminders">
            <p>Remember:</p>
            <ul>
                <li>🍗 Consume boiled chicken 3 days a week.</li>
                <li>💧 Aim to drink 4 liters of water every day.</li>
            </ul>
        </div>
    </div><br><br><br><br><br>
    </div>
</template>

<script>
export default {
    mounted() {
        // Disable Ctrl+A and other key combinations
        document.addEventListener('keydown', this.handleKeyDown);
    },
    destroyed() {
        // Clean up event listener when component is destroyed
        document.removeEventListener('keydown', this.handleKeyDown);
    },
    methods: {
        handleKeyDown(event) {
            // Check if Ctrl or Command key is pressed along with 'A'
            if ((event.ctrlKey || event.metaKey) && event.key === 'a') {
                event.preventDefault(); // Prevent default behavior (select all)
            }
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
/* Disable text selection */
.home {
    -webkit-user-select: none; /* Disable selection for WebKit/Blink browsers */
    -moz-user-select: none; /* Disable selection for Gecko browsers */
    -ms-user-select: none; /* Disable selection for Edge browsers */
    user-select: none; /* Disable selection for all other browsers */
}

/* Optionally, prevent copying from the whole page */
body {
    -webkit-touch-callout: none; /* Disable long touch callout (iOS) */
    -webkit-user-drag: none; /* Prevent elements from being dragged */
    -webkit-tap-highlight-color: transparent; /* Remove highlight on tap */
}
.home{
    margin-top: 70px;
}
/* Disable text selection */


       
.fulldietcontainer {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #222;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.fulldietcontainer h1 {
    text-align: center;
    color: #fff;
    background: linear-gradient(90deg, #ff7e5f, #feb47b);
    padding: 20px;
    border-radius: 10px;
    font-family: 'Pacifico', cursive;
    font-size: 2.5em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-top: 2px;
}

.fulldietcontainer ul {
    list-style-type: none;
    padding: 0;
}

.fulldietcontainer li {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px;
    background-color: #e2e2e2;
    border-radius: 5px;
}

.fulldietcontainer .time {
    font-weight: bold;
    color: #007BFF;
}

.fulldietcontainer .task {
    color: #000000;
    display: flex;
    align-items: center;
}

.fulldietcontainer .reminders {
    margin-top: 20px;
}

.fulldietcontainer .reminders p {
    font-weight: bold;
    color: #fd5858;
}

.fulldietcontainer .reminders ul {
    list-style-type: disc;
    padding-left: 20px;
}

@media (max-width: 600px) {
    .fulldietcontainer {
        padding: 10px;
    }

    .fulldietcontainer li {
        flex-direction: column;
        align-items: flex-start;
    }

    .fulldietcontainer .time {
        margin-bottom: 5px;
    }
}
</style>
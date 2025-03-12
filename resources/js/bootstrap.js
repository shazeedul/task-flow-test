/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from "axios";
import moment from "moment";
window.moment = moment;
window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from "laravel-echo";

import Pusher from "pusher-js";
window.Pusher = Pusher;

// const baseURL = window.location.protocol + "//" + window.location.hostname;
const baseURL = document.head.querySelector('meta[name="base-url"]').content;
window.BASEURL = baseURL;

// const option = {
//     broadcaster: "pusher",
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? "mt1",
//     wsHost:
//         import.meta.env.VITE_PUSHER_HOST ??
//         `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
//     wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
//     wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
//     forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? "https") === "https",
//     enabledTransports: ["ws", "wss"],
// };

window.initLaravelEcho = async () => {
    const localStorageData = localStorage.getItem("echo_option");
    if (localStorageData) {
        const { option, expiration } = JSON.parse(localStorageData);
        // Check if the item has expired
        if (expiration && Date.now() > expiration) {
            localStorage.removeItem("echo_option");
        } else {
            window.Echo = new Echo(option);
            return;
        }
    }

    // Fetch options from the API
    await axios
        .get(`${baseURL}/api/v1/get-pusher-config`)
        .then((response) => {
            const option = response.data.data;
            const expiration = Date.now() + 1 * 60 * 1000; // Expires in 1 minute
            localStorage.setItem(
                "echo_option",
                JSON.stringify({ option, expiration })
            );
            window.Echo = new Echo(option);
        })
        .catch((error) => {
            console.error("Error fetching Echo options:", error);
        });
};

window.initLaravelEcho();

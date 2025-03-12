"use strict";
// document ready
$(function () {
    // find localize class and replace the text with localized text
    $(".localize").each(function () {
        $(this).text(localize($(this).text()));
    });
});

/**
 * Set The Local Expire Time
 */
const localExpireTime = 24 * 60 * 60 * 1000; // 24 hours
const getLocalizeUrl = document
    .querySelector("meta[name='get-localize']")
    .getAttribute("content");

var localizeData = null;
var localSetTime = null;

refreshLocalizeData();

window.localize = localize;

/**
 * Get The Local Key
 * @returns {string}
 */
function getLocalKey() {
    var key = $("html").attr("lang") ?? "en";
    return "local_" + key;
}

/**
 * Get The Local Data
 * @param {string} key
 * @returns {object}
 */
function getLocalizeData(key = null) {
    key = key ?? getLocalKey();
    if (!localizeData) {
        let localize = localStorage.getItem(key);
        // if json parse failed then set localizeData to empty object
        try {
            // Attempt to parse the stored data as JSON
            localizeData = JSON.parse(localize) || {};
        } catch (error) {
            localizeData = {}; // Set to an empty object in case of parsing failure
        }
    }
    if (!localSetTime) {
        localSetTime = localStorage.getItem(key + "_set_time") ?? null;
    }
    var currentTime = new Date().getTime();
    if (localizeData && localSetTime && typeof localizeData === "object") {
        if (currentTime - localSetTime < localExpireTime) {
            return localizeData;
        }
    }
    return {};
}

/**
 * Refresh The Local Data If Expired
 * @param {string} key
 */
function refreshLocalizeData() {
    let localize = getLocalizeData();
    if (!localize || Object.keys(localize).length === 0) {
        fetch(getLocalizeUrl, {
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": $("meta[name='csrf-token']").attr("content"),
            },
        })
            .then((response) => response.json())
            .then((res) => {
                storeLocalToLocalStorage(res.data);
            })
            .catch((error) => {
                console.error("Error fetching localization strings.");
            });
    }
}

function storeLocalToLocalStorage(data) {
    let key = getLocalKey();
    // Store the localization strings in local storage for 24 hours
    localStorage.setItem(key, JSON.stringify(data));
    localStorage.setItem(key + "_set_time", new Date().getTime());
    localizeData = data;
}

/**
 * Get the localized phrases for the given key
 * @param {string} key
 * @returns {string}
 */
function localize(key) {
    if (!key || key.length === 0 || key === " " || key === "" || key === null) {
        return "";
    }
    const localData = getLocalizeData();
    let formattedKey = key.trim();
    // remove special characters
    formattedKey = formattedKey.replace(/[.,\/\\\\\s-]|(["'])/g, "_");
    // remove multiple underscore
    formattedKey = formattedKey.replace(/_+/g, "_");
    // remove underscore from start and end
    formattedKey = formattedKey.trim("_");
    // lowercase
    formattedKey = formattedKey.toLowerCase();

    if (localData) {
        if (localData[formattedKey]) {
            return localData[formattedKey];
        }
        addLocalizationKey(formattedKey);
    }
    // If the key is not found, remove underscores and return the uppercase first letter
    return key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

function _localize(key) {
    return localize(key);
}

// Function to add a new localization key on the server
function addLocalizationKey(key) {
    const data = { key: key };
    fetch(getLocalizeUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRF-TOKEN": $("meta[name='csrf-token']").attr("content"),
        },
        body: JSON.stringify(data),
        // add csrf from meta
    })
        .then((response) => response.json())
        .then((response) => {
            storeLocalToLocalStorage(response.data);
        })
        .catch((error) => {
            console.error("Error adding localization key.");
        });
}

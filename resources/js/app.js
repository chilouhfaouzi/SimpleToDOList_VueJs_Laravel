require("./bootstrap");

import Vue from "vue";

import App from "./vue/app";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlusCircle, faTrash);

Vue.component("font-awesome-icon", FontAwesomeIcon);

const app = new Vue({
    el: "#app",
    components: { App }
});

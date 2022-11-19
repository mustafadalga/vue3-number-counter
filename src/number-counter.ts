import { vNumberCounter } from "@/directives";
import type { App } from "vue";

export default {
    install: (app: App) => {
        app.directive("number-counter", vNumberCounter);
    },
};

export { vNumberCounter };
import { defineStore } from "pinia";

export const useFontSizeStore = defineStore('fontsize', {
    state: () => {
        return {
            fontSize: 16
        }
    },
    actions: {
        setFontSize (val) {
            console.log(val)
            this.fontSize = val
        }
    }
})
const { createApp } = Vue;

createApp({
    data() {
        return {
            newMail : '',
        }
    },
    methods : {
        getNewMail () {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data.response);
                this.newMail = response.data.response;
            })
            .catch((error) => {
                console.warn(error);
            })
        }
    },

    created() {
        this.getNewMail();
    }
}).mount('#app');
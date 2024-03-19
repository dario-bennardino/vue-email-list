const {createApp} = Vue;

createApp({
    data(){
        return{
            title: 'Lista email'
            
        }
    },

    methods:{
        getApi(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((risposta) => {
                //se la chiamata va a buon fine 
            })

            .catch(errore => {
                //se la chiamata non va a buon fine
            })
        }

    },

    mounted(){
        this.getApi();
    }

    
}).mount('#app')
const {createApp} = Vue;

createApp({
    data(){
        return{
            title: 'Lista email',
            // apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail?qty=10',

            // CREO UN ARRAY VUOTO DA RIEMPIRE
            emails: []
            
        }
    },

    methods:{
        getApi(){
            axios.get(this.apiUrl)
            .then((response) => {
                //se la chiamata va a buon fine 
                console.log(response.data);
            this.emails.push(response.data.response);    

            })

            .catch(errore => {
                //se la chiamata non va a buon fine
            })
        }

    },

    mounted(){
        for(let i=0; i<10; i++){
        
            this.getApi();  
        }
        
    }

    
}).mount('#app')
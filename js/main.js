const globalURI='http://localhost/sync/LM/vueJs/kanbanCours1/API'

var myApp=new Vue({

    el:'#kanbanApp',

    data:{
        taskList:[],
        columns:[
            {name:'A faire' },
            {name:'En cours' },
            {name:'Fait' }, 
            
        ],
    },

    mounted:function(){
        this.load();      
    },

    methods:{
        load:function(){
            axios
            .get(globalURI+'/taskList.php')
            .then( response => {
                console.log(response);
                console.log( response.data);
                this.taskList =  response.data;
            });
        }
    }

 });
 

const globalURI='http://localhost/sync/LM/vueJs/kanbanCours1/API'

var myApp=new Vue({

    el:'#kanbanApp',

    data:{
        taskList:[],
        columnList:[
            {id:1,name:'A faire' },
            {id:2,name:'En cours' },
            {id:3,name:'Fait' }, 
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
                this.taskList =  response.data;
            });
        }
    }
 });
 

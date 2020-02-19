const globalURI='http://localhost/sync/LM/vueJs/github/kanban/introduction_composants/API'

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
        
        this.$on('event-add-task',function(data_){
            this.addTask(data_);
        });
          
    },
    methods:{
        load:function(){
            axios
            .get(globalURI+'/taskList.php')
            .then( response => {
                this.taskList =  response.data;
            });
        },
        addTask:function(taskToAdd_){

            var postData=new FormData();
            postData.append('task',JSON.stringify(taskToAdd_))
            
            axios({
                method: 'post',
                url: globalURI+'/taskAdd.php',
                data: postData
            })
            .then(response => {
                this.load();
            });
        } 
    }
 });
 

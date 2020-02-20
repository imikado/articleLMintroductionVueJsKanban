const globalURI='http://localhost/sync/LM/vueJs/github/kanban/introduction_dragAndDrop/API'

var myApp=new Vue({

    el:'#kanbanApp',

    data:{
        taskList:[],
        columnList:[
            {id:1,name:'A faire' },
            {id:2,name:'En cours' },
            {id:3,name:'Fait' }, 
        ],
        movingTask:null,
    },
    mounted:function(){
        this.load();     
        
        this.$on('event-add-task',function(data_){
            this.addTask(data_);
        });

        this.$on('event-start-moving',function(movingTask_){
            this.movingTask=movingTask_;
        });
        this.$on('event-stop-moving',function(){
            this.movingTask=null;
        });

        this.$on('event-drop-into',function(columnId_){
            this.movingTask.column_id=columnId_;
            this.updateTask(this.movingTask);
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
        },
        updateTask:function(taskToUpdate_){

            var postData=new FormData();
            postData.append('task',JSON.stringify(taskToUpdate_))
            
            axios({
                method: 'post',
                url: globalURI+'/taskUpdate.php',
                data: postData
            })
            .then(response => {
                this.load();
            });
        } 
    }
 });
 
 function allowDrop(ev) {
    ev.preventDefault();
}
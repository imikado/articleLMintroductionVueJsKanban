var todoList = new Vue({
    el:'#todoUl',

    data:{
        taskList:[],
    },

    mounted () { 
        this.load();
        console.log('mounted'); 
    },

    methods:{

        addTask:function(taskToAdd_){

            var postData=new FormData();
            postData.append('task',JSON.stringify(taskToAdd_))
            
            axios({
                method: 'post',
                url: 'http://localhost/sync/LM/vueJs/kanbanCours1/API/taskAdd.php',
                data: postData
            })
            .then(response => {
                this.load();
            });
        },

        load:function(){
            axios
            .get('http://localhost/sync/LM/vueJs/kanbanCours1/API/taskList.php')
            .then( response => {
                console.log(response);
                console.log( response.data);
                this.taskList =  response.data;
            });
        }

    }
});

/*
addTaskOFF:function(data_){
            this.taskList.push(data_);
        },*/
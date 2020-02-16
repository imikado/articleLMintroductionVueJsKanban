const globalURI='http://localhost/sync/LM/vueJs/kanbanCours1/API'

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
                url: globalURI+'/taskAdd.php',
                data: postData
            })
            .then(response => {
                this.load();
            });
        },

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
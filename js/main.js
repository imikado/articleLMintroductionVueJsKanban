var todoList = new Vue({
    el:'#todoUl',

    data:{
        taskList:[
            {title:'Article',text:'Ecrire l\'article Vue.js'}

        ],
    },

   
    methods:{

        addTask:function(taskToAdd_){

            this.taskList.push(taskToAdd_);
        }

    }
});
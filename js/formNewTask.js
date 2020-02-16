var formNewTask = new Vue({
    el:"#newTask",

    data:{
        text:'',
        title:'',
    },

    methods:{

        add:function(){
            let newTask={};
            newTask.title=this.title;
            newTask.text=this.text;

            todoList.addTask(newTask);

            $('#newTask').modal('hide');
         },

        show:function(){
             this.title='';
             this.text='';

         },
    }
});
var myApp=new Vue({

    el:'#kanbanApp',

    data:{
        tasks:[
            { 
                id:1,
                title:'Application Kaban',
                text:'Developper application Kaban en utilisant vueJS',
        
                status:'todo'
            },
            { 
                id:2,
                title:'Article vueJS',
                text:'Ecrire article',
        
                status:'doing'
            },

            { 
                id:3,
                title:'Envoyer article',
                text:'Envoyer à la rédaction l\'article',
        
                status:'todo'
            },
        ],
        columns:[
            {name:'A faire',status:'todo'},
            {name:'En cours',status:'doing'},
            {name:'Fait',status:'done'}, 
            
        ],
        taskmovingid:-1,
        displayFormStatus:false,
    },

    mounted:function(){

       
        this.$on('eventaddtask',function(data_){
            this.addTask(data_);
        });

      
    },

    methods:{
        load:function(){
             
        },

    

        addTask:function(data_){

            data_.id= this.tasks.length+1;

            this.tasks.push(data_);

        },

        updateTaskById:function(id_,dataToUpdate_){
            for(let loopKey in this.tasks){

                let loopTask=this.tasks[loopKey];

                if(id_ == loopTask.id){
                    loopTask=dataToUpdate_;
                }
            }

        },

        updateStatusTaskById:function(id_,status_){
            
            for(let loopKey in this.tasks){

                let loopTask=this.tasks[loopKey];

                if(id_ == loopTask.id){
                    loopTask.status=status_;
                }
            }

        },

        getTaskMovingId:function(){
            return this.taskmovingid;
        },

        enableTaskMoving:function(id_){
            this.taskmovingid=id_;
        },

        disableTaskMoving:function(){
            this.taskmovingid=-1;
        },

        showFormAdd:function(){
            $('#newTodo').modal('show');
        }
    }

 });
 

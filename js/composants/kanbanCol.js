Vue.component('kanban-col', {
    data:function(){
        return {
            
 
            dragEnterStatus:false,
        }
    },

    created:function(){
         
    },
    methods: {


        load:function(){
            this.list=modelTask.findListByStatus(this.status);

            console.log(this.list);
        },

        dragStart:function(id_,evt_){
            myApp.enableTaskMoving(id_);
        },

        dragEnd:function(){
            myApp.disableTaskMoving();
        },

        dragEnter:function(){
            this.dragEnterStatus=true;
        },
        dragExit:function(){
            this.dragEnterStatus=false;
        },

        dragFinish:function(id_,evt_){
            myApp.updateStatusTaskById(myApp.getTaskMovingId(),this.status);

            myApp.disableTaskMoving();
        },

        isTaskMoving:function(){
            if(this.taskmovingid > -1){
                return true;
            }
            return false;
        },

        getClass:function(){
            return 'col-sm-'+this.cols;
        }
    },
    props:['title','cols','cols','status','list','taskmovingid'],
    template: `
    <div  :class="getClass()" >
        <h2 class="text-success" >{{title}}</h2>

        <div v-for="task in list" v-if="task.status==status" class="card kanbanTask" @dragstart="dragStart(task.id, $event)"  @dragend="dragEnd()" draggable="true" >

            
            <h5 class="card-header bg-default text-dark movable"  >{{ task.title}}</h5>

            <div class="card-body" >
                <p class="card-text">{{ task.text}}</p>

                
            </div>
        </div>

        <div class="card kanbanTaskDrop"   v-if="isTaskMoving()"     @drop="dragFinish( $event)" ondragover="window.allowDrop(event)">
        <h5 class="card-body ">&nbsp;</h5>
        </div>

    </div>
    `
  });





Vue.component('kanban-col', {
    data:function(){
        return {
        }
    },
    methods: {

        dragStart:function(movingTask_,evt_){
            this.$root.$emit('event-start-moving',movingTask_);
        },
        dragEnd:function(){
            this.$root.$emit('event-stop-moving');
        },
        dragFinish:function(id_,evt_){
            this.$root.$emit('event-drop-into',this.columnid);
        },
        allowDrop:function(event_) {
            console.log('drag over');
            event_.preventDefault();
        },
        isTaskMoving:function(){
           if(this.movingtask==null){
               return false;
           }
           return true;
        },

        getClass:function(){
            return 'col-sm-'+this.width;
        }
    },
    props:['columnid','title','width','list','movingtask'],
    template: `
    <div :class="getClass()" >
        <h2 class="text-success" >{{title}}</h2>

        <div v-for="task in list" v-if="columnid==task.column_id"  class="card kanbanTask" @dragstart="dragStart(task, $event)"  @dragend="dragEnd()" draggable="true">
            <h5 class="card-header bg-default text-dark movable"  >{{ task.title}}</h5>
            <div class="card-body" >
                <p class="card-text">{{ task.text}}</p>
            </div>
        </div>

        <div class="card kanbanTaskDrop"   v-if="isTaskMoving()" @drop="dragFinish( $event)" ondragover="window.allowDrop(event)" >
        <h5 class="card-body ">&nbsp;</h5>
        </div>
    </div>
    `
  });





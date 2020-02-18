Vue.component('kanban-col', {
    data:function(){
        return {
        }
    },

    methods: {
        getClass:function(){
            return 'col-sm-'+this.width;
        }
    },
    props:['columnid','title','width','list'],
    template: `
    <div :class="getClass()" >
        <h2 class="text-success" >{{title}}</h2>

        <div v-for="task in list" v-if="columnid==task.column_id"  class="card kanbanTask" >
            <h5 class="card-header bg-default text-dark movable"  >{{ task.title}}</h5>
            <div class="card-body" >
                <p class="card-text">{{ task.text}}</p>
            </div>
        </div>

        <div class="card kanbanTaskDrop" >
        <h5 class="card-body ">&nbsp;</h5>
        </div>
    </div>
    `
  });





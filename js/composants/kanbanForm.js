Vue.component('kanban-form', {
    data:function(){
        return {
        
            text:'',
            title:'',
        }
    },

    created:function(){
         
    },
    methods: {
        add:function(){
            
            let data={};
            data.title=this.title;
            data.text=this.text;
            data.column_id=1;
 
            //this.$root.addTask(data);
            this.$root.$emit('event-add-task',data);

            $('#newTask').modal('hide');

        },

        show:function(){
             this.title='';
             this.text='';
        },

    },
    props:['taskmovingid'],
    template: `
    <div class="modal" tabindex="-1" role="dialog" id="newTask">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title"><input type="text" class="form-control" v-model="title"/></h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">    
              <p><textarea class="form-control" v-model="text"></textarea></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" >Close</button>
              <button type="button" class="btn btn-primary" v-on:click="add">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    `


});
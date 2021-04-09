function initVue() {
  new Vue({

    el: '#app',
    data: {

      todos: [
        'elem 1',
        'elem 2',
        'elem 3'
      ],
      newTodo: ''
    },
    methods: {
      CreateNewTodo: function() {
        if (this.newTodo.length > 0) {
          this.todos.push(this.newTodo);
          this.newTodo = '';
        }
      },
      deleteNewTodo: function(inedx) {
        this.todos.splice(index, 1)
      }
    }
  });
}

function init() {

  initVue();

}

const app = new Vue(
    {
        el: '#app',

        data: {
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ],
            newTodo: '',

        },

        methods: {
            addToList: function(currentTodoEl){
                if(!currentTodoEl == ''){
                    this.todos.push({text: currentTodoEl, done: false});
                    this.newTodo = '';
                }
            },
            removeElement: function(index){
                this.todos.splice(index, 1);
            },
            switchTrueFalse: function(index){
                this.todos[index].done = !this.todos[index].done
            }
        }
    }
)

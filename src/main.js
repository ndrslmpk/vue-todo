import { createApp } from 'vue/dist/vue.esm-bundler';


const app = createApp({
  data() {
    return {
      description: 'Never stop learning',
      inputtype: "text",
      darkmode: true,
      github: {
        name: "Ndrslmpk",
        link: "http://google.de",
      },
      todos:[{
        description: "I have to learn Vue",
        done: false,
      },
      {
        description: "I teach myself every day",
        done: true,
      }],
      counter: 2,
    }
  },
  methods: {
    toggleDarkmode(){
      this.darkmode = !this.darkmode
    },
    addTodo(){
      console.log(document.getElementById('todolist'));
      const el = document.getElementById('todolist');

      var newitemLi = document.createElement('li');

      var newitemLiInput = document.createElement('input');
      newitemLiInput.type = 'checkbox';
      newitemLiInput.name = 'todo';
      newitemLiInput.checked = false; 

      var newitemLiSpan = document.createElement('span');
      newitemLiSpan.textContent = 'newTodo';

      newitemLi.appendChild(newitemLiInput);
      newitemLi.appendChild(newitemLiSpan);

      el.appendChild(newitemLi);

    },
  }
});

app.mount('#vue-app');
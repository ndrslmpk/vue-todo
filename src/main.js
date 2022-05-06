import { createApp } from 'vue/dist/vue.esm-bundler';


const app = createApp({
  data() {
    return {
      description: 'Never stop learning'
    }
  }
});

app.mount('#vue-app');
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <div class="ui container">
      <h1>Hello Semantic UI!</h1>
      <div class="ui segment">
       <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptatibus aliquid tempore, delectus quaerat doloribus inventore rem perspiciatis debitis corporis porro molestias aspernatur itaque dolorum quibusdam. Dolore molestias laborum maiores?
       </p>
       <button class="ui button">
         Standard button
       </button>
       <button class="ui primary button">
         Primary button
       </button>
       <button class="ui secondary button">
         Secondary button
       </button>
      </div>
    </div>

    <div class="container">
      <h1 class="w3-amber">Test</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


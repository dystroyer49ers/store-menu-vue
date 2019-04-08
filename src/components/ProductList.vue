<template>
	<div>
      <h2>
        Product List
        <a href="#/add-product">(Add Product)</a>
      </h2>
      <table striped hover :items="books" :fields="fields">
        <template slot="actions" scope="row">
          <button @click.stop="details(row.item)">Details</button>
        </template>
      </table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
	</div>  
</template>	  

<script>

import axios from 'axios'

export default {
  name: 'ProductList',
  data () {
    return {
      fields: {
        pid: { label: 'ISBN', sortable: true, 'class': 'text-center' },
        name: { label: 'Book Title', sortable: true },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      products: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/product`)
    .then(response => {
      this.products = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    details (product) {
      this.$router.push({
        name: 'ShowProduct',
        params: { id: product._id }
      })
    }
  }
}
</script>

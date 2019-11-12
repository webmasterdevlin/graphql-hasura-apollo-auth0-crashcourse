<template>
  <div class="home">
    <h1>HomePage works!</h1>
    <ApolloQuery :query="require('../graphql/queries/allTodos.gql')">
      <template v-slot="{result: {error, data}}">
        <h2 v-if="error">Please try again.</h2>
        <div v-if="data">
          <h2
            v-for="todo in data.todos"
            :key="todo.id"
            style="cursor:pointer"
            @click="remove(todo)"
          >{{todo.title}}</h2>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    async remove(todo) {
      await this.$apollo.mutate({
        mutation: require("../graphql/mutations/removeTodo.gql"),
        variables: {
          id: todo.id
        },
        refetchQueries: [
          {
            query: require("../graphql/queries/allTodos.gql")
          }
        ]
      });
    }
  }
};
</script>

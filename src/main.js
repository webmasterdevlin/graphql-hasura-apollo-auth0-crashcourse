import Vue from 'vue'
import App from './App.vue'
import router from "./router";

import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

import { Auth0Plugin } from "./auth";
import { domain, clientId } from "../auth_config.json";

Vue.config.productionTip = false

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    uri: 'put-your-graphql-endpoint-here-just-copy-paste'
  })
})
Vue.use(VueApollo);
new Vue({
  render: h => h(App),
  router,
  apolloProvider
}).$mount('#app')

<template>
    <mu-container>
    <mu-flex justify-content="center">
        <mu-button @click="openSimpleDialog">Open Dialog</mu-button>
    </mu-flex>
    <mu-dialog title="Dialog" width="360" :open.sync="openSimple">
        this is simple Dialog
        <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">Close</mu-button>
    </mu-dialog>
    </mu-container>
</template>

<script>
export default {
    name: "feedback",
  data () {
    return {
      openSimple: false
    };
  },
  methods: {
    openSimpleDialog () {
      this.openSimple = true;
    },
    closeSimpleDialog () {
      this.openSimple = false;
    }
  }
};
</script>
<docs>
```js
new Vue({
  data: () => ({
    message: ''
  }),
  template: `
    <div>
      <mu-button @click="message = 'clicked'">
        Push Me
      </mu-button>

      {{message}}
    </div>
  `
})
```
</docs>
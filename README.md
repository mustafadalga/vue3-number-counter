# Vue 3 Number Counter

**Vue 3 animated number counter directive**

<p align="center">

[![vue version](https://img.shields.io/npm/v/vue3-number-counter.svg)](https://www.npmjs.com/package/vue3-number-counter)
[![vue version](https://img.shields.io/badge/vue-3.2-brightgreen.svg)](https://www.npmjs.com/package/vue3-number-counter)

</p>


## Installing

### Package manager

Using npm:

```bash
npm i vue3-number-counter
```

Then, import and register the component:


## Global Registration

main.js
```
import numberCounter from "vue3-number-counter";
app.use(numberCounter);
```

## Local Registration

* Composition API

```
<script setup>
import { numberCounter as vNumberCounter } from "vue3-number-counter";
</script>
```

* Options API
```
<script>
import { numberCounter } from "vue3-number-counter";

export default {
  directives: {
    "number-counter": numberCounter
  },
}
</script>
```


## Usage
* Example 1
```
import { numberCounter } from "vue3-number-counter";

export default {
  directives: {
    "number-counter": numberCounter
  },
  data () {
    return {
      counter: {
        countFrom: 0,
        countTo: 100,
        duration: 1000,
        text: "% completed"
      }
    }
  }
}


<template>
      <div v-number-counter="counter">0% completed</div>
</template>
```

* Example 2

```
<script setup>
import { numberCounter as vNumberCounter } from "vue3-number-counter";

const counter = {
  countFrom: 0,
  countTo: 100,
  duration: 1000,
  text: "% completed",
};
</script>

<template>
  <div v-number-counter="counter">0% completed</div>
</template>
```

* Example 3

```
const counter = {
  countFrom: 0,
  countTo: 100,
  duration: 1000,
  text: "% completed",
};
</script>

<template>
  <div v-number-counter="counter">0% completed</div>
</template>
```


# Demo
* https://vue-number-counter.netlify.app/

## License
[![License](https://img.shields.io/badge/LICENSE-GPL--3.0-orange)](https://github.com/mustafadalga/vue3-number-counter/blob/main/LICENSE)
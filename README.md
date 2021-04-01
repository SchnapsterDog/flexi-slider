[[Flexi Slider ]](https://akrinum.com)

[![prs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/SchnapsterDog/flexi-slider/pulls)
[![npm version](https://img.shields.io/bundlephobia/min/flexi-slider?style=flat-square)](https://www.npmjs.com/package/flexi-slider)
[![npm](https://img.shields.io/npm/dw/flexi-slider?style=flat-square)](https://www.npmjs.com/package/flexi-slider)

Welcome to [version 0.0.1]() of **Flexi Slider**, an easy to implement, and well maintained **Vue.js** component.

You can support this project by giving it a star, or following the author. :heart:.

## :exclamation::exclamation::exclamation: This is README for FlexiSlider component :exclamation::exclamation::exclamation:

Flexi Slider vue component made by [Oliver](https://akrinum.com)

## ⚙ Installation

- npm install flexi-slider --save

## 🤔 How to use it? 

### Module usage 

```js
import Vue from 'vue';
import FlexiSlider from 'flexi-slider';
Vue.use(FlexiSlider);

export default {
  data() {
    return {
      inputData: [
        {
          title: "Some Title 1",
          paragraph: "Some Lorem Ipsum 1",
          img:
            "https://app.imgforce.com/images/user/AwB_1617252386_ohrid4.jpg",
        },
        {
          title: "Some Title 2",
          paragraph: "Some Lorem Ipsum 2",
          img:
            "https://app.imgforce.com/images/user/yqI_1617252387_ohrid3.jpg",
        },
        {
          title: "Some Title 3",
          paragraph: "Some Lorem Ipsum 3",
          img:
            "https://app.imgforce.com/images/user/bXz_1617252387_ohrid2.jpg",
        },
        {
          title: "Some Title 4",
          paragraph: "Some Lorem Ipsum 4",
          img:
            "https://app.imgforce.com/images/user/K3X_1617252387_ohrid1.jpg",
        }
      ]
    }
  }
}
```

```html
<flexi-slider />

<flexi-slider
  :inputData="inputData"
  :turnTimer="false"
  :timerInterval="1000"
  :nextButtonText="'Next'"
  :prevButtonText="'Prev'"
>
```

### ❔ Props & event

```

| Name                    | Type        | Mandatory     | Description 

| :-----                  | :-------    | :--------     |------------------------------- 
| inputData               | Array       | No            | Default data array. Look at the sample above to see what data could be passed as array
| turnTimer               | Boolean     | No            | False by default. If true, slider will change slides automatically
| timerInterval           | Number      | No            | Time interval in miliseconds for chaning slides. By default it is set to 2000ms (slides will change automatically in every 2 seconds)
| transitionOn            | Boolean     | No            | Turn on or turn off the transition. By default, transition is turn on.
| transitionName          | String      | No            | Change the transition class with your custom class. By default, the name of the transition class is slider
| nextButtonText          | String      | No            | Text for the next button
| prevButtonText          | String      | No            | Text for the prev button

```

## License

[MIT](http://opensource.org/licenses/MIT)
export default {
  inputData: {
    type: Array,
    default: () => {
      return [
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
      ];
    },
  },
  currentIndex: {
    type: Number,
    default: () => {
      return 0;
    },
  },
  turnTimer: {
    type: Boolean,
    default: () => {
      return false;
    },
  },
  timerInterval: {
    type: Number,
    default: () => {
      return 2000;
    },
  },
  nextButtonText: {
    type: String,
    default: () => {
      return "Next";
    },
  },
  transitionOn: {
    type: Boolean,
    default: () => {
      return true;
    },
  },
  transitionName: {
    type: String,
    default: () => {
      return "slider";
    },
  },
  prevButtonText: {
    type: String,
    default: () => {
      return "Prev";
    },
  }
};
Component({
  properties: {
    urls: {
      type: Array,
      value: [],
    },
    mode: {
      type: String,
      value: 'aspectFill',
    },
  },
  data: {
    currentIndex: 0,
  },
  methods: {
    handleChange(e) {
      this.setData({ currentIndex: e.detail.current });
    },
    prevImg() {
      const { currentIndex, urls } = this.data;
      wx.previewImage({
        urls,
        current: urls[currentIndex],
      });
    },
  },
});

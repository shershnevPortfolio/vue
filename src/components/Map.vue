

<script>
// @ is an alias to /src
  Vue.component('map', {
  data: function () {
    return {
      count: 0
    }
  },

  template:
    `
      <div>
          <img src="@/img/map.png" alt="map">
      </div>
    `
})




</script>

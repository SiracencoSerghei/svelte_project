<script lang="ts">
  let name = 'world';
  let src = 'https://cdn.pixabay.com/photo/2016/08/24/14/29/earth-1617121_1280.jpg';
</script>

<style>
  h1 {
    color: #ff3e00;
  }
</style>

<h1>Hello {name.toUpperCase()}!</h1>
<img src={src} alt="{name} image"/>

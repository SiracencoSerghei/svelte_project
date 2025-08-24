<script lang="ts">
  export let name: string;
</script>
<input type="text" bind:value="{name}" />

<h1>Hello {name.toUpperCase()}!</h1>

<style>
  h1 {
    color: rgb(38, 139, 8);
    text-align: center;
  }
</style>

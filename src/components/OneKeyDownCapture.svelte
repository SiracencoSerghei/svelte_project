<!-- спершу спрацьовує інпут, потім див -->
<!-- <div onkeydown={(e) => alert(`<div> ${e.key}`)} role="presentation">
	<input onkeydown={(e) => alert(`<input> ${e.key}`)} />
</div> -->

<!-- зворотний порядок - перший див, потім інпут -->

<div
  onkeydowncapture={(e) => alert(`<div> ${e.key}`)}
  role="presentation"
  placeholder="Click here and press a key"
>
  <p style="color: gray;">Click here and press a key</p>
  <input onkeydowncapture={(e) => alert(`<input> ${e.key}`)} />
</div>

<style>
  div {
    border: 1px solid black;
    padding: 1em;
  }
</style>

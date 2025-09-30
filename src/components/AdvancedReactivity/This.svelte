<script>
	import { paint } from '../../utils/gradient.js';

	let canvas;

	$effect(() => {
		const context = canvas.getContext('2d');

		let frame = requestAnimationFrame(function loop(t) {
			frame = requestAnimationFrame(loop);
			paint(context, t);
		});

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<p>CANVAS</p>
<canvas bind:this={canvas} width={32} height={32}></canvas>


<style>
	canvas {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: #666;
		mask: url('../../utils/svelt-logo-mask.svg') 50% 50% no-repeat;
		mask-size: 60vmin;
		-webkit-mask: url('../../utils/svelt-logo-mask.svg') 50% 50% no-repeat;
		-webkit-mask-size: 60vmin;
	}
</style>

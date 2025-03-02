<!-- notes:
 - should be able to click anywhere on the image and the slider should jump to that point?
 - double check that this is accessible
 - if this is saved to a read-it-later app, or the "reader" mode is enabled in the browser, or javascript is disabled, the images should just be displyaed side by side to make it accessible
  - give the developer the option to do horizontal or vertical slider?
  - add a full screen button?
 -->

<script lang="ts">
  import { onMount } from "svelte";

  export let beforeImage: string;
  export let afterImage: string;
  export let beforeAlt: string = "Before image";
  export let afterAlt: string = "After image";
  export let width: number = 700;
  export let height: number = 400;

  let container: HTMLDivElement;
  let slider: HTMLDivElement;
  let isDragging = false;
  let position = 50; // Default to middle

  function updateSliderPosition(clientX: number) {
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    position = (x / rect.width) * 100;
  }

  function handleMouseDown(event: MouseEvent) {
    isDragging = true;
    updateSliderPosition(event.clientX);
  }

  function handleTouchStart(event: TouchEvent) {
    isDragging = true;
    updateSliderPosition(event.touches[0].clientX);
  }

  function handleMouseMove(event: MouseEvent) {
    if (!isDragging) return;
    updateSliderPosition(event.clientX);
  }

  function handleTouchMove(event: TouchEvent) {
    if (!isDragging) return;
    event.preventDefault();
    updateSliderPosition(event.touches[0].clientX);
  }

  function handleEnd() {
    isDragging = false;
  }

  function handleKeyDown(event: KeyboardEvent) {
    const STEP = 1;

    switch (event.key) {
      case "ArrowLeft":
        position = Math.max(0, position - STEP);
        break;
      case "ArrowRight":
        position = Math.min(100, position + STEP);
        break;
      default:
        return;
    }

    event.preventDefault();
  }

  onMount(() => {
    document.addEventListener("mouseup", handleEnd);
    document.addEventListener("touchend", handleEnd);

    return () => {
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchend", handleEnd);
    };
  });
</script>

<div
  class="relative select-none touch-none"
  style="width: {width}px; height: {height}px;"
  bind:this={container}
  on:mousemove={handleMouseMove}
  on:touchmove={handleTouchMove}
  role="region"
  aria-label="Image comparison container"
>
  <!-- Before image -->
  <img
    src={beforeImage}
    alt={beforeAlt}
    class="absolute top-0 left-0 w-full h-full object-cover"
    {width}
    {height}
  />

  <!-- After image (clipped) -->
  <div
    class="absolute top-0 left-0 w-full h-full overflow-hidden"
    style="clip-path: inset(0 {100 - position}% 0 0);"
  >
    <img
      src={afterImage}
      alt={afterAlt}
      class="absolute top-0 left-0 w-full h-full object-cover"
      {width}
      {height}
    />
  </div>

  <!-- Slider control -->
  <div
    bind:this={slider}
    role="slider"
    aria-label="Image comparison slider"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow={position}
    tabindex="0"
    class="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg"
    style="left: {position}%;"
    on:mousedown={handleMouseDown}
    on:touchstart={handleTouchStart}
    on:keydown={handleKeyDown}
  >
    <!-- Slider handle -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
    >
      <svg
        class="w-6 h-6 text-gray-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 7h8M8 12h8M8 17h8"
        />
      </svg>
    </div>
  </div>
</div>

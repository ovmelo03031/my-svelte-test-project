<script lang="ts">
  import { elements } from './lib/store/stores';
  import ElementAdd from './lib/components/ElementAdd.svelte';
  import Element from './lib/components/Element.svelte';
</script>

<div class="container">
  <h1 class="display-5 my-3">CRUD of test</h1>
  <i class="bi-alarm" style="font-size: 2rem; color: cornflowerblue;" />
  <ElementAdd />
  {#each $elements as item}
    <Element {item} />
  {/each}
</div>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>

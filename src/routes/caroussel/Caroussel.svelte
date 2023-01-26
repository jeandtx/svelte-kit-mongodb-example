<script lang="ts">
    import { scrollIntoView } from "$lib/scrollIntoView";
    import type { PageData } from './$types';

	export let data: PageData;

    let images: any[] = [];

    images.push(...data.tutorials);

</script>






<div class="container">
	<ul class="caroussel">
        {#each images as image}
            <li class="element" id={`${image.id}`}>
                <a href="#{image.id}" on:click|preventDefault={scrollIntoView}>
                    <img src={image.url} alt=""/>
                </a>
            </li>
        {/each}
    </ul>
</div>
<nav>
    <ul class="caroussel">
        {#each images as image}
            <li>
                <a href="#{image.id}" on:click|preventDefault={scrollIntoView}>{image.id}</a>
            </li>
        {/each}
    </ul>
</nav>

<style>
a{
    text-decoration: none;
}
ul{
    list-style: none;
    padding: 0;
    margin: 0;
}
.caroussel {
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
}
.caroussel::before{
    content: '';
    flex-shrink: 0;
    width: 1rem;
}

.caroussel::after{
    flex-shrink: 0;
    width: 1rem;
}

.element {
    flex-shrink: 0;
    scroll-snap-align: center;
}
</style>

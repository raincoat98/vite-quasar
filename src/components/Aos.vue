<script setup lang="ts">
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="h-96 flex justify-center items-center text-center p-5">
    <div data-aos="fade-up">
      <h3 class="text-4xl mb-4">
        Deploy faster Everything you need to deploy your app
      </h3>

      <p class="text-xl">
        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
        voluptatum cupiditate veritatis in accusamus quisquam.
      </p>
    </div>
  </div>
  <div class="hello">
    <!-- card 1 -->

    <div
      data-aos="zoom-in"
      class="card"
      style="width: 18rem; margin: 100px auto"
    >
      <img
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card 1</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    <!-- card 2 -->
    <div
      data-aos="new-animation"
      data-aos-offset="200"
      data-aos-easing="ease-in-out"
      class="card"
      style="width: 18rem; margin: 200px auto"
    >
      <img
        src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card 2</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    <!-- card  3-->
    <div
      data-aos="fade-right"
      class="card"
      style="max-width: 18rem; margin: 200px auto"
    >
      <img
        src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card 3</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    <!-- card 4 -->
    <div
      data-aos="fade-left"
      class="card"
      style="width: 18rem; margin: 200px auto"
    >
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card 4</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <!-- card 5 -->
    <div
      data-aos="flip-left"
      class="card"
      style="width: 18rem; margin: 200px auto"
    >
      <img
        src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card 5</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

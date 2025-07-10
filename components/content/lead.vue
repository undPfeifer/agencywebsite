<script setup>

</script>

<template>
  <client-only>

  <div>
    <p class="bold"> <slot  name="leadleft"> </slot> </p>
    <p> <slot  name= "leadright"> </slot> </p>
  </div>

</client-only>

</template>


<style scoped> 
    div{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        padding: 40px 30px 60px 30px;
        
    }

    p {
        font-size: 20px !important;
        line-height: 1.2;
        font-weight: 100;
    }

    .bold{
        font-weight: bold;
          font-size: 20px !important;
    }

    @media (max-width:700px) {
      div {
        grid-template-columns: 1fr;
        padding: 0px;
      }

      p {
        font-size: 16px !important;
      }
      .bold {
        font-size: 16px !important;
      }
    }
</style>
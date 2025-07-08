<script setup> 
    const {slug} = useRoute().params;
</script>


<template>
    <article class="master--container">
        <ContentDoc :path="`/articles/${slug}`" v-slot= "{ doc }"> 
        <!-- {{ doc }} -->
            <!--- Header -->
         
                <img :src = "doc.thumbnail" alt="" class="header--img">
                    <div class="tag--container"> 

                        <NuxtLink class="tag" v-for="tag in doc.tags"> {{ tag }}</NuxtLink>
                    </div>


                <div class="header--text_grid"> 
                    <div class="header--text">

                        <h1> {{ doc.title }} </h1>
                        <h3> <span class="times">for </span>{{ doc.client }}</h3>
                    </div>
                    <p class="header--description"> {{ doc.description }}</p>
                </div>
            <!--- Header -->


        <div class="content"> 
            <ContentRenderer :value="doc" class="content"> 

            </ContentRenderer>
        </div>



        </ContentDoc>


    </article>

</template>

<style scoped>

.times{
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
    color: black;
}



.master--container {
    padding: 0px 20px 20px 20px;
    width: 100%;
    overflow-x: hidden;
}

.content {
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    gap: 60px;

}

p {
   margin: 0px;
   color: rgb(0, 16, 243);
}

h1 { 
    letter-spacing: -2px;
    margin: 0px;
    font-size: 50px;
    line-height: 1;
    max-width: 12ch;
    margin-bottom: 0px;
    
}

h3 {
    color: rgb(164, 164, 164);
    font-size: 20px;

}
    img {
        width: 100%;
        position: relative;

        
    }

.header--img {
    height: 66dvh;
    border-radius: 8px;
}

.header--text_grid{
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 40px;
    padding: 0px 0px 10px 20px;
}

.header--description {
    margin-top: 24px;
    font-size: 20px;
    font-weight: bold;
    color:black;
    max-width: 400px;
    padding-bottom: 50px;
}


.header--text{
    padding: 20px 0px 40px 0px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.tag {
    font-size: 16px;
    background-color:  rgb(0, 0, 0);
    padding: 3px 8px;
    border-radius: 8px;
    color: white;
    font-weight: 300;
    


    
}

.tag--container{
    display: flex;
    gap: 4px;
    margin-top: -36px;
    margin-left: 8px;
    margin-bottom: 16px;
    z-index: 10;
    position: relative;

}

@media (max-width:700px) {
    .header--text{
    padding: 32px 0px 12px 0px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.header--text_grid{
    display: grid;
    grid-template-columns: 1fr;
    gap: 0px;
    padding: 0px 0px 0px 0px;
}



}




</style>

<style> 

</style>



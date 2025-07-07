<template>
    <section> 
        <div class="card--wrapper">
            <slot name="image" class="img"></slot>

            <div class="flex-vert"> 
                <h2>
                    <slot name="name"> </slot>
                </h2>
                <h3> 
                    <slot name="title"> </slot>
                </h3>
                
            </div>
            <div class="hide--kontakt-ansehen">
                        <h4 class="projekt--ansehen">kontakt aufnehmen</h4>
                        <img  src="/assets/Arrow.svg" alt="" class="arrow">

            </div>


    </div>

    </section>

    <div>

    </div>



</template>

<style scoped> 

* {
    margin: 0px;
}

.arrow{
    height: 6px;
    width: 85%;
}

.card--wrapper{
    height: auto;
    max-width: 320px;
    min-width: 300px;
    height: auto;
    width: fit-content;

}

.card--wrapper:hover .hide--kontakt-ansehen{
            width: 200px;
        }

    .card--wrapper:hover .img {
            border-radius: 12px;
            border: solid 1px red;

    }

        .hide--kontakt-ansehen{
            display: flex;
            width: 0px;
            overflow: hidden;
            transition: 0.9s cubic-bezier(0.075, 0.82, 0.165, 1);
            white-space: nowrap;
            overflow-wrap: break-word;
            margin-top: 0px;
            padding: 0px;
            height: auto;
            gap: 0px;

            cursor: pointer;


        }

    .flex-vert {
        margin-bottom: 12px;
    }

    .img {
        object-fit: cover;

        min-width: 100%;
        height: 220px !important;
        margin-bottom: 6px;
        border-radius: 8px;

        transition: border-radius 1s cubic-bezier(0.075, 0.82, 0.165, 1);


    }


    section {
        padding: 24px 0px;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 2px;

    }


    h2 {
        font-weight: 700;
        font-size: 20px;

    }

    h3 {
        font-family: 'Times New Roman', Times, serif;
        font-style: italic;
        font-weight: 400;
        font-size: 17px;
    }




    h4{
        color: blue;
    }



</style>
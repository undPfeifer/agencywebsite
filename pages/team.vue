
<template>
    <div class="pseudoBody"> 
    
        <Strichma />
        <section class="card--list_wrapper"> 
            


            <teamCard>
    
        <!-- ----x----x----x----x  DIMI ----x----x----x----x----x----x -->
    
                <template #image>
                    <img src="/team/dimi1.jpeg" alt="" class="img dimi"/>
                </template>
                <template #name> Dimitri Pfeifer </template>
                <template #title> Inhaber, Grafiker EFZ & Programmierer </template>
            </teamCard> 
    
        <!-- ----x----x----x----x  VIVI ----x----x----x----x----x----x -->
    
            <teamCard>
                <template #image>
                    <img src="/team/vivi2.webp" alt="" class="img"/>
                </template>
                <template #name> Vivi Ammann </template>
                <template #title> Grafikerin EFZ, Texterin </template>
            </teamCard> 
    
        <!-- ----x----x----x----x  marco ----x----x----x----x----x----x -->
        <teamCard>
                <template #image>
                    <img src="/team/Marco-590x590.jpg" alt="" class="img"/>
                </template>
                <template #name> Marco Bosshard </template>
                <template #title> Office365ler, Admin & Finanzen </template>
            </teamCard> 
    
          
    
    
        </section>
    </div>
    
    </template>
    
    <style scoped> 
        h1 {
            font-size: 22px;
            letter-spacing: 0.5px;
            font-weight: 700;
    
        }
    
        .pseudoBody {
            padding: 10px 0px 40px 20px;
        }
    
        section{padding: 0px 0px;}
    
    
        .card--list_wrapper{
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
    
            
    
        }

        img {
            width: 100%;
            max-width: 300px;
            aspect-ratio: 3/4;
        }

        @media (min-width:450px) {
            img {
                max-width: none;
            }
        }
    
    </style>
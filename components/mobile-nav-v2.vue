<template>
    <nav>
        <div> 
            <NuxtLink to="/" class="nav-link">home</NuxtLink>
            <NuxtLink to="/team" class="nav-link">team</NuxtLink>
            <NuxtLink to="/kontakt" class="nav-link">kontakt</NuxtLink>

            <a href="">top</a>
            
        </div>

    </nav>
</template>

<style scoped>
* {
    font-size: 12px;
}
nav{
    position: fixed;
    bottom: 0px;

    background-color: rgba(153, 153, 153, 0);

    width: 100%;
    display: flex;
    gap: 20px;

    align-items: center;
    justify-content: center;

    padding: 8px 20px 8px 20px;


}

a{
    all: unset;

    font-weight: 600;
    border-radius: 80px;

    cursor: pointer;
    width:100%;
    padding: 12px 20px;
    background-color: rgb(244, 244, 244);
    /* box-shadow: inset 1px 10px 10px rgba(255, 255, 255, 0.708);
*/
    box-shadow: 1px 1px 2px #00000030, 
    inset 1px 1px 4px rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;

}

div {
    display: flex;
    gap: 6px;    
    background-color: rgb(242, 242, 242);
    padding: 8px;
    border-radius: 40px;
}

@media (min-width:700px) {
    nav {display: none;}
}


</style>
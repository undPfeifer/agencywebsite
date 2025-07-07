<template>
    <nav>
        <div> 
            <a href="/">home</a>
            <a href="/team">team</a>
            <a href="">top</a>
        </div>

    </nav>
</template>

<style scoped>
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
    border-radius: 8px;

    cursor: pointer;
    width:100%;
    padding: 12px 20px;
    background-color: rgb(255, 255, 255);
    /* box-shadow: inset 1px 10px 10px rgba(255, 255, 255, 0.708);
*/
    box-shadow: 2px 2px 0px #e4e4e4, 
    inset 1px 1px 0px rgb(89, 89, 89);
    display: flex;
    justify-content: center;
    align-items: center;

}

div {
    display: flex;
    gap: 6px;    
    background-color: rgb(255, 255, 255);
    padding: 10px;
    border-radius: 14px;
}

@media (min-width:700px) {
    nav {display: none;}
}


</style>
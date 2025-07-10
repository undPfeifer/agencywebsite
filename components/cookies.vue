<template>
    <section>
        <div>
            <h4>
                Wir verwenden Cookies um zu sehen wieviele Besucher wir haben. Alle gesammelten Daten sind anonymisiert.
            </h4>
            <button>ok</button>
            <a href=""> mehr erfahren</a>
        </div>
    </section>

</template>

<style scoped>
    section {
        position: fixed;
        bottom: 0px;
        z-index: 99999;
        width: 100%;

        
    }

    div {

        background-color: azure;
        padding: 20px 20px;

        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        align-items: center;
        justify-content: end;
        width: fit-content;

        border-radius: 8px;
    }

    a{
        font-size: 11px;
        text-decoration: underline;
        color: rgb(0, 0, 0);
    }

h4 {
    font-size: 12px;
    font-weight: 400;


}

    button {
        all: unset;

        padding: 4px 6px;
        border-radius: 4px;

        background-color: rgb(238, 217, 58);
        width: fit-content;

        font-size: 12px;


        cursor: pointer;
    }

    button:hover {
        filter: brightness(1.1);
    }
</style>
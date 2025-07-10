<template>
    <section>
        <img src="/img/kontakt-1.webp" alt="">

        <h1>Für unverbindliche Hallos oder absolute Notfälle :)</h1>
        <img class="hand" src="https://cdn.prod.website-files.com/662fc30c6f0e360e128c9312/684c231d55101f050420c81d_Unkreativist_Hand-p-500.png" alt="">


        <a href="https://wa.me/0762456090" target="_blank">  <img class="icon" src="/assets/whatsapp-glyph-black-logo-svgrepo-com.svg" alt=""> </a> 
      <div>
        <button @click="handleClick">{{ buttonText }}</button>
        <div class="hide-container" ref="appender"></div>
      </div>
      <p>        /<br> :)-0= ; <br>   /

        </p>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        emailShown: false,   // track if email has been shown
        buttonText: 'Email' // initial button text
      };
    },
    methods: {
      handleClick() {
        const encoded = 'ZGltaXRyaS5wZmVpZmVyQGdteC5uZXQK'; // base64 encoded
        const decoded = atob(encoded).trim(); // decode and remove trailing newline
  
        if (!this.emailShown) {
          // First click: show email
          this.createMail(decoded);
          this.buttonText = 'Copy email';
          this.emailShown = true;
        } else {
          // Second click: copy to clipboard
          navigator.clipboard.writeText(decoded).then(() => {
            this.buttonText = 'Copied';
            setTimeout(() => {
              this.buttonText = 'Copy email'; // reset text after 2s
            }, 2000);
          }).catch(err => {
            console.error('Clipboard copy failed:', err);
          });
        }
      },
  
      createMail(decoded) {
        if (!this.$refs.appender.querySelector('p')) {
          const y = document.createElement('div');
          y.innerHTML = `<p>${decoded}</p>`; // display decoded mail
          this.$refs.appender.appendChild(y); // use Vue ref
        }
      }
    }
  };
  </script>
  
  <style scoped> 
.icon{
    width: 10vw;
    border-radius: 0px;
    cursor: pointer;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.icon:hover {
    transform: scale(1.1);

}

  button {
    all: unset;
    cursor: pointer;
    background-color: black;
    color: white;
    border-radius: 4px;
    padding: 8px 16px;
    width: fit-content;
    transition: background-color 0.3s ease, opacity 0.3s ease;
    font-size: 6vw;
  }
  
  button:hover {
    opacity: 100%;
    background-color: blue;
  }
  
  section {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 30px;
  }
  
  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }


  @media (min-width:1000px) {
    .icon {
        width: 120px;
    }
  }

  @media (max-width:700px) {
    h1 {
        font-size: 40px;
    }
  }
  </style>

  <style scoped>
    img {
        max-height: 70vh;
    }

    .hand {
        transform: scaleX(-1)  rotate(40deg);
        margin-bottom: -100px;
        margin-left: 20vw; 
        height: 200px;
        width: 300px;
        object-fit: scale-down;
    }
</style>
  
<template>
    <section>
        <img src="/img/kontakt-1.webp" alt="">
      <div>
        <button @click="handleClick">{{ buttonText }}</button>
        <div class="hide-container" ref="appender"></div>
      </div>
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
  }
  
  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  </style>

  <style scoped>
    img {
        max-height: 70vh;
    }
</style>
  
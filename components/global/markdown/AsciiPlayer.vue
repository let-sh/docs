<template>
  <figure :id="id" class="asciinema"></figure>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      source: `https://asciinema.org/a/${this.id}.js`,
      ascid: `asciicast-${this.id}`
    };
  },
  mounted() {
    // Can't use script tags directly apparently
    let asciiscript = document.createElement("script");
    asciiscript.setAttribute("src", this.source);
    asciiscript.setAttribute("id", this.ascid);
    asciiscript.setAttribute("speed", 2);
    console.log(this.id);
    document.getElementById(this.id).appendChild(asciiscript);
  }
};
</script>

<style></style>

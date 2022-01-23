<template>
  <figure :id="id" class="asciinema" />
</template>

<script>
export default {
  name: 'AsciiPlayer',
  props: ['id'],
  data () {
    return {
      source: `https://asciinema.org/a/${this.id}.js`,
      ascid: `asciicast-${this.id}`
    }
  },
  mounted () {
    // Can't use script tags directly apparently
    const asciiscript = document.createElement('script')
    asciiscript.setAttribute('src', this.source)
    asciiscript.setAttribute('id', this.ascid)
    asciiscript.setAttribute('speed', 2)
    document.getElementById(this.id).appendChild(asciiscript)
  }
}
</script>

<style></style>

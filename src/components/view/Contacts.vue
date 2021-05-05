<template>
<div class="contacts">
  <ul>
    <li v-for="item in config.contacts">
      <a :href="item.link">
        <font-awesome-icon class="contact-icon" :icon="item.icon"></font-awesome-icon>
      </a>
    </li>
  </ul>
</div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faTelegram,faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub,faEnvelope,faTelegram,faTwitter)

export default {
  name: "Contacts",
  props: {
    config: Object
  },
  components: {
    FontAwesomeIcon
  }
}
</script>


<style scoped>

.contacts{
  margin-top: 16px;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  float: left;
  padding: 0 12px;
}

ul li a {
  color: rgba(255,255,255,.9);
  transition: .5s;
}

ul li a:hover {
  color: white;
}

.contact-icon {
  width: 22px;
  height: 22px;
  text-shadow: 1px 1px 1px gray;
}

</style>
<template>
  <div class="columns">
    <ul>
      <li v-for="item in config.columns">
        <a :href="item.link" target="_blank">
          <p class="item ">{{ item.name }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Columns",
  props: {
    config: Object
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgba(255,255,255,.8);
}

.columns {
  border-top: white solid 1px;
  border-bottom: white solid 1px;
  /*border-radius: 8px;*/
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
}

.columns:before {
  content: '';
  height: 41px;
  display: block;
  position: absolute;
  left: 50%;
  transform: translateY(-100%);
  width: 1px;
  background: white;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

ul li {
  float: left;
  transition: all 0.8s;
}

/*ul>:first-child{*/
/*  border-bottom-left-radius: 8px;*/
/*  border-top-left-radius: 8px;*/
/*}*/

/*ul>:last-child{*/
/*  border-bottom-right-radius: 8px;*/
/*  border-top-right-radius: 8px;*/
/*}*/

.item {
  margin: 0;
  font-size: 16px;
  padding: 2vh;
}

ul li:hover{
  background: rgba(255,255,255,.2);
  color: white;
}

</style>
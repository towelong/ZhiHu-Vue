<template>
  <Layout>

    <template v-slot:left>
      <Card>
        <Nav />
      </Card>
    </template>

    <template v-slot:right>
      <Card class="column">
        <Function />
      </Card>
    </template>
    
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Nav from "@/components/Nav";
import Function from "@/views/Function";

export default {
  name: "Home",
  components: {
    Layout,
    Card,
    Nav,
    Function,
  },
};
</script>

<style scoped>
.column{
  display: flex;
  flex-direction: column;
}
</style>
